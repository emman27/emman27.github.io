webpackJsonp([1],{784:function(e,n){var t=["/","/react/dist/react.min.js","/react-dom/dist/react-dom.min.js","/main.bundle.js"];self.addEventListener("install",function(e){e.waitUntil(caches.open("emman-cache").then(function(e){return e.addAll(t)}))}),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(n){if(n)return n;var t=e.request.clone();return fetch(t).then(function(n){if(!n||200!==n.status||"basic"!==n.type)return n;var t=n.clone();return caches.open("emman-cache").then(function(n){n.put(e.request,t)}),n})}))}),self.addEventListener("activate",function(e){var n=[];e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(-1===n.indexOf(e))return caches.delete(e)}))}))})}},[784]);