const CACHE_NAME = 'app-cache-v1';
const urls = ['./', './index.html', './manifest.json', './pexels-artempodrez-7648368 (1).jpg'];

self.addEventListener('install', event => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urls)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
