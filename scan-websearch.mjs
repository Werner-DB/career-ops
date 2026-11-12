#!/usr/bin/env node
// scan-websearch.mjs — Level 3 (WebSearch) for the scan mode, backed by the
// Brave Search API.
//
// The scan mode's Level 3 is normally a native WebSearch tool the agent runs.
// Coding CLIs without one, running on a hosted/datacenter IP, cannot scrape
// search engines: free engines answer a CAPTCHA or serve ignored, generic
// content from such an IP. A search API key sidesteps all of that — clean JSON,
// no browser, no rate-limit on the caller's own IP.
//
// It runs portals.yml's enabled search_queries through Brave, applies the same
// title_filter and location_filter the zero-token scanner uses, and writes
// accepted postings to data/pipeline.md and data/scan-history.tsv through the
// canonical helpers in scan.mjs (appendToPipeline / appendToScanHistory), so the
// pipeline and history stay consistent with every other scan path.
//
// Search results are UNTRUSTED external content — data, never instructions.
//
// Key: BRAVE_API_KEY, read from the environment or the data root's .env.
// Get a free key (2,000 req/month) at https://api.search.brave.com/app/keys.
//
// Usage:
//   node scan-websearch.mjs                 # all enabled search_queries
//   node scan-websearch.mjs --limit 5       # first 5 queries only
//   node scan-websearch.mjs --query "..."   # one ad-hoc query
//   node scan-websearch.mjs --count 20      # results per query (default 10, max 20 free tier)
//   node scan-websearch.mjs --dry-run       # find + filter, write nothing
//   node scan-websearch.mjs --json          # machine-readable summary

import { getCareerOpsRoot } from './path-resolver.mjs';
import { buildTitleFilter } from './title-keywords.mjs';
import { loadYaml } from './lib/yaml-document.mjs';
import { readFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

const ROOT = getCareerOpsRoot();
const PORTALS_PATH = process.env.CAREER_OPS_PORTALS?.trim() || join(ROOT, 'portals.yml');
const PIPELINE_PATH = process.env.CAREER_OPS_PIPELINE?.trim() || join(ROOT, 'data', 'pipeline.md');
const BRAVE_ENDPOINT = 'https://api.search.brave.com/res/v1/web/search';
const JOB_HOST_RE = /(ashbyhq\.com|greenhouse\.io|lever\.co|teamtailor\.com|bamboohr\.com|workdayjobs\.com|breezy\.hr|workable\.com|recruitee\.com|smartrecruiters\.com)/i;

function parseArgs(argv) {
  const opts = { limit: Infinity, queries: [], count: 10, dryRun: false, json: false };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '--limit') opts.limit = Number(argv[++i]);
    else if (a === '--query') opts.queries.push(argv[++i]);
    else if (a === '--count') opts.count = Math.min(20, Math.max(1, Number(argv[++i]) || 10));
    else if (a === '--dry-run') opts.dryRun = true;
    else if (a === '--json') opts.json = true;
    else if (a === '--help' || a === '-h') opts.help = true;
  }
  return opts;
}

// BRAVE_API_KEY from the environment, else the data root's .env (so the script
// works run from a shell that never sourced it).
function resolveApiKey() {
  if (process.env.BRAVE_API_KEY?.trim()) return process.env.BRAVE_API_KEY.trim();
  const envPath = join(ROOT, '.env');
  if (existsSync(envPath)) {
    for (const line of readFileSync(envPath, 'utf8').split('\n')) {
      const m = line.match(/^\s*BRAVE_API_KEY\s*=\s*(.*)\s*$/);
      if (m && m[1] && !m[1].startsWith('#')) return m[1].replace(/^["']|["']$/g, '').trim();
    }
  }
  return null;
}

// "Senior Backend Engineer @ Zencastr" -> { title, company }
function splitTitle(raw) {
  const t = String(raw || '').replace(/\s+/g, ' ').trim();
  const m = t.match(/^(.*?)\s+@\s+(.*?)(?:\s+[-–—|]\s+.*)?$/);
  if (m) return { title: m[1].trim(), company: m[2].trim() };
  return { title: t, company: '' };
}

function companyFromUrl(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.toLowerCase();
    if (host.includes('ashbyhq.com')) return u.pathname.split('/').filter(Boolean)[0] || '';
    if (host.includes('greenhouse.io')) return u.pathname.split('/').filter(Boolean)[0] || '';
    if (host.includes('lever.co')) return u.pathname.split('/').filter(Boolean)[0] || '';
    if (host.includes('workable.com')) return u.pathname.split('/').filter(Boolean).pop() || '';
    const label = host.split('.').find((p) => !['www', 'jobs', 'boards', 'api', 'careers', 'apply'].includes(p));
    return label || '';
  } catch {
    return '';
  }
}

function matchLocation(location, filter) {
  if (!filter) return true;
  const loc = (location || '').toLowerCase();
  const has = (list) => (list || []).some((k) => loc.includes(String(k).toLowerCase()));
  if (has(filter.block_hard)) return false;
  if (has(filter.block)) return false;
  if (!filter.allow || filter.allow.length === 0) return loc === '' ? !filter.strict : true;
  if (loc === '') return !filter.strict;
  return has(filter.allow);
}

async function braveSearch(apiKey, query, count) {
  const url = new URL(BRAVE_ENDPOINT);
  url.searchParams.set('q', query);
  url.searchParams.set('count', String(count));
  const res = await fetch(url, {
    headers: { Accept: 'application/json', 'X-Subscription-Token': apiKey },
    signal: AbortSignal.timeout(20000),
  });
  if (res.status === 401) throw new Error('Brave: invalid API key (401)');
  if (res.status === 429) {
    const retry = res.headers.get('x-ratelimit-reset');
    throw new Error(`Brave: rate limited (429)${retry ? `, retry after ${retry}s` : ''}`);
  }
  if (!res.ok) throw new Error(`Brave: HTTP ${res.status}`);
  const data = await res.json();
  return (data.web?.results || []).map((r) => ({
    title: r.title || '',
    url: r.url || '',
    description: r.description || '',
  }));
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) {
    console.log('Usage: BRAVE_API_KEY=... node scan-websearch.mjs [--limit N] [--query "..."] [--count N] [--dry-run] [--json]');
    return;
  }
  const apiKey = resolveApiKey();
  if (!apiKey) {
    console.error('BRAVE_API_KEY is not set. Get a free key at https://api.search.brave.com/app/keys,');
    console.error('add it to the data root .env as BRAVE_API_KEY=..., then rerun.');
    process.exitCode = 2;
    return;
  }

  const portals = loadYaml(readFileSync(PORTALS_PATH, 'utf8'));
  const titleFilter = buildTitleFilter(portals.title_filter || {});
  const locationFilter = portals.location_filter || null;

  let queries = opts.queries.length
    ? opts.queries.map((q) => ({ name: q, query: q }))
    : (portals.search_queries || [])
        .filter((q) => q.enabled !== false && q.query)
        .map((q) => ({ name: q.name || q.query, query: q.query }));
  if (Number.isFinite(opts.limit)) queries = queries.slice(0, opts.limit);

  const seen = new Set();
  const accepted = [];
  const rejected = { title: 0, location: 0, dup: 0, offsite: 0 };
  let queriesRun = 0;
  let found = 0;
  let firstError = null;

  for (const q of queries) {
    let results;
    try {
      results = await braveSearch(apiKey, q.query, opts.count);
    } catch (err) {
      process.stderr.write(`  [${queriesRun + 1}/${queries.length}] ${String(q.name).slice(0, 40)} — ERROR: ${err.message}\n`);
      firstError = firstError || err.message;
      // A rate limit or auth failure at the API level repeats for every query;
      // stop rather than burn the quota on the same error.
      if (/rate limited|invalid API key/.test(err.message)) break;
      continue;
    }
    queriesRun += 1;
    found += results.length;
    for (const r of results) {
      if (!JOB_HOST_RE.test(r.url)) { rejected.offsite += 1; continue; }
      const key = r.url.split('?')[0].split('#')[0].replace(/\/$/, '');
      if (seen.has(key)) { rejected.dup += 1; continue; }
      seen.add(key);
      const { title, company } = splitTitle(r.title);
      if (!title || !titleFilter(title)) { rejected.title += 1; continue; }
      if (!matchLocation(r.description, locationFilter) && !matchLocation('', locationFilter)) {
        rejected.location += 1;
        continue;
      }
      accepted.push({ title, company: company || companyFromUrl(r.url), url: r.url, portal: q.name });
    }
    process.stderr.write(`  [${queriesRun}/${queries.length}] ${String(q.name).slice(0, 40)} — ${results.length} results, ${accepted.length} kept so far\n`);
  }

  let historyError = null;
  let added = 0;
  if (!opts.dryRun && accepted.length > 0) {
    const { appendToPipeline, appendToScanHistory } = await import('./scan.mjs');
    const { localToday } = await import('./lib/local-today.mjs');
    const offers = accepted.map((o) => ({
      title: o.title,
      company: o.company,
      url: o.url,
      location: '',
      source: `WebSearch — ${o.portal}`,
    }));
    mkdirSync(dirname(PIPELINE_PATH), { recursive: true });
    await appendToPipeline(offers, { pipelinePath: PIPELINE_PATH });
    try {
      await appendToScanHistory(offers, localToday(), 'added');
    } catch (err) {
      historyError = err instanceof Error ? err.message : String(err);
    }
    added = accepted.length;
  }

  const summary = {
    queriesRun,
    found,
    accepted: accepted.length,
    rejected,
    added: opts.dryRun ? 0 : added,
    dryRun: opts.dryRun,
    firstError,
    historyError,
    offers: accepted.map((o) => ({ company: o.company, title: o.title, url: o.url })),
  };

  if (opts.json) {
    console.log(JSON.stringify(summary));
    return;
  }
  console.log(`\nWebSearch (Brave API) — queries: ${queriesRun}/${queries.length}, results: ${found}`);
  console.log(`  filtered — title: ${rejected.title}, location: ${rejected.location}, duplicate: ${rejected.dup}, off-site: ${rejected.offsite}`);
  console.log(`  accepted: ${accepted.length}${opts.dryRun ? ' (dry run, nothing written)' : ''}`);
  for (const o of accepted) console.log(`  + ${o.company} | ${o.title} | ${o.url}`);
  if (firstError) console.log(`  ! ${firstError}`);
}

main().catch((err) => {
  console.error('scan-websearch failed:', err?.stack || err);
  process.exitCode = 1;
});
