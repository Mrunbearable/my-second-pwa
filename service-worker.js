// Log when the service worker is installing
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
});

// Log when the service worker is activating
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated!');
});

// Log fetch requests
self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetching...', event.request.url);
});

const CACHE_NAME = 'my-site-v1';

// Cache the click counter page
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
              return cache.addAll([
                'index.html',
                'styles.css',
                'app.js'
              ])
            })
    );
});

// Try to serve cached content
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            })
    );
});
