const CACHE_NAME = 'pwa-eattog-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/src/main.js',
    '/src/App.vue',
    '/src/views/Home.vue',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            if (response) {
            return response;
            }
            return fetch(event.request);
        })
    );
});
