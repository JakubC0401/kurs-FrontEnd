const CACHE_NAME = "my-cache-v1";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/wykrzyknik.jpg"  // Sprawdź, czy ten plik istnieje!
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(FILES_TO_CACHE.map(url => {
        return fetch(url)
          .then(response => {
            if (response.ok) {
              console.log(`Dodano do cache: ${url}`);
              return cache.add(url);
            } else {
              console.log(`Błąd ładowania pliku: ${url}, status: ${response.status}`);
              throw new Error(`Błąd ładowania: ${url}`);
            }
          })
          .catch(error => {
            console.error(`Błąd przy ładowaniu pliku: ${url}`, error);
          });
      }))
      .then(results => {
        results.forEach((result, index) => {
          if (result.status === "rejected") {
            console.warn("Błąd cache:", FILES_TO_CACHE[index], result.reason);
          }
        });
      });
    }).catch((error) => console.error("Błąd podczas otwierania cache:", error))
  );
});


self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response; // Plik z cache
      }

      // Pobierz plik z sieci i zaktualizuj cache
      return fetch(event.request).then((networkResponse) => {
        if (networkResponse.ok) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone()); // Zaktualizuj cache
          });
        }
        return networkResponse;
      });
    })
  );
});

// Usuwanie starych cache podczas aktualizacji SW
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});