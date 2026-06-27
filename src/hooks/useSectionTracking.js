import { useEffect } from 'react';

// The portfolio is a single page, so GA4's standard page_view tracking only
// ever records "/". This hook fires a `section_view` event the first time each
// major section scrolls into view, giving visibility into how far visitors
// actually get (and whether the headline "100% bounce" reflects real instant
// exits or just the lack of in-page engagement signals).
const SECTIONS = ['about', 'projects', 'credentials', 'contact'];

export default function useSectionTracking() {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
      return undefined;
    }
    const seen = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !seen.has(entry.target.id)) {
            seen.add(entry.target.id);
            window.gtag('event', 'section_view', {
              section_name: entry.target.id,
            });
          }
        });
      },
      { threshold: 0.4 },
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
