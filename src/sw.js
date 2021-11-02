
self.addEventListener('install', event => {
    console.log(`Event fired: ${event.type}`);
    console.dir(event);
});

self.addEventListener('activate', event => {
    console.log(`Event fired: ${event.type}`);
    console.dir(event);
});

self.addEventListener('fetch', event => {
    console.log(`Fetching ${event.request.url}`);
    event.respondWith(fetch(event.request));
});