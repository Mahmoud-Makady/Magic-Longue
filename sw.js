self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("magic-cache")
      .then((cache) =>
        cache.addAll([
          "index.html",
          "account.html",
          "points.html",
          "javascript/main.js",
          "images/head-back.webp",
          "images/logo.webp",
          "images/omlet.webp",
          "images/salad.jpg",
          "images/user.png",
          "css/main.css",
          "css/normalize.css",
        ])
      )
  );
});

self.addEventListener("activate", (event) => {
  console.log("sw Activated!");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request.url).then((file) => {
      if (file) {
        return file;
      } else {
        return fetch(event.request.url);
      }
    })
  );
});
