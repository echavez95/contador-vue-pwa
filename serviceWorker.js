const CACHE_NAME = "v1_cache_contador_app_vue";
const urlsToCache = [
    "./",
    "./img/favicon.png",
    "./img/icon32.png",
    "./img/icon64.png",
    "./img/icon128.png",
    "./img/icon256.png",
    "./img/icon512.png",
    "https://unpkg.com/vue@next",
    "./js/index.js",
    "./js/mount.js",
    "./css/style.css",
    "https://unpkg.com/normalize.css@8.0.1/normalize.css"
];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => 
            cache.addAll(urlsToCache).then(
                ()=> self.skipWaiting()
            ).catch(error => console.log(error))   
        )
    )
})

self.addEventListener("activate", e=> {
    const cacheWhiteList = [CACHE_NAME];

    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if(cacheWhiteList.indexOf(cacheName)=== -1){
                        return caches.delete(cacheName);
                    }
                })
            )
        }).then(()=> self.clients.claim())
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(resp => {
            if(resp)
                return resp
            else
                return fetch(e.request);
        })
    )
})