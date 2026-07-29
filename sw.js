/* HyperFit service worker — cache offline básico */
const CACHE = "hyperfit-v2";
const ASSETS = ["./", "./index.html", "./manifest.json", "./icon.svg", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  // nunca cachear chamadas à API da IA
  if (url.hostname.includes("googleapis.com")) return;
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
      if (e.request.method === "GET" && resp.ok && url.origin === location.origin) {
        const clone = resp.clone(); caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return resp;
    }).catch(() => caches.match("./index.html")))
  );
});
