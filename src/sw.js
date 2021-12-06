const cacheName = 'magpie-scave-2021';
const appShellFiles = [
  '/icons/icon-32.png',
  '/icons/icon-128.png',
  '/icons/icon-512.png',
  'index.html',
  'js/main.js'
];

const contentToCache = appShellFiles;

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching app shell');
      await cache.addAll(contentToCache);
    })());
  });

self.addEventListener('fetch', (e) => {
    e.respondWith((async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) { return r; }
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
  });