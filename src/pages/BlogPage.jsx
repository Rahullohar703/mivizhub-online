import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, Clock, ArrowRight, BookOpen, CheckCircle2, 
  Sparkles, Zap, TrendingUp, PhoneCall 
} from 'lucide-react';
import Container from '../components/ui/Container';
import { ArrowFillButton } from '../components/ui/arrow-fill-button';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogs';
import SEOHead from '../components/SEOHead';

// Dynamic thematic category badge styling
const getCategoryBadgeStyle = (category) => {
  switch (category) {
    case "Marketing & Growth":
      return "bg-rose-50 text-rose-900 border-rose-200/80 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600";
    case "AI Workforce":
    case "AI Agents & Digital Workers":
      return "bg-indigo-50 text-indigo-900 border-indigo-200/80 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600";
    case "Sales & Follow-Up Automation":
      return "bg-emerald-50 text-emerald-900 border-emerald-200/80 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600";
    case "Workflow Automation":
    case "Process Automation":
      return "bg-cyan-50 text-cyan-900 border-cyan-200/80 group-hover:bg-cyan-700 group-hover:text-white group-hover:border-cyan-700";
    case "Commercial Strategy & ROI":
    case "Workforce Strategy & ROI":
      return "bg-amber-50 text-amber-950 border-amber-200/80 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600";
    case "Industry Playbooks":
      return "bg-purple-50 text-purple-950 border-purple-200/80 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600";
    default:
      return "bg-slate-100 text-slate-800 border-slate-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900";
  }
};

const renderInlineMarkdown = (rawText) => {
  if (!rawText) return null;
  const text = String(rawText).replace(/\*{4,}/g, '').trim();
  const tokens = [];
  const regex = /(\*\*.*?\*\*|\*.*?\*)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push(text.substring(lastIndex, match.index).replace(/\*{2,}/g, ''));
    }
    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
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
  if (lastIndex < text.length) {
    tokens.push(text.substring(lastIndex).replace(/\*{2,}/g, ''));
  }
  return tokens.length > 0 ? tokens : text.replace(/\*{2,}/g, '');
};

export default function BlogPage({ onOpenBooking }) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.targetKeywords.some(kw => kw.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "MivizHub Small Business Growth & AI Staffing Blog",
    "description": "Practical guides and playbooks on SEO, marketing, AI receptionists, and scaling small business operations without expanding payroll.",
    "url": "https://www.mivizhub.online/blog",
    "publisher": {
      "@type": "Organization",
      "name": "MivizHub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mivizhub.online/logo-256.png"
      }
    }
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen pt-24 sm:pt-28 pb-20">
      <SEOHead
        title="Small Business Growth & AI Staffing Blog | MivizHub"
        description="Actionable, plain-English guides on SEO, 24/7 AI receptionists, speed-to-lead, and scaling your business without adding expensive payroll."
        keywords={["small business growth", "AI receptionist", "small business SEO", "hire AI employees", "automated call answering", "speed to lead"]}
        canonicalUrl="https://www.mivizhub.online/blog"
        ogType="website"
        jsonLd={jsonLd}
      />

      {/* Header Section with Atmospheric Spotlight */}
      <div className="bg-[#f8fafc] border-b border-gray-200 py-12 sm:py-16 relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.08)_0%,transparent_70%)] pointer-events-none" />

        <Container className="max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-semibold tracking-wide mb-4 shadow-2xs">
              <BookOpen size={15} className="text-cyan-600" />
              Plain-English Guides for Business Owners
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
              Grow Your Business & Cut Operational Overhead
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Simple, practical playbooks on how modern businesses get more customer inquiries and handle the work automatically with AI employees.
            </p>
          </motion.div>

          {/* Search Bar - High Contrast & Large */}
          <div className="max-w-xl mx-auto relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search guides (e.g., missed calls, pipeline, AI receptionist, ROI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-600 shadow-sm text-base transition-colors"
            />
          </div>

          {/* Category Filter Buttons - Mobile Horizontal Scroll with Edge Fades & Desktop Wrap */}
          <div className="relative max-w-full pt-1">
            {/* Subtle edge fade overlays on mobile */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 sm:hidden" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 sm:hidden" />

            {/* Micro swipe hint for mobile */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-gray-500 mb-2 sm:hidden">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-700 animate-pulse" />
              <span>Swipe to filter by topic</span>
            </div>

            <div className="flex items-center sm:justify-center gap-2 overflow-x-auto no-scrollbar scroll-smooth px-4 sm:px-0 sm:flex-wrap py-1.5 snap-x">
              {BLOG_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex-shrink-0 snap-center whitespace-nowrap text-xs sm:text-sm px-4 py-2 rounded-full font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-gray-900 text-white shadow-md shadow-gray-900/20 scale-[1.02]"
                        : "bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-gray-300 shadow-2xs hover:border-gray-400"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </div>

      <Container className="max-w-6xl mt-12">
        {/* Featured Guide Banner (Shown when not searching and on 'All') */}
        {selectedCategory === "All" && !searchQuery && featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mb-14 rounded-3xl isolate"
          >
            <div className="relative w-full h-full bg-[#f8fafc] border border-gray-200/90 rounded-3xl p-6 sm:p-10 shadow-xs overflow-hidden">
              {/* Clean Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-cyan-600" />
              
              {/* Subtle Static Ambient Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.08)_0%,transparent_70%)] pointer-events-none" />

              <div className="max-w-3xl relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-cyan-900 text-white px-3.5 py-1.5 rounded-lg shadow-2xs">
                    <Sparkles size={13} className="text-cyan-300" /> Featured Blueprint
                  </span>
                  <span className="text-xs font-bold text-cyan-950 bg-cyan-100/80 px-2.5 py-1 rounded-md border border-cyan-200 flex items-center gap-1">
                    <Clock size={13} className="text-cyan-700" /> {featuredPost.readingTime}
                  </span>
                  <span className="text-xs text-gray-500 font-semibold">• {featuredPost.publishDate}</span>
                </div>

                <Link to={`/blog/${featuredPost.slug}`}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 hover:text-cyan-700 transition-colors mb-4 leading-tight tracking-tight">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                  {featuredPost.excerpt}
                </p>

                {/* Quick Takeaways Box */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-7 space-y-3 shadow-2xs">
                  <div className="text-xs font-black uppercase text-gray-500 tracking-wider flex items-center gap-1.5">
                    <Zap size={14} className="text-amber-500 fill-amber-500" />
                    What you will learn in this blueprint:
                  </div>
                  {featuredPost.keyTakeaways.slice(0, 3).map((takeaway, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-800 font-medium">
                      <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{renderInlineMarkdown(takeaway)}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-100 border border-gray-300 shadow-2xs shrink-0">
                      <img
                        src="/rahul-profile.png"
                        alt={featuredPost.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-gray-900 block leading-tight">{featuredPost.author.name}</span>
                      <span className="text-xs text-gray-600 font-medium">{featuredPost.author.role}</span>
                    </div>
                  </div>

                  <ArrowFillButton
                    size="lg"
                    variant="primary"
                    href={`/blog/${featuredPost.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/blog/${featuredPost.slug}`);
                    }}
                    btnText="Read More"
                    className="w-full sm:w-auto shadow-lg shadow-blue-600/20"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Section Title & Live Count */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span>{selectedCategory === "All" ? "All Business Guides" : selectedCategory}</span>
            {selectedCategory === "All" && (
              <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-900 border border-cyan-200">
                Live Library
              </span>
            )}
          </h2>
          <span className="text-sm text-gray-500 font-semibold">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'guide' : 'guides'}
          </span>
        </div>

        {/* Articles Grid with Crazy Glowing & Shiny Prismatic Hover Animations */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="text-gray-600 text-base mb-4 font-medium">No guides match your search criteria.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="text-sm font-bold text-cyan-700 hover:underline cursor-pointer"
            >
              Clear filters and view all guides →
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {filteredPosts.map((post, pIdx) => {
              const catBadgeStyle = getCategoryBadgeStyle(post.category);

              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: (pIdx % 3) * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="group relative h-full flex isolate cursor-pointer"
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="relative w-full h-full flex flex-col justify-between bg-white border border-gray-200 hover:border-gray-300 rounded-2xl p-6 sm:p-7 transition-all duration-200 shadow-2xs hover:shadow-xl hover:shadow-gray-900/5 overflow-hidden cursor-pointer"
                  >
                    {/* Clean Subtle Top Hairline on Hover */}
                    <div className="absolute top-0 inset-x-0 h-0.5 bg-transparent group-hover:bg-cyan-600 transition-colors duration-200 z-10" />

                    <div className="relative z-10">
                      {/* Category Badge & Reading Time */}
                      <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border transition-colors flex items-center gap-1.5 shadow-2xs ${catBadgeStyle}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                          <span>{post.category}</span>
                        </span>
                        
                        <span className="text-xs text-gray-500 flex items-center gap-1 font-semibold group-hover:text-gray-700 transition-colors">
                          <Clock size={12} className="text-gray-400 group-hover:text-cyan-600 transition-colors" />
                          <span>{post.readingTime}</span>
                        </span>
                      </div>

                      {/* Title with Clean Hover Transition */}
                      <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200 mb-3 leading-snug">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 leading-relaxed mb-6 line-clamp-3 font-normal transition-colors">
                        {renderInlineMarkdown(post.excerpt)}
                      </p>
                    </div>

                    {/* Bottom Footer: Author & Signature Animated Button */}
                    <div className="pt-4 border-t border-gray-100 group-hover:border-gray-200 flex items-center justify-between mt-auto relative z-10 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100 ring-1 ring-gray-200 group-hover:ring-gray-300 transition-all duration-200 shadow-2xs shrink-0">
                          <img
                            src="/rahul-profile.png"
                            alt={post.author.name}
                            className="w-full h-full object-cover"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-gray-700 group-hover:text-gray-950 transition-colors">
                          {post.author.name}
                        </span>
                      </div>

                      {/* Animated ArrowFillButton as span */}
                      <ArrowFillButton
                        as="span"
                        size="sm"
                        variant="secondary"
                        btnText="Read More"
                        className="shadow-none border-gray-200"
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* High-Converting Clear CTA Box for Business Owners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-[#f8fafc] border-2 border-gray-300 hover:border-cyan-500 rounded-2xl p-8 sm:p-12 text-center shadow-sm hover:shadow-2xl hover:shadow-cyan-900/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08)_0%,transparent_70%)] pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-cyan-800 block mb-2">
              Free Consultation For Business Owners
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Wondering How Much Revenue You Lose to Missed Calls?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed font-normal">
              We will review your current phone handling and website search ranking, and show you exactly how an AI receptionist and growth strategy can bring in more customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ArrowFillButton
                size="lg"
                variant="primary"
                onClick={() => onOpenBooking('ai-staffing')}
                btnText="Schedule a 30-Minute Call"
                className="w-full sm:w-auto shadow-xl shadow-blue-600/30"
              />
              <ArrowFillButton
                size="lg"
                variant="secondary"
                onClick={() => navigate('/casestudy')}
                btnText="View Client Results & Numbers"
                className="w-full sm:w-auto border-gray-300 hover:border-gray-400"
              />
            </div>
            <p className="text-xs text-gray-500 mt-4 font-medium">
              Zero obligation • Real practical guidance • No technical experience needed
            </p>
          </div>
        </motion.div>

      </Container>
    </div>
  );
}
