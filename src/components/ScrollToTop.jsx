import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop guarantees that whenever a user navigates to a NEW route,
 * the window scroll resets smoothly to the top.
 * 
 * Crucially, it does NOT hijack or reset scroll position on page reload (F5 / Cmd+R),
 * allowing the browser's native scroll restoration to keep the user where they were.
 */
export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();
  const prevPathRef = useRef(pathname);
  const isFirstMount = useRef(true);

  useEffect(() => {
    // 1. Initial mount / page reload: let browser naturally restore scroll position
    if (isFirstMount.current) {
      isFirstMount.current = false;
      if (hash) {
        // Delayed anchor scroll to let React DOM render
        setTimeout(() => {
          const element = document.getElementById(hash.replace('#', ''));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 120);
      }
      return;
    }

    // 2. Anchor click on current page
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // 3. Only scroll to top if pathname actually changed (navigating to another page)
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
    }
  }, [pathname, search, hash]);

  return null;
}
