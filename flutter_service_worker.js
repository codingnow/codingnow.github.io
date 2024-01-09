'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "524f0a7fb343abba82baa325896add26",
"index.html": "7eff8d9e7182e1e5964e29a952e59e1b",
"/": "7eff8d9e7182e1e5964e29a952e59e1b",
"main.dart.js": "8a286e3d82e49b5b350203a6f950cffe",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ac302801783ec162e5442aff2eb591d5",
".git/config": "ec0c4f607ffb5002e055c8bfb916a522",
".git/objects/95/c4ca21870e956f9a98d42baa47acd502908bf4": "4eb4bbb712ccb2c96d9f57dda18bb3d8",
".git/objects/59/3699420840bde4863814bcb5f9408f55abd518": "0eca8afcbf378a8f356b6f653c73c0cd",
".git/objects/3b/f0f1e3ff1c8e6132ba292de3fdeee6a9b80762": "0b8688b0020aac7eb62f2895bb71e72b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3d/302b78ff05ec9a9d3c6ec56fb270f6d0db2a77": "ebb2821184ee94b7612c6d6a706e8cc9",
".git/objects/58/4c69c2df1a13b07a9f02978ae7853f4740c254": "a4e15eb13fe904f04f3b10a0416359e8",
".git/objects/67/44a28081c41ce2b256097ac5e56840227a332c": "fb58f858357a17341ca66a3030061f18",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/2ab6c023a022180e3e399c424292c42eff3a76": "735fcc84a3befa19a2bee3802648affa",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/df/464186f24ac1dd16764f718f8e459f331347fa": "be3d1ce0b231c012a314e6d81aff1d98",
".git/objects/a2/f2aa870e3b89f811e177787a6378ed8f8c0e16": "268f934ac435209cb05b06e2be0a3698",
".git/objects/a5/cb28004f5f71770ca2a769f3de97fd04d7bd84": "73351a9560e11a78e5524b12dc45c594",
".git/objects/d1/1200c53def8a38559f71638a425c5730c42c91": "7c737ea2d4211c70ec8d7de7c5020d71",
".git/objects/d6/c9f7145c688aa0421f2e6fbb502512fd44bbc1": "725e5057986a2c75b2738ca05a04d0b7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/d136e6c428dfc84987bf9b92dcc97af77002f6": "17fed18058de3356d16b2c52d7c73a9f",
".git/objects/e5/5025bd678ab65dba24ba2b949a03f8f2c5215e": "7d29130892e7209edb4bcd7dcbbbb4f8",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/83ed6a5a8200976a53c9251105eeacf928fc84": "91d2f9c0ac276f4939a9eb3ed7c08653",
".git/objects/c0/19e47556f2cd9175baff650e549b8d438516d9": "72be3c15ac09c2cf994ba61db8274977",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fb/f5eaa8fda7e18f88407fb34307d0372a0b2245": "5361c5819b4936ba049567e6b0c2127c",
".git/objects/ed/af587388d7a7118670fcd0a9f1e71cda27b5f8": "ef6ac39d73a3f0435b5e22b41f975886",
".git/objects/c1/e06c1c853c7532c7f6e494751f6c77bbfa3a38": "16a0574413a197ba9f99dececdc6c166",
".git/objects/27/4bb3da3a237163454631369e64eca1795b5801": "2a6f126b437e65f080d527175b277b04",
".git/objects/4b/6e6221dc85a42126e304529042773f74415e79": "cf028433b09521a8e251cedc830b3df4",
".git/objects/7d/329272aa16675b38a65d903ed5fd6ac2544719": "df8206e370446ad9a9c5eb21766a060b",
".git/objects/45/d53fcea642ba0afa9161b2fd04fa2fa14257f4": "917561d5c843b2067222416fc8a8a092",
".git/objects/73/3c2af277c19eb6886b39e4daa2664c42d94b6f": "99dce4d564431375899769fbeed896fa",
".git/objects/1a/44b6f16a3821d4c9ddef092f55f13454fe31e9": "b8459737ad10cb2d3fe6875a03fd001f",
".git/objects/28/52f9f8595f6d0620222b66c42c3c37d6731479": "0a0183b125976c3ee4baa1d64291187e",
".git/objects/28/c01822013eea2ef5a8e7d25a94325570865329": "8282d51c763cdf0b0df9b574938e03b7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/59783a35b4f9adb8ce04946de4c1c42650b7e1": "9932626358e2e4f6e7e633aaf35de8d0",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/26/95debb88e9bb56e8fa2a926baa34912ce8b780": "8f6335790c62b4892fafccc154a1c99f",
".git/objects/81/a60da5b47b130dbdc984bcb89e2f13a3208ab1": "10b171b4da5eff108d07ee9bcab42ee4",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/72/e9e0a2fcf5aa71df52a3c53b7b346bbbe4cd11": "2108ed091bda79ae6c215ff8cd14941f",
".git/objects/44/3ab184f7fef15af8830beff29fc46b85660a2d": "78adb7d42f11f8c492713a29d7dfcd5b",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/1099ad046f7f8dc49340fdb3133d31b4f8f02d": "85bcc41cba20e5d5203ebe866765b7de",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/ded12749b27ce363fbe33ba018ce3e46cde2e0": "317300c6223379801e5026617270cbca",
".git/objects/9a/0632bf1f4d81a796c5c056352d57ea3c9ecc66": "45bc64b7eb367b0cbfc0ca449480bca4",
".git/objects/62/e824512faff7ce3b867837f9e08cbff7482c8c": "3467918837a23fcf8633dac2e8a6f481",
".git/objects/98/d9f6f5dc2e3e0e0a9fde3b654c05053b09cb6d": "120939eff844a202dc7a96707c48a8c4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/01/87555f3cadb3750698d08f6af1bcf0f25e4a1c": "3b8fe580cc6f976477a62d51bb9f3296",
".git/objects/63/cbb0845a959600d6ff810f720e37c531135ad7": "dcebc809954147f9a4d1a9eea3d97498",
".git/objects/0a/2a23707ce4a23e0c4f91e0b98a9bfe9147fce4": "8ec6510fc6f3ef0d8e1707f96d760dd0",
".git/objects/64/f6f7c30c9b521be329e245b1079952acf5bde7": "dd4bcd7a4018282cdcc0c6d5a9e6410b",
".git/objects/d3/7b3b6e860599cb36e40425db5f0cc2acb456d6": "23f46967451ce2db0e1ddb5241e3bd39",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/4482d6c1d8edcad2d1264b8b81047c5402a149": "d85b7cf7bf33c140ec1bcba35a708494",
".git/objects/ba/e330f19a4a64f13be53003fca1304c285584c7": "3f7ffd920a55ed2c7f8affb779b0f53d",
".git/objects/a0/74024399273fd4fda284d9fb9bf4d15744f3a8": "527832ce76c4bbac9b174710ad50a758",
".git/objects/b1/96fe719c3d732150bb8fb6d8a7637187a145ee": "f74e789a500400910ba9945f4e6ed19f",
".git/objects/b6/308cc15c474f51ae5d8f34ff4ad8da1794f717": "b92fbf23fd587c8246f0d6123d62baa9",
".git/objects/d5/35e1a0ac57363cdfa1c1a9d92ca9eb6db4b3f9": "7588dee53f0f1d60aa21577049002587",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/af/f07cca49b2f5bc0a486973c467d828ba6c8038": "c7d43c448898c0a1ccaaf70c30111ee6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/40686428a4709f7c11c4a3019522be20abdc85": "cee7d61a4ca3209ac911de636a22434b",
".git/objects/db/ebf11ebea2fecddbb52a2edc0e0831ff5cff1e": "70d7e9abbf20a665e6eec802da9ea49b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/de0e0e5e94a469e74ad7c652e70cef7178f653": "fab40e887824edefd770a6ce5ce19a83",
".git/objects/c3/95fb7f9c1be1a58ccfc20186084f4b647ddd50": "dc46972062ff1080b92f9b274601d283",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/fa/1c3bd12e56b391256001fcc578ac42e3d954d9": "ddc0b1c890f9c2e6d31ecca6e5e95975",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/e7/163ac3f3771444d0bb4ba9a6a9ba96383c650d": "64587ef43420fe1c135dc66ba3646403",
".git/objects/e7/434715bee1c8f5b3f167c4615dca9c394b557d": "e4d16ce902caec276256a9733dc44e5a",
".git/objects/cb/205e964a0fde8fdb0d4518ebb5ae0af036b998": "4b6c8f850347c8fe48e0ac2780759128",
".git/objects/f8/802d8f677d99b24d442d3ee248e559c414d240": "0f025536760158ae1855be66a9419a04",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/650100b9daacc6997f3983d7566fd37f446e94": "630921e83105e288a82ababd4c9d0c87",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/b17df91d058dea88675e925793136cc46299fc": "739268db379366a7da35edde8d06f3be",
".git/objects/83/2117044e08ac85752dcb255883c1dae56e465e": "5bf382c9c93dbe734b6ea0bb3643d3f5",
".git/objects/1b/dca237824f59912b1f0c84291aefd32dcc5441": "2757d375e2278e7bbc26a2e2244909a5",
".git/objects/77/ec70e67c15ab532280c4a028ddf491992847a9": "02e446b944de547d7a1c8294ab69befa",
".git/objects/1e/3e0623475dc938f451100ad39870756d3170d7": "215473c674670581b3d72688863ac06a",
".git/objects/15/35f48f0566e1ff4f0b8ff2bc0b33c006648af6": "1169ad205fb439b93e2d69c7bfdd9d0c",
".git/objects/1d/285e9aa2bf150c58930c191d04313ce1ab6aab": "1b9690bbfdbec5d1b30facd012dc3345",
".git/objects/1d/bd5dc2837038b3e0df0cf3d9d6b265dfe04475": "78cec55d0822e4039d85164715c15595",
".git/objects/71/2db896bf1dd3f2ee5199171d8a18dbb9ed8d51": "c7b39ae0d4064c932304c50baf47e149",
".git/objects/49/b89e11ff6d09a6b87e9497bb9981e526299ca9": "82fce311af1cc6d55be051fd33a32e0e",
".git/objects/14/7d18d8e2b19e178c163d7bc345a36dd65145f4": "120abf337039d60606113f5a88313ab9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "503485d2cad7bb219a5210fa20249a5a",
".git/logs/refs/heads/main": "503485d2cad7bb219a5210fa20249a5a",
".git/logs/refs/remotes/origin/main": "3b0429e346ca0ebaa20f2bbd8d277be2",
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
".git/refs/heads/main": "4cd3ffca6cbe6fa226534f86e788d76f",
".git/refs/remotes/origin/main": "4cd3ffca6cbe6fa226534f86e788d76f",
".git/index": "5bc226b3672271059fe6fb57ffa2076b",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
"assets/AssetManifest.json": "96d47c011a5a5aa71f9631b60049eb4e",
"assets/NOTICES": "a8fb097d6a460ec23be0d1bb959f76b5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "a53491ba33870e68dce7c820b0867cda",
"assets/fonts/MaterialIcons-Regular.otf": "5ef7867d3b71f652613cbb379d57619c",
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
