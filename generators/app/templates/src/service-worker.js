'use strict';

self.oninstall = () => {
    caches.open('fayeFrontEndV1').then(cache => {
        cache.addAll([])
        .catch();
    })
    .catch();
};

self.onactivate = e => {
    /* eslint-disable no-console */
    console.log('Service worker activated.');
};