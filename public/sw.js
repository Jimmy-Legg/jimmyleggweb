const CACHE_NAME = 'jimmy-legg-v1';
const EXTERNAL_CACHE_NAME = 'jimmy-legg-external-v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/pdf/Jimmy Legg.pdf'
];

const externalResources = [
  'https://unpkg.com/aos@2.3.1/dist/aos.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

// Skip caching for certain paths and schemes
const shouldNotCache = (url) => {
  // Add more specific Vercel paths
  const skippedPaths = [
    '/_vercel/speed-insights',
    '/_vercel/insights',
    'chrome-extension://',
    'vitals.vercel-insights.com'
  ];
  const skippedSchemes = ['chrome-extension:'];
  
  // Check if URL is a Vercel analytics URL
  const isVercelAnalytics = url.hostname === 'vitals.vercel-insights.com' || 
                           url.pathname.startsWith('/_vercel/');
  
  return skippedPaths.some(path => url.toString().includes(path)) || 
         skippedSchemes.some(scheme => url.toString().startsWith(scheme)) ||
         isVercelAnalytics;
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then((cache) => {
        return Promise.all(
          urlsToCache.map(url => {
            return fetch(url)
              .then(response => {
                if (!response.ok) {
                  throw new Error(`Failed to fetch ${url}`);
                }
                return cache.put(url, response);
              })
              .catch(error => {
                console.error(`Failed to cache ${url}:`, error);
              });
          })
        );
      }),
      caches.open(EXTERNAL_CACHE_NAME).then((cache) => {
        return Promise.all(
          externalResources.map(url => {
            return fetch(url)
              .then(response => {
                if (!response.ok) {
                  throw new Error(`Failed to fetch ${url}`);
                }
                return cache.put(url, response);
              })
              .catch(error => {
                console.error(`Failed to cache external resource ${url}:`, error);
              });
          })
        );
      })
    ])
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Allow Vercel analytics requests to pass through without caching
  if (shouldNotCache(url)) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Special handling for PDF files
  if (url.pathname.endsWith('.pdf')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Clone the response before caching
          const responseToCache = response.clone();
          const cacheName = url.hostname.includes('jimmylegg.vercel.app') || url.hostname.includes('localhost') ? CACHE_NAME : EXTERNAL_CACHE_NAME;
          caches.open(cacheName)
            .then(cache => {
              if (response.ok) {
                cache.put(event.request, responseToCache);
              }
            })
            .catch(error => console.error('Error caching PDF:', error));
          return response;
        })
        .catch(error => {
          console.error('Error fetching PDF:', error);
          return caches.match(event.request);
        })
    );
    return;
  }

  // Handle external resources differently
  const isExternal = !url.hostname.includes('jimmylegg.vercel.app') && 
                    !url.hostname.includes('localhost');

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }

        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            const responseToCache = response.clone();
            const cacheName = isExternal ? EXTERNAL_CACHE_NAME : CACHE_NAME;
            caches.open(cacheName)
              .then(cache => {
                cache.put(event.request, responseToCache);
              })
              .catch(error => console.error('Error caching resource:', error));

            return response;
          })
          .catch(error => {
            console.error('Fetch error:', error);
            return new Response('Network error', { status: 408, statusText: 'Network error' });
          });
      })
  );
});

// Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME && cacheName !== EXTERNAL_CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    ])
  );
});
