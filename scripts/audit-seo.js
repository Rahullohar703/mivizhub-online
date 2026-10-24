import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const SITEMAP_PATH = path.resolve(__dirname, '../public/sitemap.xml');
const ROOT_URLS_TXT = path.resolve(__dirname, '../urls-to-index.txt');
const PUBLIC_URLS_TXT = path.resolve(__dirname, '../public/urls-to-index.txt');

function getUrlsFromSitemap() {
  const content = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const urlMatches = content.match(/<loc>(.*?)<\/loc>/g) || [];
  return [...new Set(urlMatches.map(tag => tag.replace(/<\/?loc>/g, '').trim()))];
}

function auditHtmlFile(filePath, expectedUrl) {
  const issues = [];
  if (!fs.existsSync(filePath)) {
    return [`File does not exist: ${filePath}`];
  }

  const html = fs.readFileSync(filePath, 'utf-8');

  // 1. Check Canonical
  const canonicalMatch = html.match(/<link rel="canonical"\s+href="([^"]+)"/i);
  if (!canonicalMatch) {
    issues.push('Missing <link rel="canonical"> tag');
  } else {
    const actualCanonical = canonicalMatch[1];
    // Normalize trailing slash comparison
    const normActual = actualCanonical.replace(/\/$/, '');
    const normExpected = expectedUrl.replace(/\/$/, '');
    if (normActual !== normExpected) {
      issues.push(`Canonical mismatch: Found "${actualCanonical}", expected "${expectedUrl}"`);
    }
  }

  // 2. Check Title
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    issues.push('Missing or empty <title>');
  } else if (titleMatch[1].includes('undefined')) {
    issues.push(`Title contains "undefined": "${titleMatch[1]}"`);
  }

  // 3. Check Meta Description
  const descMatch = html.match(/<meta name="description"\s+content="([^"]*)"/i);
  if (!descMatch || !descMatch[1].trim()) {
    issues.push('Missing or empty <meta name="description">');
  } else if (descMatch[1].includes('undefined')) {
    issues.push(`Description contains "undefined": "${descMatch[1]}"`);
  }

  // 4. Check H1
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!h1Match || !h1Match[1].trim()) {
    issues.push('Missing or empty <h1> tag');
  } else if (h1Match[1].includes('undefined')) {
    issues.push(`H1 contains "undefined": "${h1Match[1]}"`);
  }

  // 5. Check Schema.org JSON-LD
  const jsonLdMatches = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
  if (!jsonLdMatches || jsonLdMatches.length === 0) {
    issues.push('Missing Schema.org JSON-LD script');
  } else {
    for (const tag of jsonLdMatches) {
      const jsonStr = tag.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '').trim();
      try {
        const parsed = JSON.parse(jsonStr);
        if (!parsed['@context'] || !parsed['@type']) {
          issues.push('Schema JSON-LD is missing @context or @type');
        }
      } catch (err) {
        issues.push(`Invalid JSON-LD syntax: ${err.message}`);
      }
    }
  }

  return issues;
}

function main() {
  console.log('=====================================================');
  console.log('🔍 Comprehensive SEO & Indexability Audit for MivizHub');
  console.log('=====================================================\n');

  const urls = getUrlsFromSitemap();
  console.log(`Found ${urls.length} URLs in sitemap.xml to inspect.\n`);

  let totalErrors = 0;
  let auditedCount = 0;

  for (const url of urls) {
    const urlObj = new URL(url);
    let subPath = urlObj.pathname.replace(/^\//, '');
    let filePath;

    if (!subPath || subPath === '') {
      filePath = path.join(DIST_DIR, 'index.html');
    } else {
      filePath = path.join(DIST_DIR, subPath, 'index.html');
    }

    const issues = auditHtmlFile(filePath, url);
    auditedCount++;

    if (issues.length > 0) {
      totalErrors += issues.length;
      console.log(`❌ [ERROR] ${url}`);
      issues.forEach(iss => console.log(`   - ${iss}`));
    }
  }

  console.log('\n=====================================================');
  if (totalErrors === 0) {
    console.log(`✅ PERFECT AUDIT! All ${auditedCount} URLs verified with 0 errors!`);
    console.log('   - 100% of URLs have matching exact canonical tags');
    console.log('   - 100% of URLs have valid <title> and <meta description>');
    console.log('   - 100% of URLs have <h1> tags');
    console.log('   - 100% of URLs have valid Schema.org JSON-LD data');
  } else {
    console.log(`⚠️ Audit finished with ${totalErrors} issues across ${auditedCount} URLs.`);
  }
  console.log('=====================================================\n');

  // Write urls-to-index.txt (one URL per line)
  const fileContent = urls.join('\n') + '\n';
  fs.writeFileSync(ROOT_URLS_TXT, fileContent, 'utf-8');
  fs.writeFileSync(PUBLIC_URLS_TXT, fileContent, 'utf-8');
  console.log(`📝 Generated: urls-to-index.txt (${urls.length} clean URLs, 1 per line)`);
  console.log(`📝 Generated: public/urls-to-index.txt (also accessible at https://www.mivizhub.online/urls-to-index.txt)`);
}

main();
