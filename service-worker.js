console.log('Hello from service-worker.js');
// copy-paste the below line inside your service worker code loaded with the root scope
importScripts("https://runtime.imagekit.io/1wdk66vou0/v1/js/network-based-adaption.js?v=" + new Date().getTime());