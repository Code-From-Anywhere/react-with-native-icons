if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise(async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()})),c.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},c=(c,s)=>{Promise.all(c.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(c)};self.define=(c,a,n)=>{s[c]||(s[c]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+c.slice(1)};return Promise.all(a.map(c=>{switch(c){case"exports":return s;case"module":return i;default:return e(c)}})).then(e=>{const c=n(...e);return s.default||(s.default=c),s})}))}}define("./sw.js",["./workbox-d8fc897c"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"s5TUAL3HJ0nK7gCYjH4MR"},{url:"/_next/static/chunks/12.441a3f5cd763514ea162.js",revision:"362374b027d53d21ad9f512f69cefb68"},{url:"/_next/static/chunks/13.33bbc514bad4ccb13806.js",revision:"1e88228f961f79df8fc03eb360c8f7e2"},{url:"/_next/static/chunks/14.1f756b0ced2889e26a3d.js",revision:"65e0bad340d635e40a57738273b32ee2"},{url:"/_next/static/chunks/15.97033c01c4b9623c970a.js",revision:"e484a54983f7216edd889b58470e055d"},{url:"/_next/static/chunks/16.df7a8750b70eac86857e.js",revision:"10ad165b711e9fb642c32b682d8ae16e"},{url:"/_next/static/chunks/17.a3e4f1034909b3758d53.js",revision:"29eafc932014ae836708b9f5276bf7aa"},{url:"/_next/static/chunks/18.af42bea0465e4d76a504.js",revision:"c321424c43aefe9eb945a6d8192fa736"},{url:"/_next/static/chunks/19.26d7918fc0ec382a0ce6.js",revision:"62ceff880b4dc8cd9e728c5258208e46"},{url:"/_next/static/chunks/1d7de3dbcee8cc0ba1441789490f57b5dbab48f4.5e48bf5977f34f95f215.js",revision:"1104c04abdfaf2c59f845bf6a0c22461"},{url:"/_next/static/chunks/21.599e9797e35cfef9e1be.js",revision:"069c19c094dffb608d41bb5a0068dfd4"},{url:"/_next/static/chunks/22.43f9b5dc3dc8de8aa728.js",revision:"b187f37a4e06041dc1c7cc11e1f5e219"},{url:"/_next/static/chunks/23.a712f6d8ba096f5be5c6.js",revision:"4639ff27683ca69492f7fc6e0851934b"},{url:"/_next/static/chunks/24.e748c523bb9b804f07ea.js",revision:"3e6e3f86c9b55b31fd4dff091033fc7c"},{url:"/_next/static/chunks/25.9f2112b9a8c9e7b8fca9.js",revision:"9096567ac019314b8a08851fc187a7c4"},{url:"/_next/static/chunks/26.752fd99d75afe0ab245f.js",revision:"029022ecc5e26599d4f5ad9daa517049"},{url:"/_next/static/chunks/27.a7e6e0167ae0e213c9be.js",revision:"107df1c04124dd1ed884471eb7278697"},{url:"/_next/static/chunks/28.2415c6e853cdfcf420ca.js",revision:"71a61a4427827d4a42b0f1264d31cd35"},{url:"/_next/static/chunks/30.020ecb86c733b5cfe7f5.js",revision:"55f5067ddb8eb908e8242fab02c3d57f"},{url:"/_next/static/chunks/31.ff341fe7d4ab9f101c9b.js",revision:"2a157bae4661387a417a933c407206ab"},{url:"/_next/static/chunks/32.ad481df2c00ae6122dbb.js",revision:"7c56c0bad87d594d87c46967119a2cca"},{url:"/_next/static/chunks/9c52c29b96d2a801339ded4fe12325569159951c.e9342f858c870d6b5456.js",revision:"638705c6fc5e83f5c1652c2b004b5ba9"},{url:"/_next/static/chunks/aa7211ef10ddeeb2b5b69fd333f2710cede69d3c.ca633c75130083f0a547.js",revision:"6d60cae5e9e5ef4081bed9f5c1e94eb4"},{url:"/_next/static/chunks/framework.cd0bada2e78bd80de574.js",revision:"01280601953dd03ceb505456ad964e7a"},{url:"/_next/static/chunks/main-19666850d7f2ce105716.js",revision:"11d2e116b65d7d4276646997daec6592"},{url:"/_next/static/chunks/pages/_app-44e55fd44720db920441.js",revision:"907b7ed226fd0b4a23e40c91066eacd8"},{url:"/_next/static/chunks/pages/_error-bb357276829ca2ba519a.js",revision:"d97f509a2d637c0ce429f3b63079f10c"},{url:"/_next/static/chunks/pages/icons-87626fb78e10d0f55917.js",revision:"4b3de241edfef0fcbda6ac37f4abc084"},{url:"/_next/static/chunks/pages/index-0e4a85a55f57419d41ce.js",revision:"1ceb5241a69a4c08295e1e0cd5835842"},{url:"/_next/static/chunks/pages/search-8c7b9d6fe26cf7bc31d9.js",revision:"a6583b0672b999f36750a68619a87a20"},{url:"/_next/static/chunks/polyfills-18924724749fcd6d1812.js",revision:"ce0b76582931ba2a8b8464b2ec03f9ff"},{url:"/_next/static/chunks/webpack-7e2335f9bcba1851d237.js",revision:"2e2382142776bdfff2715284cc30d67c"},{url:"/_next/static/css/25fe7ed53c90215e4a1e.css",revision:"8fa939248949ddfb296e8653c3888411"},{url:"/_next/static/s5TUAL3HJ0nK7gCYjH4MR/_buildManifest.js",revision:"a0d2baa9d6e7af74350a6a7568daf929"},{url:"/_next/static/s5TUAL3HJ0nK7gCYjH4MR/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/brand-icon.svg",revision:"33455d33822cd86a7b2e7c12be2688f6"},{url:"/favicon.png",revision:"217bba9d985038b5db0f675aadef1058"},{url:"/icons/icon-128x128.png",revision:"61141052122e82b0e4c106b6478053f7"},{url:"/icons/icon-144x144.png",revision:"d7041f383ef13f304ce0c8222c768687"},{url:"/icons/icon-152x152.png",revision:"e892614a0964881052f52449818355d2"},{url:"/icons/icon-192x192.png",revision:"09b80496ac709b0fceef80e2c89a5558"},{url:"/icons/icon-384x384.png",revision:"065ce43c918fae1157d9fa6757bc7685"},{url:"/icons/icon-512x512.png",revision:"c4642057e4afcfa6776064b99ae43a13"},{url:"/icons/icon-72x72.png",revision:"5fedad82387f7b30c250134c5a394688"},{url:"/icons/icon-96x96.png",revision:"2c3ea4bbe99ae01388b3dcd30b5d053d"},{url:"/manifest.json",revision:"95cea107ce25d574dcfc372c8d72408e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
