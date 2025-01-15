import { useCallback, useRef } from 'react';

const usePrefetch = () => {
  const prefetchedRef = useRef(new Set());

  const prefetchComponent = useCallback((importFn) => {
    if (!importFn || prefetchedRef.current.has(importFn)) {
      return;
    }

    // Mark as prefetched
    prefetchedRef.current.add(importFn);

    // Create a link element for prefetching
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'script';
    link.href = importFn.toString().match(/import\(['"](.+)['"]\)/)?.[1] || '';
    
    if (link.href) {
      document.head.appendChild(link);
    }

    // Actual import
    const prefetch = () => {
      try {
        importFn();
      } catch (err) {
        // Silent catch
      }
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(prefetch, { timeout: 2000 });
    } else {
      setTimeout(prefetch, 0);
    }
  }, []);

  return prefetchComponent;
};

export default usePrefetch;
