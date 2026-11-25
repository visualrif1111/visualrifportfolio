// Static regression checks for issues fixed in the November 2026 audit. Run with `pnpm test`.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const rel = p => path.relative(ROOT, p);

function walk(dir, exts) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p, exts));
    else if (exts.some(e => entry.name.endsWith(e))) out.push(p);
  }
  return out;
}

const SOURCE = [
  ...walk(path.join(ROOT, 'src/app'), ['.ts', '.tsx']),
  ...walk(path.join(ROOT, 'app'), ['.ts', '.tsx']),
];

test('no public-facing references to the previous Brighton location', () => {
  const files = [...SOURCE, ...walk(path.join(ROOT, 'sanity'), ['.ts', '.tsx']), ...walk(path.join(ROOT, 'src/styles'), ['.css'])];
  const hits = files.flatMap(f =>
    fs.readFileSync(f, 'utf8').split('\n')
      .map((line, i) => ({ line, i }))
      .filter(({ line }) => /brighton|\bhove\b|saltdean|east sussex/i.test(line))
      .map(({ i }) => `${rel(f)}:${i + 1}`));
  assert.deepEqual(hits, []);
});

test('Shrewsbury appears in the footer, CV data and site metadata', () => {
  for (const f of ['src/app/components/Footer.tsx', 'src/app/data/cv.ts', 'app/(site)/layout.tsx', 'src/app/seo.ts']) {
    assert.match(fs.readFileSync(path.join(ROOT, f), 'utf8'), /Shrewsbury/, f);
  }
});

test('every imported raster image exists and is web-sized', () => {
  const LIMIT = 1_000_000;
  const problems = [];
  for (const f of SOURCE) {
    const src = fs.readFileSync(f, 'utf8');
    for (const m of src.matchAll(/from ['"]([^'"]+\.(?:png|jpe?g|webp))['"]/g)) {
      const spec = m[1];
      const file = spec.startsWith('@/') ? path.join(ROOT, 'src', spec.slice(2)) : path.resolve(path.dirname(f), spec);
      if (!fs.existsSync(file)) problems.push(`missing ${spec} in ${rel(f)}`);
      else if (fs.statSync(file).size > LIMIT) problems.push(`${rel(file)} is ${(fs.statSync(file).size / 1e6).toFixed(1)} MB`);
    }
    for (const m of src.matchAll(/['"](\/jma-[a-z]+\/[^'"]+)['"]/g)) {
      const file = path.join(ROOT, 'public', m[1]);
      if (!fs.existsSync(file)) problems.push(`missing public${m[1]}`);
      else if (fs.statSync(file).size > LIMIT) problems.push(`public${m[1]} is ${(fs.statSync(file).size / 1e6).toFixed(1)} MB`);
    }
  }
  assert.deepEqual(problems, []);
});

test('every public route defines its own metadata', () => {
  const pages = walk(path.join(ROOT, 'app/(site)'), ['page.tsx']);
  const missing = pages.filter(p => !/export (const metadata|async function generateMetadata)/.test(fs.readFileSync(p, 'utf8')));
  assert.deepEqual(missing.map(rel), []);
});

test('every self-hosted font face and preload points at a real file', () => {
  const css = fs.readFileSync(path.join(ROOT, 'src/styles/fonts.css'), 'utf8');
  const layout = fs.readFileSync(path.join(ROOT, 'app/(site)/layout.tsx'), 'utf8');
  const urls = [...css.matchAll(/url\('([^']+)'\)/g), ...layout.matchAll(/href="(\/fonts\/[^"]+)"/g)].map(m => m[1]);
  assert.ok(urls.length > 0);
  assert.deepEqual(urls.filter(u => !fs.existsSync(path.join(ROOT, 'public', u))), []);
  assert.doesNotMatch(layout, /fonts\.googleapis\.com/);
});

test('icon-only links and buttons have accessible names', () => {
  const footer = fs.readFileSync(path.join(ROOT, 'src/app/components/Footer.tsx'), 'utf8');
  assert.match(footer, /aria-label="VISUALRIF on Instagram"/);
  assert.match(footer, /aria-label="Arif Tariq on LinkedIn"/);
  assert.match(fs.readFileSync(path.join(ROOT, 'src/app/components/CookieBanner.tsx'), 'utf8'), /aria-label="Dismiss cookie notice"/);
});
