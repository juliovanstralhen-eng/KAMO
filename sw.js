// Guarda la app en el celular para que abra rápido y funcione sin internet.
const CACHE = "kamo-v36";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-192.png", "icon-maskable-512.png", "apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin || url.pathname.startsWith("/api/")) return;
  // Primero la red para tener la versión más nueva, pero si la señal es débil (más de 3 s) abre la copia guardada
  // y la actualiza por detrás para la próxima vez.
  const net = fetch(e.request).then(r => { if (r && r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return r; });
  const saved = () => caches.match(e.request).then(r => r || caches.match("index.html"));
  e.respondWith(new Promise(resolve => {
    let done = false;
    const give = r => { if (!done && r) { done = true; resolve(r); } };
    const t = setTimeout(() => saved().then(r => { if (r) give(r); }), 3000);
    net.then(r => { clearTimeout(t); give(r); }).catch(() => { clearTimeout(t); saved().then(r => { if (r) give(r); else if (!done) { done = true; resolve(Response.error()); } }); });
  }));
  e.waitUntil(net.catch(() => {}));
});
