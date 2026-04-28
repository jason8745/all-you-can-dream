#!/usr/bin/env node
/**
 * Validate all demos in demos.json.
 * Run from repo root: node scripts/validate.js
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_FIELDS = ['title', 'file', 'description', 'date', 'author'];
const errors = [];

// 1. demos.json must exist and be valid JSON
let folders;
try {
  folders = JSON.parse(fs.readFileSync('demos.json', 'utf8'));
} catch (e) {
  if (e.code === 'ENOENT') {
    console.error('✗ demos.json not found — are you running from the repo root?');
  } else {
    console.error(`✗ demos.json is invalid JSON: ${e.message}`);
  }
  process.exit(1);
}

if (!Array.isArray(folders)) {
  console.error('✗ demos.json must be a JSON array');
  process.exit(1);
}

for (const folder of folders) {
  const prefix = `[${folder}]`;

  // 2. meta.json must exist
  const metaPath = path.join(folder, 'meta.json');
  if (!fs.existsSync(metaPath)) {
    errors.push(`${prefix} missing meta.json`);
    continue;
  }

  // 3. meta.json must be valid JSON
  let meta;
  try {
    meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  } catch (e) {
    errors.push(`${prefix} meta.json is invalid JSON: ${e.message}`);
    continue;
  }

  // 4. required fields must be present and non-empty
  for (const field of REQUIRED_FIELDS) {
    if (!String(meta[field] ?? '').trim()) {
      errors.push(`${prefix} meta.json missing or empty field: '${field}'`);
    }
  }

  // 5. referenced HTML file must exist
  const htmlFile = meta.file ?? '';
  if (htmlFile) {
    const htmlPath = path.join(folder, htmlFile);
    if (!fs.existsSync(htmlPath)) {
      errors.push(`${prefix} meta.json 'file' points to non-existent file: '${htmlFile}'`);
    }
  }
}

if (errors.length > 0) {
  console.error('Validation failed:\n');
  errors.forEach(e => console.error(`  ✗ ${e}`));
  process.exit(1);
} else {
  console.log(`✓ All ${folders.length} demo(s) valid`);
}
