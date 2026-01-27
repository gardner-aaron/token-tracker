const CACHE_NAME = 'token-v2';
const ASSETS = [
  './',
  './index.html',
  './Clue.jpg',
  './Food.jpg',
  './Treasure.jpg',
  './Dino_Clue.jpg',
  './Dino_Food.jpg',
  './Dino_Treasure.jpg',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
