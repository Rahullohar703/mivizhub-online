import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, Calendar, ArrowRight, BookOpen, CheckCircle2, Sparkles, User, Tag } from 'lucide-react';
import Container from '../components/ui/Container';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogs';
import SEOHead from '../components/SEOHead';

export default function BlogPage({ onOpenBooking }) {
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

      {/* Header Section */}
      <div className="bg-[#f8fafc] border-b border-gray-200 py-12 sm:py-16">
        <Container className="max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <BookOpen size={15} className="text-cyan-600" />
            Plain-English Guides for Business Owners
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Grow Your Business & Cut Operational Overhead
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Simple, practical guides on how modern businesses get more customer inquiries and handle the work automatically with AI employees.
          </p>

          {/* Search Bar - High Contrast & Large */}
          <div className="max-w-xl mx-auto relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search guides (e.g., missed calls, SEO, AI receptionist)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-600 shadow-sm text-base"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-xs sm:text-sm px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gray-900 text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </div>

      <Container className="max-w-6xl mt-12">
        {/* Featured Guide Banner (Shown when not searching and on 'All') */}
        {selectedCategory === "All" && !searchQuery && featuredPost && (
          <div className="mb-14 bg-gradient-to-br from-cyan-50/50 via-white to-gray-50 border-2 border-cyan-200 rounded-2xl p-6 sm:p-10 shadow-sm">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider bg-cyan-100 text-cyan-900 px-3 py-1 rounded-md">
                  Featured Guide
                </span>
                <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                  <Clock size={13} /> {featuredPost.readingTime}
                </span>
                <span className="text-xs text-gray-500">• {featuredPost.publishDate}</span>
              </div>

              <Link to={`/blog/${featuredPost.slug}`}>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 hover:text-cyan-700 transition-colors mb-4 leading-snug">
                  {featuredPost.title}
                </h2>
              </Link>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>

              {/* Quick Summary Points */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 mb-6 space-y-2.5">
                <div className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                  What you will learn in this guide:
                </div>
                {featuredPost.keyTakeaways.slice(0, 3).map((takeaway, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-800">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-100 border border-gray-300 shadow-sm shrink-0">
                    <img
                      src="/rahul-profile.png"
                      alt={featuredPost.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-900 block leading-tight">{featuredPost.author.name}</span>
                    <span className="text-xs text-gray-600">{featuredPost.author.role}</span>
                  </div>
                </div>

                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-gray-900 hover:bg-black px-6 py-3 rounded-xl transition-all shadow-md"
                >
                  Read Complete Guide <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Section Title */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            {selectedCategory === "All" ? "All Business Guides" : selectedCategory}
          </h2>
          <span className="text-sm text-gray-500 font-medium">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'guide' : 'guides'}
          </span>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="text-gray-600 text-base mb-4">No guides match your search.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="text-sm font-semibold text-cyan-700 hover:underline"
            >
              Clear filters and view all
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border-2 border-gray-200 hover:border-gray-900 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all shadow-sm hover:shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-gray-100 text-gray-800">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1 font-medium">
                      <Clock size={12} /> {post.readingTime}
                    </span>
                  </div>

                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-cyan-700 transition-colors mb-3 leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-cyan-100 text-cyan-900 flex items-center justify-center text-xs font-bold border border-gray-200">
                      <img
                        src="/rahul-profile.png"
                        alt={post.author.name}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-700">{post.author.name}</span>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-sm font-bold text-cyan-700 group-hover:text-cyan-900 flex items-center gap-1"
                  >
                    Read Guide <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* High-Converting Clear CTA Box for Business Owners */}
        <div className="mt-20 bg-[#f8fafc] border-2 border-gray-300 rounded-2xl p-8 sm:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-800 block mb-2">
              Free Consultation For Business Owners
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              Wondering How Much Revenue You Lose to Missed Calls?
            </h3>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              We will review your current phone handling and website search ranking, and show you exactly how an AI receptionist and growth strategy can bring in more customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 hover:bg-black text-white font-bold text-base rounded-xl transition-all shadow-md"
              >
                Schedule a 30-Minute Call
              </button>
              <Link
                to="/casestudy"
                className="text-base font-semibold text-gray-700 hover:text-gray-900 px-6 py-3.5 rounded-xl border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                View Client Results & Numbers →
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Zero obligation • Real practical guidance • No technical experience needed
            </p>
          </div>
        </div>

      </Container>
    </div>
  );
}
