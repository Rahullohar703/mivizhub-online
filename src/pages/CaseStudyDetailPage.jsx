import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Building2, MapPin, CheckCircle2, ArrowRight, ArrowLeft, 
  ChevronRight, Quote, PhoneCall, Check, Award
} from 'lucide-react';
import Container from '../components/ui/Container';
import { CASE_STUDIES } from '../data/caseStudies';
import SEOHead from '../components/SEOHead';

export default function CaseStudyDetailPage({ onOpenBooking }) {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [slug]);

  const study = CASE_STUDIES.find((s) => s.slug === slug);

  if (!study) {
    navigate('/casestudy', { replace: true });
    return null;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": study.headline,
    "description": study.summary,
    "publisher": {
      "@type": "Organization",
      "name": "MivizHub",
      "url": "https://www.mivizhub.online"
    },
    "about": {
      "@type": "Organization",
      "name": study.clientName
    }
  };

  return (
    <article className="bg-white text-gray-900 min-h-screen pt-24 sm:pt-28 pb-20">
      <SEOHead
        title={`${study.clientName} Case Study | MivizHub Results`}
        description={study.summary}
        keywords={[study.industry, study.clientName, "case study", "MivizHub results"]}
        canonicalUrl={`https://www.mivizhub.online/casestudy/${study.slug}`}
        ogType="article"
        jsonLd={jsonLd}
      />

      <Container className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/casestudy" className="hover:text-gray-900 transition-colors">Client Results</Link>
          <ChevronRight size={14} />
          <span className="text-gray-800 font-semibold truncate max-w-[200px] sm:max-w-xs">{study.clientName}</span>
        </nav>

        {/* Case Study Header */}
        <header className="mb-10 pb-8 border-b-2 border-gray-200">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs sm:text-sm font-bold px-3 py-1 rounded bg-gray-100 text-gray-900 border border-gray-300 flex items-center gap-1.5">
              <Building2 size={14} /> {study.industry}
            </span>
            <span className="text-xs sm:text-sm font-semibold px-2.5 py-0.5 rounded bg-cyan-50 text-cyan-900 border border-cyan-200">
              {study.badge}
            </span>
            <span className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 font-medium">
              <MapPin size={13} /> {study.location}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            {study.headline}
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal">
            {study.summary}
          </p>
        </header>

        {/* Key Results Numbers Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 bg-[#f8fafc] border-2 border-gray-300 rounded-2xl mb-12 shadow-sm">
          {study.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <span className={`text-2xl sm:text-3xl font-extrabold block mb-1 ${stat.highlight ? "text-emerald-700" : "text-gray-900"}`}>
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Main Content Sections */}
        <div className="space-y-10">
          
          {/* 1. The Challenge */}
          <section className="bg-rose-50/50 border-2 border-rose-200 rounded-2xl p-6 sm:p-8">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-900 block mb-2">
              The Problem Before MivizHub
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Where The Business Was Losing Money & Time
            </h2>
            <div className="text-gray-800 leading-relaxed text-base sm:text-lg space-y-4 whitespace-pre-line font-normal">
              {study.theChallenge.trim()}
            </div>
          </section>

          {/* 2. The Solution */}
          <section className="bg-cyan-50/40 border-2 border-cyan-200 rounded-2xl p-6 sm:p-8">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-900 block mb-2">
              The Plan & Setup
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How MivizHub Solved The Issue
            </h2>
            <div className="text-gray-800 leading-relaxed text-base sm:text-lg space-y-4 whitespace-pre-line font-normal">
              {study.theSolution.trim()}
            </div>
          </section>

          {/* 3. The Results */}
          <section className="bg-emerald-50/40 border-2 border-emerald-200 rounded-2xl p-6 sm:p-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block mb-2">
              The Measured Results
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What Happened After Deployment
            </h2>
            <div className="text-gray-800 leading-relaxed text-base sm:text-lg space-y-4 whitespace-pre-line font-normal">
              {study.theResults.trim()}
            </div>
          </section>

          {/* Client Testimonial Box */}
          <div className="bg-gray-100 border-2 border-gray-300 rounded-2xl p-6 sm:p-8">
            <Quote className="text-gray-400 mb-3" size={32} />
            <p className="text-base sm:text-lg text-gray-900 font-medium italic leading-relaxed mb-4">
              "{study.quote.text}"
            </p>
            <div>
              <div className="text-base font-bold text-gray-900">{study.quote.author}</div>
              <div className="text-sm text-cyan-800 font-semibold">{study.quote.role}</div>
            </div>
          </div>

          {/* Active Capabilities Box */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
              Tools & Setup Put In Place For This Client:
            </h3>
            <div className="flex flex-wrap gap-2">
              {study.technologiesUsed.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-sm bg-gray-100 border border-gray-300 text-gray-800 px-3 py-1.5 rounded-lg flex items-center gap-2 font-medium"
                >
                  <CheckCircle2 size={16} className="text-emerald-700" />
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Call to Action Box */}
        <div className="mt-16 bg-[#f8fafc] border-2 border-gray-300 rounded-2xl p-8 sm:p-10 text-center">
          <div className="max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              Want Similar Results For Your Business?
            </h3>
            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              We set up custom phone handling and growth campaigns in under 72 hours. Let's look at your numbers together on a short 30-minute call.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 hover:bg-black text-white font-bold text-base rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <PhoneCall size={18} /> Schedule a Free 30-Min Call
              </button>
              <Link
                to="/casestudy"
                className="text-base font-semibold text-gray-800 hover:text-black px-5 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                View More Client Stories →
              </Link>
            </div>
          </div>
        </div>

      </Container>
    </article>
  );
}
