import { CASE_STUDIES } from '../data/caseStudies.js';
import { BLOG_POSTS } from '../data/blogs.js';

/**
 * Centralized Cal.com Booking Configuration
 * Configured with dedicated links for each service track.
 */
export const CAL_LINKS = {
  // Track 1: AI Staffing & Automation (Digital workers, receptionists, workflow automation)
  AI_STAFFING: "https://cal.com/rahul-lohar/ai-workforce-strategy-call",

  // Track 2: $250 / mo Presence Plan (₹20,000/mo) - Business Growth Consultation (Web, Google Maps, Local SEO)
  PRESENCE_250: "https://cal.com/rahul-lohar/business-growth-consultation",

  // Track 3: $500 / mo Growth Plan (₹40,000/mo) - Lead Generation Strategy Call (Paid Ads, Content Engine, Attribution)
  GROWTH_500: "https://cal.com/rahul-lohar/lead-generation-strategy-call",
};

/**
 * Resolves the appropriate Cal.com booking link based on the trigger context.
 *
 * @param {string | object} [context] - Plan name, case study object, blog post object, or identifier
 * @returns {string} - The exact Cal.com URL to open
 */
export function getBookingUrl(context) {
  // 1. Direct String Matching
  if (typeof context === 'string') {
    const lower = context.toLowerCase().trim();
    if (lower.includes('presence') || lower.includes('250') || lower === 'presence-250') {
      return CAL_LINKS.PRESENCE_250;
    }
    if (lower.includes('growth') || lower.includes('500') || lower.includes('lead') || lower === 'growth-500') {
      return CAL_LINKS.GROWTH_500;
    }
    if (lower.includes('ai') || lower.includes('staff') || lower.includes('workforce') || lower.includes('automation')) {
      return CAL_LINKS.AI_STAFFING;
    }
  }

  // 2. Object Matching (Case Study or Blog Post)
  if (context && typeof context === 'object') {
    // Check Case Study properties
    if (context.serviceCategory || context.planTier) {
      const planName = (context.planTier?.name || context.planTier?.shortName || '').toLowerCase();
      const planPrice = (context.planTier?.price || '').toLowerCase();

      if (planName.includes('presence') || planPrice.includes('250') || planPrice.includes('20,000') || planPrice.includes('20k')) {
        return CAL_LINKS.PRESENCE_250;
      }
      if (planName.includes('growth') || planPrice.includes('500') || planPrice.includes('40,000') || planPrice.includes('40k')) {
        return CAL_LINKS.GROWTH_500;
      }
      if (context.serviceCategory === 'AI Staffing & Automation' || planName.includes('ai') || planName.includes('automation')) {
        return CAL_LINKS.AI_STAFFING;
      }
    }

    // Check Blog Post properties
    if (context.category || context.slug) {
      const cat = (context.category || '').toLowerCase();
      if (cat.includes('presence') || cat.includes('local seo')) {
        return CAL_LINKS.PRESENCE_250;
      }
      if (cat.includes('lead generation') || cat.includes('paid ads')) {
        return CAL_LINKS.GROWTH_500;
      }
      // AI Workforce and general automation posts
      return CAL_LINKS.AI_STAFFING;
    }
  }

  // 3. Fallback based on active browser URL
  if (typeof window !== 'undefined' && window.location) {
    const path = window.location.pathname.toLowerCase();

    // /growth route defaults to Growth Consultation or Lead Generation
    if (path.startsWith('/growth')) {
      return CAL_LINKS.GROWTH_500;
    }

    // /casestudy/:slug route resolves from the matched case study
    if (path.startsWith('/casestudy/')) {
      const slug = path.replace('/casestudy/', '').replace(/\/$/, '');
      const study = CASE_STUDIES.find(s => s.slug === slug || s.legacySlug === slug);
      if (study) {
        return getBookingUrl(study);
      }
    }

    // /blog/:slug route resolves from the matched blog post
    if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '').replace(/\/$/, '');
      const post = BLOG_POSTS.find(p => p.slug === slug);
      if (post) {
        return getBookingUrl(post);
      }
    }
  }

  // 4. Global default (Homepage, Navbar, Footer default) -> AI Workforce Strategy Call
  return CAL_LINKS.AI_STAFFING;
}
