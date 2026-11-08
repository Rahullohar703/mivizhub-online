import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { ArrowFillButton } from './ui/arrow-fill-button';
import { ArrowRight, Clock, BookOpen, Sparkles } from 'lucide-react';

export default function SectionBlogPreview() {
  const featuredArticles = [
    {
      slug: "how-to-automate-repetitive-tasks-in-a-small-business",
      emoji: "⚙️",
      category: "Workflow Automation",
      readingTime: "8 min read",
      title: "How to Automate Repetitive Tasks in a Small Business",
      excerpt: "Small business owners lose 15+ hours every week to administrative busywork. Here are five concrete workflows you can automate today without expensive engineers."
    },
    {
      slug: "how-to-automate-lead-management-from-website-form-to-crm",
      emoji: "🎯",
      category: "Sales Automation",
      readingTime: "9 min read",
      title: "How to Automate Lead Management From Website Form to CRM",
      excerpt: "Why leads go cold within 15 minutes of submitting a form, and how to connect your website directly to your sales pipeline for instant qualification."
    },
    {
      slug: "how-to-automate-appointment-reminders-and-reduce-no-shows",
      emoji: "📅",
      category: "Operational Efficiency",
      readingTime: "7 min read",
      title: "How to Automate Appointment Reminders and Cut No-Shows by 40%",
      excerpt: "Stop wasting hours calling clients to confirm appointments. How smart automated SMS and calendar reminders eliminate no-shows for field pros."
    }
  ];

  return (
    <Section id="blog-preview" className="py-24 bg-[#f4f6f8] border-b border-slate-200 text-slate-900 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04)_0%,transparent_70%)] pointer-events-none" />

      <Container className="max-w-6xl relative z-10 px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3 shadow-2xs">
            <span>📚</span>
            <span>Practical Growth Guides</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Latest Insights for <span className="text-blue-600">Operations-Heavy Businesses</span>
          </h2>
          
          <p className="font-sans text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            No fluff or agency buzzwords. Direct playbooks on search visibility, customer conversion, and real-world AI automation.
          </p>
        </div>

        {/* 3 Featured Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14 items-stretch">
          {featuredArticles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="group bg-white rounded-3xl p-7 border-2 border-slate-200/90 hover:border-blue-400 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative cursor-pointer"
            >
              <Link to={`/blog/${article.slug}`} className="flex flex-col h-full justify-between">
                <div>
                  {/* Category and Reading Time */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-slate-700 border border-slate-200/80 shadow-2xs">
                      <span>{article.emoji}</span>
                      <span>{article.category}</span>
                    </span>
                    
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{article.readingTime}</span>
                    </span>
                  </div>

                  {/* Article Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {article.excerpt}
                  </p>
                </div>

                {/* Read Guide Link */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  <span>Read Guide</span>
                  <div className="w-7 h-7 rounded-full bg-white group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors shadow-2xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* In-Page Navigation to Full Blog Hub */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/blog" className="w-full sm:w-auto">
            <ArrowFillButton 
              btnText="Read All Industry Playbooks" 
              href="/blog" 
              size="lg"
              variant="light"
              className="w-full sm:w-auto shadow-sm hover:shadow-md"
            />
          </Link>
        </div>

      </Container>
    </Section>
  );
}
