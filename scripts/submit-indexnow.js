import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HOST = "www.mivizhub.online";
const KEY = "b5de381d6ef4475187b693f937723530";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = path.resolve(__dirname, '../public/sitemap.xml');

// Read and parse all URLs from public/sitemap.xml
function getUrlsFromSitemap() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    throw new Error(`Sitemap not found at: ${SITEMAP_PATH}`);
  }

  const content = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const urlMatches = content.match(/<loc>(.*?)<\/loc>/g) || [];
  
  const urls = urlMatches.map(tag => tag.replace(/<\/?loc>/g, '').trim());
  return [...new Set(urls)];
}

async function submitToIndexNowEndpoint(endpointUrl, payload) {
  try {
    const response = await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'MivizHub-IndexNow-Client/1.0'
      },
      body: JSON.stringify(payload)
    });

    return {
      endpoint: endpointUrl,
      status: response.status,
      statusText: response.statusText,
      ok: response.status === 200 || response.status === 202
    };
  } catch (error) {
    return {
      endpoint: endpointUrl,
      status: 'ERROR',
      statusText: error.message,
      ok: false
    };
  }
}

async function main() {
  console.log("=========================================");
  console.log("🚀 MivizHub Real-Time IndexNow Submission");
  console.log("=========================================\n");

  const urls = getUrlsFromSitemap();
  console.log(`Found ${urls.length} URLs in sitemap to index.`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  };

  const endpoints = [
    "https://api.indexnow.org/IndexNow",
    "https://www.bing.com/IndexNow"
  ];

  console.log(`\nSubmitting ${urls.length} URLs using Key: ${KEY}`);
  console.log(`Key location: ${KEY_LOCATION}\n`);

  for (const endpoint of endpoints) {
    console.log(`Pinging ${endpoint}...`);
    const result = await submitToIndexNowEndpoint(endpoint, payload);

    if (result.ok) {
      console.log(`✅ [${result.status} ${result.statusText}] Successfully broadcasted to ${endpoint}`);
    } else {
      console.log(`⚠️ [${result.status} ${result.statusText}] Response from ${endpoint}`);
    }
  }

  console.log("\n=========================================");
  console.log("✨ IndexNow Submission Complete!");
  console.log("Search engines (Bing, Yandex, Naver, Seznam, etc.) will prioritize crawling these URLs.");
  console.log("Verify status in Bing Webmaster Tools Portal: https://www.bing.com/webmasters");
  console.log("=========================================\n");
}

main().catch(err => {
  console.error("Failed to submit to IndexNow:", err);
  process.exit(1);
});
