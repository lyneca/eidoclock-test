// This is the "Offline page" service worker

// Add this below content to your HTML page, or add the js file to your page at the very top to register service worker
if (navigator.serviceWorker.controller) {
    console.log('[PWA] active service worker found, no need to register')
} else {
    //Register the ServiceWorker
    navigator.serviceWorker.register('sw.js', {
        scope: './'
    }).then(function (reg) {
        console.log('Service worker has been registered for scope:' + reg.scope);
    });
}

document.addEventListener('beforeinstallprompt', function() {
    document.write("Install?");
});