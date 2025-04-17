
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('url-saver-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        'index.html',
        'script.js',
        'style.css',
        'manifest.json',
        'generated-icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
