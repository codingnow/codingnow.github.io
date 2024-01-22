'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "524f0a7fb343abba82baa325896add26",
"index.html": "6e50a78b9bf210180bda532d0ca22de4",
"/": "6e50a78b9bf210180bda532d0ca22de4",
"main.dart.js": "0fb4919fafb75df16a0c39a295efec80",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c74add144c5136f274883d189bc97bb6",
".git/config": "32d76b8cabf32d70cbcbf6ed35a6e03a",
".git/objects/pack/pack-514c2baf12a185184091dd4833de14146ddc7f11.pack": "4ee4e6d7c55983f050689a857435e6b9",
".git/objects/pack/pack-514c2baf12a185184091dd4833de14146ddc7f11.idx": "987fce9f4b7b2c87f100b687ab4f3799",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b8aa1b482a94e3a087fcf2be0dadab31",
".git/logs/refs/heads/main": "b8aa1b482a94e3a087fcf2be0dadab31",
".git/logs/refs/remotes/origin/main": "2d156672149ce12bf5cdcf1db56a6a62",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "eaa3125c47a82c442a97b3516a977c66",
".git/refs/remotes/origin/main": "eaa3125c47a82c442a97b3516a977c66",
".git/index": "27566b0384fbbef0ac279a5bc6dfcc5e",
".git/FETCH_HEAD": "b41bcd178f42fbef5ddd4b2b0b99e41e",
"assets/AssetManifest.json": "6b039d415ad3e6a54372533ad7af10e8",
"assets/NOTICES": "984e16e59107dcc07f8826b430959971",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "1b3c98415ab691f68bfd90055b912450",
"assets/fonts/MaterialIcons-Regular.otf": "5ef7867d3b71f652613cbb379d57619c",
"assets/assets/golf/768.json": "b140ceaf7b68d8048303da5fdb4becc3",
"assets/assets/golf/31355.json": "5dce319435281606b2d796b63b251775",
"assets/assets/golf/30883.json": "ac4867a23aeb7e9815b7deece69f6d47",
"assets/assets/golf/25947.json": "45dcf3eed81552e7ee373f091c1b0c42",
"assets/assets/golf/31695.json": "e936d8bfcd3b2acdb032bd2cc388fcc7",
"assets/assets/golf/28637.json": "00faed87245f3564128434295bd982d3",
"assets/assets/golf/22778.json": "fb70f538b1aeb0296a951d869a23e4a0",
"assets/assets/golf/30732.json": "c9ce7dbfe6e2e54671e4000778a353dc",
"assets/assets/golf/39143.json": "2345a0a7e99e08d73a4b148eca60b1bc",
"assets/assets/golf/32133.json": "5aa8383a1bfd0e4199ef7525a8527122",
"assets/assets/golf/27274.json": "bc25e100548860ee5fd6fa29208ccca6",
"assets/assets/golf/26961.json": "9f60f7c00e7abe218872eef4461db514",
"assets/assets/golf/30289.json": "3d087bcf066595044cbbbeb5d4cafc8e",
"assets/assets/golf/31477.json": "32d2f6f716e41d8f5f421afaaa45de78",
"assets/assets/golf/28178.json": "16ceefa4e6f0e0ba432702c1e1fe0aa1",
"assets/assets/golf/22125.json": "82716939008a060e5d9f0341e333b1f8",
"assets/assets/golf/32324.json": "b07c6648ea5b5a185dde97ecdc61420e",
"assets/assets/golf/32325.json": "504bb3d80afd88151d51f4da8de2a4a8",
"assets/assets/golf/26736.json": "9f0a826ec6096e989067e026923f0c05",
"assets/assets/golf/32299.json": "831e03f622677ccd18eed97d47f3dd70",
"assets/assets/golf/26825.json": "63d1dfea9124c92946a79476b2ae35d3",
"assets/assets/golf/27275.json": "6e79931a6c2eeeac8f0c2597175e66e4",
"assets/assets/golf/16251.json": "3c6acfb6ffddce3171bffd712d9e44e6",
"assets/assets/golf/31155.json": "a7c6a002d74bf7307097f83ae8c12f98",
"assets/assets/golf/753.json": "05bcc813f8446db56732adcd5a1bd3d2",
"assets/assets/golf/18795.json": "37fcfab050c47e646ac0e337e3473c0d",
"assets/assets/golf/25141.json": "681f5950d612a1ccec6a589f0ceb7ae0",
"assets/assets/golf/22407.json": "ae70f7b62f65b48e11a26ec2ff02cfe4",
"assets/assets/golf/31211.json": "46ad7773c9872a651a604e832ae609c0",
"assets/assets/golf/22893.json": "b17b3fc308c1c3013fa04fcef06205e9",
"assets/assets/golf/36346.json": "94c21e8843ce9d952cad6c971b8cd9ee",
"assets/assets/golf/31600.json": "0a7a04d609f53c759ec98e7681b811fb",
"assets/assets/golf/23113.json": "c853ede8f35e6fe5c61e5d73c4cd4976",
"assets/assets/golf/23390.json": "84bc3bd13d57da3433951e00451f0e1b",
"assets/assets/golf/27272.json": "7bd0786db83e3bc10c479e390e23245e",
"assets/assets/golf/15991.json": "19347fe18d05a4bdd7d32db3525c722b",
"assets/assets/golf/22498.json": "4354424a3e703c1e7c96c641f3ced364",
"assets/assets/golf/3286.json": "725eddd7bd06eba603114ea35fd0e715",
"assets/assets/golf/26834.json": "e95092b3f21033eb5987dd37dedeafca",
"assets/assets/golf/23319.json": "149bfccb68c87d1ef6ff86e8f8c0a848",
"assets/assets/golf/21774.json": "159c3a0d19ace5502766919d6b4421f4",
"assets/assets/golf/22288.json": "f6f4e84b2a266c0a8128b41763be3750",
"assets/assets/golf/32322.json": "efa354326636204e160172923a8581b9",
"assets/assets/golf/30935.json": "df18ef760105c57e697395af9e6a9c51",
"assets/assets/golf/27546.json": "975fc6cbfa6efe21015bb1f0d45b5ade",
"assets/assets/golf/30651.json": "d8bc2fb152f24460794e820e827e87ef",
"assets/assets/golf/34351.json": "6395cbc9b739e446ee3b779be40b6e99",
"assets/assets/golf/30650.json": "8d8f6999cba77052bf515e4337ca0c60",
"assets/assets/golf/30345.json": "c2626f12db467860eda277ccfbd4f942",
"assets/assets/golf/19301.json": "2b031acdd063d99c79b1b83c2b2926b9",
"assets/assets/golf/25917.json": "d7623e50487cc0c4dde819ddbada87b2",
"assets/assets/golf/27269.json": "ee1c7475a12f688d0ab081ba31a10fd3",
"assets/assets/golf/27547.json": "6f8f72a2a3722e6278a5f1cf69b7a04f",
"assets/assets/golf/18592.json": "85f23506e19fea6574eeb1a2cd3cbe4d",
"assets/assets/golf/22289.json": "aa0d50914af075188869920e566a218f",
"assets/assets/golf/32323.json": "f65dedb46d9e7c08586f8b99f91ac2f4",
"assets/assets/golf/22122.json": "c2fc422380230d6748ee96a4537bffe5",
"assets/assets/golf/39056.json": "0b2560f6f06bb9ffafdc269ddf0f2adb",
"assets/assets/golf/22418.json": "6698a0924e1d4fe5aff9af1f0b2fa87e",
"assets/assets/golf/25918.json": "c160a7f2fa951d58bd57c1cc9a09f303",
"assets/assets/golf/21424.json": "ea2422913fbec2d77458feecd0b93cf7",
"assets/assets/golf/23321.json": "cb84ddb31ae207622764e9c7c13eecbb",
"assets/assets/golf/15839.json": "2a5b2ea38f58db0b44061c02674862ae",
"assets/assets/golf/25975.json": "bf528dbb5e9f218e050f3aea54a174a1",
"assets/assets/golf/27270.json": "6833864d1cb9cbea8833c5f93c7e94ae",
"assets/assets/golf/31598.json": "3d83371f6d51b7ffd4aa8d19392d6ea6",
"assets/assets/golf/26695.json": "45145c3216bd1a812c14b1bbc628cd3d",
"assets/assets/golf/20350.json": "1d9265b61b9f52e0635bd971fd6d21d0",
"assets/assets/golf/21111.json": "0494e23f9702a8f1d32ca17384d64fb7",
"assets/assets/golf/32290.json": "36dda65b7dcf5795395ebe22c3694ef2",
"assets/assets/golf/23194.json": "d5c5bc64c70030ee25b558770f99a47b",
"assets/assets/golf/38936.json": "9bbc82ba6daed475dfbb2dcbde1daa71",
"assets/assets/golf/27544.json": "47c840fc70a1a2f7ef92e5051fec3c39",
"assets/assets/golf/36343.json": "ab109996e16c7e4fd665e73f6d50cf7e",
"assets/assets/golf/22496.json": "cae7f89d8743caea8d727776a3e81b5d",
"assets/assets/golf/21740.json": "d7f570af1e4e2be68517bc94ff7e4e3c",
"assets/assets/golf/32584.json": "7bd4e42da1c7041e6b80aa67afe1be1c",
"assets/assets/golf/23394.json": "190feb5f6efc0522b65b5675c51733ef",
"assets/assets/golf/22497.json": "db386a6c1cb4e9bd867ad8d75f04894d",
"assets/assets/golf/21741.json": "2a635d947176eef2329953fd3912af3a",
"assets/assets/golf/36342.json": "81c36976de49530f35c362485e577aee",
"assets/assets/golf/27545.json": "546550d29749f81cae600a14a4a8126e",
"assets/assets/golf/34502.json": "445c2af444397d39c37fc7abbbef24ea",
"assets/assets/golf/22340.json": "314748aa3a39a90910f606123c5b84be",
"assets/assets/golf/18601.json": "65447a38d607d7c8214cb0045f84f310",
"assets/assets/golf/32291.json": "e7cc629f388700e36fcbafc821a33bc8",
"assets/assets/golf/39259.json": "94ab622e87ebafea875ac297f79f07be",
"assets/assets/golf/36047.json": "88221ba4e0ca70241cb15fdddc2532e1",
"assets/assets/golf/22287.json": "ca732d09d6abc76319ef410876aa4055",
"assets/assets/golf/31599.json": "02231f1161fdeae8fcc12143bbb104ff",
"assets/assets/golf/27271.json": "deae8c66cc360aa977ba55ef4d6b03ec",
"assets/assets/golf/22423.json": "1d8a31394918aff8273465dbad0a675d",
"assets/assets/golf/23320.json": "4b79aadf792d36e99046d4fa9795447f",
"assets/assets/golf/23336.json": "4be731f93c3d7e7efcfd7b35715b4126",
"assets/assets/golf/34349.json": "a11023a7c042b5e6ac976c4c63b7c214",
"assets/assets/golf/21632.json": "47b164b539c63c850dadb1e025190185",
"assets/assets/golf/16296.json": "0ddd39ebf5927d92448200d5a4132bfe",
"assets/assets/golf/24704.json": "10ffbcf7c7e1be863ee9f0d53b8fa1f9",
"assets/assets/golf/31156.json": "e634fadffb4201ab605b1d263ffe25e5",
"assets/assets/golf/28635.json": "b6d227d3114f7b2c23dec3fc68f73352",
"assets/assets/golf/33254.json": "a407bc6dae3e3493ab471b2db79bd273",
"assets/assets/golf/31212.json": "5c55c685d5cc758f77a56e57566574e1",
"assets/assets/golf/36345.json": "1666555e1f0b963af1b2e5c711daee16",
"assets/assets/golf/23393.json": "8cf20c9536c163f256038ddb4ce59609",
"assets/assets/golf/32326.json": "0a614bebe9289412c15db76427f9055a",
"assets/assets/golf/26735.json": "31b5f570fa82600fb696da8e31d4068e",
"assets/assets/golf/23433.json": "d54cbe96429b0e2e4a7ea7c527cb76b7",
"assets/assets/golf/23331.json": "ee0f7ae616cab856e40b0d4be871ef6d",
"assets/assets/golf/31475.json": "3dd487a9a2ce0275ab4122dfcb5ae025",
"assets/assets/golf/23327.json": "ba110a9fa2025776b6067783792ed7ba",
"assets/assets/golf/770.json": "b4abc01ae9acc442c1d1170ddf078eba",
"assets/assets/golf/32166.json": "177a8ffb11a7de4789c449aababc5899",
"assets/assets/golf/26037.json": "e35d381c30721d10bb8dff43c1742149",
"assets/assets/golf/31434.json": "35dc54d20701fc226bd875b34a36167b",
"assets/assets/golf/34289.json": "b700dcef578a6ff7e9a7eae65a16c785",
"assets/assets/golf/23371.json": "839f7d3233d9a3ec98261dc061ca40a8",
"assets/assets/golf/32167.json": "46fa74b8f018c770e3fef8a79e9a0b1f",
"assets/assets/golf/31474.json": "d5ca25602bb517f4258eae6f7e0ef9a6",
"assets/assets/golf/23330.json": "4f196c881dbe2b330242b2b712998916",
"assets/assets/golf/32583.json": "a8c794cb790b4e2b9f7e76f8168471a0",
"assets/assets/golf/4264.json": "cb9bafd5d865854970ab1f8051fd2892",
"assets/assets/golf/27543.json": "4bbb4f993bb38f4aed8ec693e7901760",
"assets/assets/golf/38931.json": "3f5ad0eec2e273254e815bee53010763",
"assets/assets/golf/31356.json": "dc8362b3ee78eefbf03951f2a13892d6",
"assets/assets/golf/25944.json": "15bc72fda7a37cb4fe8b0db31a3ac252",
"assets/assets/golf/20245.json": "08d7e8ff11a675df4af46a218ae7da3f",
"assets/assets/golf/18797.json": "ca5012234870e1d4de054b169141ec34",
"assets/assets/golf/25840.json": "7368558f48ce6c21ef62ea5c1b97069d",
"assets/assets/json/club.json": "7c2dfa11a89c98c181bcd63123294cdb",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
