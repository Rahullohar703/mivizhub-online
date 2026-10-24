import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CASE_STUDIES } from '../src/data/caseStudies.js';
import { BLOGS_BATCH_1 } from '../src/data/blogsBatch1.js';
import { BLOGS_BATCH_2 } from '../src/data/blogsBatch2.js';
import { BLOGS_BATCH_3 } from '../src/data/blogsBatch3.js';
import { BLOGS_BATCH_4 } from '../src/data/blogsBatch4.js';
import { BLOGS_BATCH_5 } from '../src/data/blogsBatch5.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const BASE_URL = 'https://www.mivizhub.online';

const ALL_BLOGS = [
  ...BLOGS_BATCH_1,
  ...BLOGS_BATCH_2,
  ...BLOGS_BATCH_3,
  ...BLOGS_BATCH_4,
  ...BLOGS_BATCH_5
];

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function generateFaqSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(item => ({
      '@type': 'Question',
      'name': item.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.a
      }
    }))
  };
}

function createHtmlPage(template, {
  title,
  description,
  canonicalUrl,
  h1,
  previewText,
  jsonLd,
  keywords
}) {
  let html = template;

  // 1. Replace or insert Canonical
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(/<link rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonicalUrl}" />`);
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`);
  }

  // 2. Replace Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);

  // 3. Replace Meta Description
  if (description) {
    html = html.replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${escapeHtml(description)}" />`);
  }

  // 4. Replace Keywords
  if (keywords) {
    const kwString = Array.isArray(keywords) ? keywords.join(', ') : keywords;
    html = html.replace(/<meta name="keywords"[^>]*>/i, `<meta name="keywords" content="${escapeHtml(kwString)}" />`);
  }

  // 5. OpenGraph Tags
  html = html.replace(/<meta property="og:title"[^>]*>/i, `<meta property="og:title" content="${escapeHtml(title)}" />`);
  if (description) {
    html = html.replace(/<meta property="og:description"[^>]*>/i, `<meta property="og:description" content="${escapeHtml(description)}" />`);
  }
  html = html.replace(/<meta property="og:url"[^>]*>/i, `<meta property="og:url" content="${canonicalUrl}" />`);

  // 6. JSON-LD structured data
  if (jsonLd) {
    const jsonLdScripts = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
    const scriptTags = jsonLdScripts
      .filter(Boolean)
      .map(item => `  <script type="application/ld+json">${JSON.stringify(item)}</script>`)
      .join('\n');
    html = html.replace('</head>', `${scriptTags}\n  </head>`);
  }

  // 7. Semantic HTML inside #root for non-JS / static crawlers
  const semanticContent = `
    <div id="root">
      <header class="sr-only" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;">
        <h1>${escapeHtml(h1 || title)}</h1>
        <p>${escapeHtml(description || previewText || '')}</p>
      </header>
    </div>
  `.trim();

  html = html.replace(/<div id="root">[\s\S]*?<\/div>/i, semanticContent);

  return html;
}

function writePage(subPath, htmlContent) {
  const dirPath = path.join(DIST_DIR, subPath);
  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(path.join(dirPath, 'index.html'), htmlContent, 'utf-8');
}

function main() {
  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found! Run "vite build" first.');
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(templatePath, 'utf-8');
  console.log('⚡ Starting Static Prerender for MivizHub routes...\n');

  let count = 0;

  // 1. Homepage update (ensure H1 is present inside #root for static crawlers)
  const homeHtml = baseTemplate.replace(
    /<div id="root">[\s\S]*?<\/div>/i,
    `<div id="root"><header class="sr-only" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;"><h1>MivizHub | Business Growth with Marketing &amp; AI Staffing</h1><p>Attract customers with performance marketing while autonomous 24/7 AI staff handle inquiries, calls, and follow-ups.</p></header></div>`
  );
  fs.writeFileSync(templatePath, homeHtml, 'utf-8');
  count++;
  console.log('✓ Prerendered: / (Homepage)');

  // 2. Case Study Hub: /casestudy
  const caseStudyHubJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Client Case Studies & Verified Results | MivizHub',
    'url': `${BASE_URL}/casestudy`,
    'description': 'See real results from business owners who grew local search rankings, cut cost-per-lead, eliminated missed calls, and scaled revenue with MivizHub.'
  };
  const caseStudyHubHtml = createHtmlPage(baseTemplate, {
    title: 'Client Case Studies & Verified Results | MivizHub',
    description: 'See real results from business owners who grew local search rankings, cut cost-per-lead, eliminated missed calls, and scaled revenue with MivizHub.',
    canonicalUrl: `${BASE_URL}/casestudy`,
    h1: 'Real Results for Real Businesses',
    previewText: 'Explore verified case studies across search visibility, website conversion, customer acquisition, and 24/7 AI staff automation.',
    jsonLd: caseStudyHubJsonLd,
    keywords: ['client case studies', 'marketing growth case study', 'small business AI results', 'SEO case study India', 'business growth results']
  });
  writePage('casestudy', caseStudyHubHtml);
  count++;
  console.log('✓ Prerendered: /casestudy');

  // 3. Blog Hub: /blog
  const blogHubJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'Business Growth & AI Staffing Blog | MivizHub',
    'url': `${BASE_URL}/blog`,
    'description': 'Practical, fluff-free guides on marketing, local SEO, Google Business Profile, workflow automation, and 24/7 AI employees for small businesses.'
  };
  const blogHubHtml = createHtmlPage(baseTemplate, {
    title: 'Business Growth & AI Staffing Blog | MivizHub',
    description: 'Practical, fluff-free guides on marketing, local SEO, Google Business Profile, workflow automation, and 24/7 AI employees for small businesses.',
    canonicalUrl: `${BASE_URL}/blog`,
    h1: 'Business Growth & AI Staffing Insights',
    previewText: 'Fluff-free playbooks on marketing, local SEO, customer acquisition, and 24/7 autonomous AI employees.',
    jsonLd: blogHubJsonLd,
    keywords: ['business growth blog', 'local SEO guides', 'AI staffing articles', 'small business marketing']
  });
  writePage('blog', blogHubHtml);
  count++;
  console.log('✓ Prerendered: /blog');

  // 4. Growth Hub: /growth
  const growthHtml = createHtmlPage(baseTemplate, {
    title: 'Marketing & Growth Architecture for Small Businesses | MivizHub',
    description: 'High-impact local SEO, Google Business Profile optimization, website conversion engineering, and paid search management.',
    canonicalUrl: `${BASE_URL}/growth`,
    h1: 'Performance Marketing & Growth Architecture',
    previewText: 'Systematically rank #1 on Google Maps, capture local search intent, and double customer acquisition.',
    keywords: ['marketing growth architecture', 'local SEO agency', 'Google Business Profile optimization', 'small business growth']
  });
  writePage('growth', growthHtml);
  count++;
  console.log('✓ Prerendered: /growth');

  // 5. All 12 Individual Case Studies: /casestudy/:slug
  for (const study of CASE_STUDIES) {
    const studyCanonical = `${BASE_URL}/casestudy/${study.slug}`;
    const studyFaqSchema = generateFaqSchema(study.faq);
    const studyTitle = study.seoTitle || `${study.clientName} Case Study | MivizHub Results`;
    const studyH1 = study.headline || study.clientName;
    const studyArticleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': studyH1,
      'description': study.metaDescription || study.excerpt || study.summary,
      'url': studyCanonical,
      'author': {
        '@type': 'Person',
        'name': 'Rahul Lohar'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'MivizHub',
        'logo': {
          '@type': 'ImageObject',
          'url': `${BASE_URL}/logo-256.png`
        }
      }
    };

    const studyHtml = createHtmlPage(baseTemplate, {
      title: studyTitle,
      description: study.metaDescription || study.excerpt || study.summary,
      canonicalUrl: studyCanonical,
      h1: studyH1,
      previewText: study.excerpt || study.summary,
      jsonLd: [studyArticleSchema, studyFaqSchema],
      keywords: study.targetKeywords
    });

    writePage(`casestudy/${study.slug}`, studyHtml);
    count++;
  }
  console.log(`✓ Prerendered: ${CASE_STUDIES.length} individual Case Study pages`);

  // 6. All 62 Individual Blog Posts: /blog/:slug
  for (const post of ALL_BLOGS) {
    const postCanonical = `${BASE_URL}/blog/${post.slug}`;
    const postFaqSchema = generateFaqSchema(post.faq);
    const postArticleSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': post.seoTitle || post.title,
      'description': post.metaDescription || post.excerpt,
      'url': postCanonical,
      'datePublished': post.publishDate || '2026-10-18',
      'author': {
        '@type': 'Person',
        'name': post.author?.name || 'Rahul Lohar'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'MivizHub',
        'logo': {
          '@type': 'ImageObject',
          'url': `${BASE_URL}/logo-256.png`
        }
      }
    };

    const postHtml = createHtmlPage(baseTemplate, {
      title: `${post.seoTitle || post.title} | MivizHub`,
      description: post.metaDescription || post.excerpt,
      canonicalUrl: postCanonical,
      h1: post.title,
      previewText: post.excerpt,
      jsonLd: [postArticleSchema, postFaqSchema],
      keywords: post.targetKeywords
    });

    writePage(`blog/${post.slug}`, postHtml);
    count++;
  }
  console.log(`✓ Prerendered: ${ALL_BLOGS.length} individual Blog pages`);

  console.log(`\n🎉 Successfully pre-rendered ${count} pages into /dist!`);
  console.log('Every single route now has its own static HTML with exact canonical tag, H1 tag, and Schema.org FAQPage data.');
}

main();
