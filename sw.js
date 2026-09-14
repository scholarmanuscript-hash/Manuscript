const cacheName = 'scholar-manuscript-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/manifest.json'
];

// App install hote hi files save karna
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Caching assets...');
      return cache.addAll(assetsToCache);
    })
  );
});

// Jab user app khole, to memory se files dena
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
