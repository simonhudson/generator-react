'use strict';

self.oninstall = function() {
    caches.open('fayeFrontEndV1').then(function(cache) {
        cache.addAll([])
        .catch();
    })
    .catch()
}

self.onactivate = function(event) {
    console.log('Service worker activated!');
}