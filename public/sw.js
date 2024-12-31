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

// Skip caching for certain paths
const shouldNotCache = (url) => {
  const skippedPaths = [
    '/_vercel/speed-insights',
    '/_vercel/insights'
  ];
  return skippedPaths.some(path => url.includes(path));
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

  // Skip caching for certain paths
  if (shouldNotCache(url.pathname)) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Special handling for PDF files
  if (url.pathname.endsWith('.pdf')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
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

        return fetch(event.request).then(response => {
          // Don't cache non-successful responses or opaque responses
          if (!response || response.status !== 200) {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          // Cache in the appropriate cache storage
          caches.open(isExternal ? EXTERNAL_CACHE_NAME : CACHE_NAME)
            .then(cache => {
              // Only cache GET requests
              if (event.request.method === 'GET') {
                cache.put(event.request, responseToCache);
              }
            });

          return response;
        }).catch(() => {
          // If fetch fails (offline), try to return a cached response
          if (isExternal) {
            return caches.match(event.request, { cacheName: EXTERNAL_CACHE_NAME });
          }
          return caches.match(event.request, { cacheName: CACHE_NAME });
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
