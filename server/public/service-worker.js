importScripts("/precache-manifest.b9c2369cfeaaccd663d008f89703eef7.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
  console.log(`Workbox is loaded`);

  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
  workbox.routing.registerRoute(
    '/products',
    new workbox.strategies.NetworkFirst({
      cacheName: 'haroons-cache',
    }),
  );
  workbox.routing.registerRoute(
    new RegExp('/images/.*.png'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'haroons-image-cache',
    }),
  );
} else {
  console.log(`Workbox didn't load`);
}

