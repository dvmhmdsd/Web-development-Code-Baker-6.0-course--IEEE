let cacheName = "v1";

// cache all assets on install the sw
self.addEventListener("install", e => {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        return cache.addAll(["./", "./css/style.css", "./js/app.js"]);
      })
      .then(() => console.log("/Service Worker/ cached files"))
  );
});

// handle the fetch event
self.addEventListener("fetch", e => {
  console.log("/Service Worker/ fetching", e.request.url);
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request)
    })
  );
});
