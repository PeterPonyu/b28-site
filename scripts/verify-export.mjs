#!/usr/bin/env node
/**
 * Landing-page checks for the tracked Pages artifact in docs/.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const docs = join(process.cwd(), 'docs');
const required = ['index.html', '.nojekyll'];
const leak =
  /unpublished results|AUROC|0\.946|1,191|\b1191\b|SOTA|overconfident|0\.110|r=−0\.963/i;

let failed = 0;

for (const rel of required) {
  const p = join(docs, rel);
  if (!existsSync(p)) {
    console.error(`FAIL: missing docs/${rel}`);
    failed += 1;
  }
}

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(p);
    } else if (entry.name.endsWith('.png')) {
      console.error(`FAIL: figure PNG ${p}`);
      failed += 1;
    } else if (entry.name.endsWith('.html')) {
      const html = readFileSync(p, 'utf8');
      if (leak.test(html)) {
        console.error(`FAIL: unpublished leak string in ${p}`);
        failed += 1;
      }
    }
  }
}

if (existsSync(docs)) {
  walk(docs);
} else {
  console.error('FAIL: missing docs/');
  failed += 1;
}

if (failed) {
  process.exit(1);
}

console.log('verify-export: ok (landing docs/)');
