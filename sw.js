// Minimal service worker so Android Chrome installs this as a proper app.
// It caches nothing: every request goes to the network as usual.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
