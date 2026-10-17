import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Clock, Calendar, Share2, CheckCircle2, ChevronRight, 
  HelpCircle, User, ArrowRight, Check, Sparkles, BookOpen, PhoneCall
} from 'lucide-react';
import Container from '../components/ui/Container';
import { BLOG_POSTS } from '../data/blogs';
import SEOHead from '../components/SEOHead';

export default function BlogPostPage({ onOpenBooking }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [slug]);

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    navigate('/blog', { replace: true });
    return null;
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  // Schema.org JSON-LD Rich Snippet Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://www.mivizhub.online/blog/${post.slug}/#article`,
        "headline": post.title,
        "description": post.metaDescription,
        "datePublished": "2026-10-12T08:00:00+00:00",
        "dateModified": "2026-10-16T10:00:00+00:00",
        "author": {
          "@type": "Person",
          "name": post.author.name,
          "jobTitle": post.author.role,
          "url": "https://www.mivizhub.online"
        },
        "publisher": {
          "@type": "Organization",
          "name": "MivizHub",
          "url": "https://www.mivizhub.online",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.mivizhub.online/logo-256.png"
          }
        },
        "keywords": post.targetKeywords.join(", "),
        "mainEntityOfPage": `https://www.mivizhub.online/blog/${post.slug}`
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.mivizhub.online"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.mivizhub.online/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `https://www.mivizhub.online/blog/${post.slug}`
          }
        ]
      },
      ...(post.faq && post.faq.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": post.faq.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }] : [])
    ]
  };

  // Helper to render inline markdown: bold, links, italic
  const renderInlineMarkdown = (rawText) => {
    if (!rawText) return null;
    const tokens = [];
    const regex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*|\*.*?\*)/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(rawText)) !== null) {
      if (match.index > lastIndex) {
        tokens.push(rawText.substring(lastIndex, match.index));
      }
      const token = match[0];
      if (token.startsWith('[') && token.includes('](')) {
        const linkText = token.substring(1, token.indexOf(']('));
        const linkUrl = token.substring(token.indexOf('](') + 2, token.length - 1);
        if (linkUrl.startsWith('/') && !linkUrl.includes('#')) {
          tokens.push(
            <Link key={match.index} to={linkUrl} className="text-cyan-800 font-bold hover:underline">
              {linkText}
            </Link>
          );
        } else {
          tokens.push(
            <a key={match.index} href={linkUrl} className="text-cyan-800 font-bold hover:underline">
              {linkText}
            </a>
          );
        }
      } else if (token.startsWith('**') && token.endsWith('**')) {
        tokens.push(
          <strong key={match.index} className="font-extrabold text-gray-900">
            {token.slice(2, -2)}
          </strong>
        );
      } else if (token.startsWith('*') && token.endsWith('*')) {
        tokens.push(
          <em key={match.index} className="italic text-gray-800">
            {token.slice(1, -1)}
          </em>
        );
      }
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < rawText.length) {
      tokens.push(rawText.substring(lastIndex));
    }
    return tokens.length > 0 ? tokens : rawText;
  };

  // Robust line-by-line markdown block parser
  const parseContentBlocks = (content) => {
    const blocks = [];
    const lines = content.split('\n');
    let i = 0;

    while (i < lines.length) {
      const rawLine = lines[i];
      const line = rawLine.trim();

      if (!line) {
        i++;
        continue;
      }

      // 1. Code blocks (```)
      if (line.startsWith('```')) {
        const codeLines = [];
        i++;
        while (i < lines.length && !lines[i].trim().startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        i++; // skip closing ```
        blocks.push({ type: 'code', content: codeLines.join('\n') });
        continue;
      }

      // 2. Table (| header |)
      if (line.startsWith('|') && line.endsWith('|')) {
        const tableLines = [];
        while (i < lines.length && lines[i].trim().startsWith('|')) {
          tableLines.push(lines[i].trim());
          i++;
        }
        blocks.push({ type: 'table', lines: tableLines });
        continue;
      }

      // 3. Headings (###)
      if (line.startsWith('### ')) {
        blocks.push({ type: 'h3', content: line.replace('### ', '').trim() });
        i++;
        continue;
      }

      // 4. Headings (####)
      if (line.startsWith('#### ')) {
        blocks.push({ type: 'h4', content: line.replace('#### ', '').trim() });
        i++;
        continue;
      }

      // 5. Blockquotes (> ...)
      if (line.startsWith('>')) {
        const quoteLines = [];
        while (i < lines.length && lines[i].trim().startsWith('>')) {
          quoteLines.push(lines[i].trim().replace(/^>\s*/, ''));
          i++;
        }
        blocks.push({ type: 'quote', content: quoteLines.join(' ') });
        continue;
      }

      // 6. Unordered List Items (- ... or * ...)
      if (line.startsWith('- ') || line.startsWith('* ')) {
        const listItems = [];
        while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
          listItems.push(lines[i].trim().replace(/^[-*]\s+/, ''));
          i++;
        }
        blocks.push({ type: 'list', items: listItems });
        continue;
      }

      // 7. Numbered Step / Subheading (e.g. "1. Inquiry to CRM" or "1. Step Name")
      if (/^\d+\.\s+/.test(line)) {
        const numberMatch = line.match(/^(\d+)\.\s+(.*)/);
        if (numberMatch) {
          blocks.push({
            type: 'numbered-header',
            number: numberMatch[1],
            content: numberMatch[2]
          });
          i++;
          continue;
        }
      }

      // 8. Regular paragraph (gather contiguous lines)
      const paragraphLines = [];
      while (
        i < lines.length &&
        lines[i].trim() !== '' &&
        !lines[i].trim().startsWith('```') &&
        !lines[i].trim().startsWith('### ') &&
        !lines[i].trim().startsWith('#### ') &&
        !lines[i].trim().startsWith('- ') &&
        !lines[i].trim().startsWith('* ') &&
        !lines[i].trim().startsWith('>') &&
        !(lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) &&
        !/^\d+\.\s+/.test(lines[i].trim())
      ) {
        paragraphLines.push(lines[i].trim());
        i++;
      }

      if (paragraphLines.length > 0) {
        blocks.push({ type: 'paragraph', content: paragraphLines.join(' ') });
      }
    }

    return blocks;
  };

  // Helper to render parsed blocks cleanly with boomer-friendly typography
  const renderFormattedSection = (text) => {
    const blocks = parseContentBlocks(text);

    return (
      <div className="space-y-5 text-gray-800 text-base sm:text-lg leading-relaxed">
        {blocks.map((block, bIdx) => {
          if (block.type === 'h3') {
            return (
              <h3 key={bIdx} className="text-xl sm:text-2xl font-extrabold text-gray-900 pt-5 pb-1 border-b border-gray-200">
                {block.content}
              </h3>
            );
          }

          if (block.type === 'h4') {
            return (
              <h4 key={bIdx} className="text-lg sm:text-xl font-bold text-gray-900 pt-3">
                {block.content}
              </h4>
            );
          }

          if (block.type === 'numbered-header') {
            return (
              <div key={bIdx} className="text-lg sm:text-xl font-extrabold text-gray-900 pt-5 pb-1 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-900 text-sm font-black inline-flex items-center justify-center shrink-0 border border-cyan-200">
                  {block.number}
                </span>
                <span>{block.content}</span>
              </div>
            );
          }

          if (block.type === 'code') {
            return (
              <div key={bIdx} className="my-5 overflow-hidden rounded-xl border border-gray-300 bg-gray-900 shadow-sm">
                <div className="bg-gray-800 px-4 py-1.5 text-xs text-cyan-300 font-mono font-semibold border-b border-gray-700">
                  Workflow Architecture
                </div>
                <pre className="p-4 text-xs sm:text-sm font-mono text-cyan-200 overflow-x-auto leading-relaxed">
                  {block.content}
                </pre>
              </div>
            );
          }

          if (block.type === 'table') {
            const parseRow = (row) =>
              row.split('|').filter((c, i, arr) => i > 0 && i < arr.length - 1).map((c) => c.trim());
            const headers = block.lines[0] ? parseRow(block.lines[0]) : [];
            const rows = block.lines.slice(2).map(parseRow);

            return (
              <div key={bIdx} className="overflow-x-auto my-6 border-2 border-gray-300 rounded-xl bg-white shadow-sm">
                <table className="w-full text-left text-sm sm:text-base">
                  <thead className="bg-gray-100 border-b-2 border-gray-300 text-gray-900 font-bold">
                    <tr>
                      {headers.map((h, i) => (
                        <th key={i} className="p-4 sm:p-5 text-gray-900 font-extrabold">
                          {h.replace(/\*\*/g, '')}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-800">
                    {rows.map((row, rIdx) => (
                      <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-4 sm:p-5 font-medium">
                            {renderInlineMarkdown(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }

          if (block.type === 'quote') {
            return (
              <blockquote key={bIdx} className="border-l-4 border-cyan-600 pl-5 py-3 my-4 italic text-base sm:text-lg bg-cyan-50/50 rounded-r-xl text-gray-900 font-medium">
                {renderInlineMarkdown(block.content)}
              </blockquote>
            );
          }

          if (block.type === 'list') {
            return (
              <ul key={bIdx} className="space-y-3 my-4 pl-2">
                {block.items.map((item, itemIdx) => {
                  // Check if item contains bold label like "**The Manual Way:**"
                  return (
                    <li key={itemIdx} className="flex items-start gap-3 text-base sm:text-lg text-gray-800">
                      <span className="w-2 h-2 rounded-full bg-cyan-700 shrink-0 mt-2.5" />
                      <div className="leading-relaxed">
                        {renderInlineMarkdown(item)}
                      </div>
                    </li>
                  );
                })}
              </ul>
            );
          }

          return (
            <p key={bIdx} className="leading-relaxed text-gray-800 text-base sm:text-lg mb-4 font-normal">
              {renderInlineMarkdown(block.content)}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <article className="bg-white text-gray-900 min-h-screen pt-28 sm:pt-32 pb-20">
      <SEOHead
        title={post.seoTitle || `${post.title} | MivizHub`}
        description={post.metaDescription}
        keywords={post.targetKeywords}
        canonicalUrl={`https://www.mivizhub.online/blog/${post.slug}`}
        ogType="article"
        jsonLd={jsonLd}
      />

      <Container className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Simple Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/blog" className="hover:text-gray-900 transition-colors">Business Guides</Link>
          <ChevronRight size={14} />
          <span className="text-gray-800 font-semibold truncate max-w-[200px] sm:max-w-xs">{post.category}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-8 pb-8 border-b-2 border-gray-200">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs sm:text-sm font-bold px-3 py-1 rounded bg-gray-100 text-gray-900 border border-gray-300">
              {post.category}
            </span>
            <span className="text-sm text-gray-500 flex items-center gap-1 font-medium">
              <Clock size={14} /> {post.readingTime}
            </span>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <Calendar size={14} /> {post.publishDate}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* Author and Simple Share Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-900 text-white flex items-center justify-center font-bold text-sm shadow">
                <img
                  src="/rahul-profile.png"
                  alt={post.author.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div>
                <div className="text-base font-bold text-gray-900">{post.author.name}</div>
                <div className="text-xs text-gray-500">{post.author.role}</div>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-800 transition-colors"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald-700" />
                  <span className="text-emerald-700 font-bold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 size={16} />
                  <span>Share Article</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* Executive Summary / Key Takeaways Box */}
        <div className="mb-12 bg-cyan-50/60 border-2 border-cyan-300 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={20} className="text-cyan-800" />
            <h2 className="text-base sm:text-lg font-extrabold uppercase tracking-wide text-cyan-950">
              At A Glance: Key Takeaways For Business Owners
            </h2>
          </div>
          <div className="space-y-3.5">
            {post.keyTakeaways.map((takeaway, idx) => (
              <div key={idx} className="flex items-start gap-3 text-base sm:text-lg text-gray-900">
                <CheckCircle2 size={20} className="text-emerald-700 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-12">
          {post.sections.map((section, idx) => (
            <section key={idx} className="pt-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-5 flex items-center gap-3 border-b-2 pb-3 border-gray-200">
                <span className="text-sm font-bold text-cyan-800 bg-cyan-100 px-2.5 py-1 rounded">
                  Part {idx + 1}
                </span>
                {section.heading}
              </h2>
              {renderFormattedSection(section.content)}
            </section>
          ))}
        </div>

        {/* Frequently Asked Questions */}
        {post.faq && post.faq.length > 0 && (
          <section className="mt-16 pt-10 border-t-2 border-gray-300">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 block mb-1">
                Common Questions Answered
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {post.faq.map((item, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border-2 border-gray-200 rounded-xl bg-white overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-gray-900 hover:text-cyan-800 transition-colors"
                    >
                      <span>{item.q}</span>
                      <span className="text-2xl font-bold text-cyan-800">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-base sm:text-lg text-gray-700 leading-relaxed border-t border-gray-100 pt-3 bg-gray-50/50">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Author Credentials Card (E-E-A-T) */}
        <div className="mt-16 bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-900 text-white flex items-center justify-center font-bold text-2xl shrink-0 shadow border border-gray-300">
            <img
              src="/rahul-profile.png"
              alt={post.author.name}
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
              <span className="text-lg font-bold text-gray-900">{post.author.name}</span>
              <span className="text-xs font-semibold bg-gray-200 text-gray-800 px-2 py-0.5 rounded">
                Author
              </span>
            </div>
            <div className="text-sm text-gray-600 mb-3 text-center sm:text-left font-medium">{post.author.role}</div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center sm:text-left">
              Rahul focuses on practical marketing and operational systems for small businesses. He helps companies combine high-intent Google search rankings with 24/7 autonomous AI receptionists so owners can focus on delivering great service.
            </p>
          </div>
        </div>

        {/* Clear Action Callout Box */}
        <div className="mt-16 bg-[#f8fafc] border-2 border-gray-300 rounded-2xl p-8 sm:p-10 text-center">
          <div className="max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              Want Help Putting This In Place?
            </h3>
            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              We can audit your business phone setup and local search visibility for free. You will walk away with an exact plan to stop losing customers to competitors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onOpenBooking(post)}
                className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 hover:bg-black text-white font-bold text-base rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <PhoneCall size={18} /> Book a Free 30-Min Strategy Call
              </button>
              <Link
                to="/casestudy"
                className="text-base font-semibold text-gray-800 hover:text-black px-5 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                Read Real Client Stories →
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-10 border-t-2 border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              More Helpful Business Guides
            </h3>
            <Link to="/blog" className="text-sm font-bold text-cyan-800 hover:underline flex items-center gap-1">
              View All <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                to={`/blog/${related.slug}`}
                className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-gray-900 transition-all block group"
              >
                <div className="text-xs font-bold text-cyan-800 mb-2">{related.category}</div>
                <h4 className="text-base font-bold text-gray-900 group-hover:text-cyan-800 transition-colors line-clamp-2 mb-2 leading-snug">
                  {related.title}
                </h4>
                <div className="text-xs text-gray-500 font-medium">
                  {related.readingTime}
                </div>
              </Link>
            ))}
          </div>
        </div>

      </Container>
    </article>
  );
}
