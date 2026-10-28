import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// When navigating to "/#section" or "#section", scroll to that element.
// On a fresh page load with a hash, scroll after mount.
export function useHashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // slight delay to let layout settle
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
      }
    } else {
      // top of page on route change without hash
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname, location.hash]);
}
