/* ─────────────────────────────────────────────
   MathRush v10 — Service Worker
   Caches all app shell assets for offline play.
   Strategy: Cache-first for shell, network-first
   for Firebase/CDN requests.
───────────────────────────────────────────── */
const CACHE_NAME = 'mathrush-v10';
const SHELL = [
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192.svg',
  './icon-512.svg',
];

// Install: pre-cache app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first for shell, network for external
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Always go network for Firebase, Google APIs, fonts
  const isExternal =
    url.hostname.includes('firebase') ||
    url.hostname.includes('googleapis') ||
    url.hostname.includes('gstatic') ||
    url.hostname.includes('google') ||
    url.hostname.includes('firebaseapp');

  if (isExternal) {
    event.respondWith(
      fetch(event.request).catch(() => new Response('', { status: 503 }))
    );
    return;
  }

  // Cache-first for same-origin requests
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request)
        .then(response => {
          // Cache successful same-origin GET responses
          if (response.ok && event.request.method === 'GET') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match('./index.html'));
    })
  );
});
