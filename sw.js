/* Service worker do Calendário EMED.
   Estratégia "rede primeiro": sempre tenta buscar a versão mais nova; só usa a cópia salva se estiver sem internet.
   Assim, atualizações publicadas no GitHub aparecem sem precisar limpar nada. */
const V = 'emed-v1';
const CORE = ['./', 'index.html', 'data.js', 'logo.png', 'fonts/pjs-latin.woff2', 'fonts/pjs-latin-ext.woff2', 'icons/icon-192.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  e.respondWith(
    fetch(r).then(res => { const c = res.clone(); caches.open(V).then(ch => ch.put(r, c)); return res; })
      .catch(() => caches.match(r).then(m => m || caches.match('index.html')))
  );
});
