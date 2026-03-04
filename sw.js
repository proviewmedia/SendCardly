var CACHE_NAME = 'sendrcards-v1';
var ASSETS = [
  '/',
  '/index.html',
  '/og-image.png',
  '/icon-192.png',
  '/icon-512.png',
  '/favicon.svg',
  'https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Caveat:wght@400;500;600;700&family=Cormorant+Garamond:wght@400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;600;700&family=Lora:wght@400;500;600;700&family=Mali:wght@300;400;600;700&family=Manrope:wght@300;400;600;700;800&family=Outfit:wght@300;400;600;700;800&family=Playfair+Display:wght@400;700;900&family=Righteous&family=Syne:wght@400;500;600;700;800&display=swap'
];

// Install: cache all assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// Activate: clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(name) { return name !== CACHE_NAME; })
          .map(function(name) { return caches.delete(name); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Fetch: serve from cache first, fall back to network
self.addEventListener('fetch', function(event) {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // For navigation requests (HTML pages), use network-first
  // so shared card links always get fresh content
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(function() {
        return caches.match('/index.html');
      })
    );
    return;
  }

  // For everything else, cache-first
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;
      return fetch(event.request).then(function(response) {
        // Cache font files for offline use
        if (response.ok && (event.request.url.indexOf('fonts.gstatic.com') > -1 || event.request.url.indexOf('fonts.googleapis.com') > -1)) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      });
    })
  );
});
