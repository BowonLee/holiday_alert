'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aa627ac1431d173788f24d7460a5f840",
"index.html": "90d8f09c69343f3fafe140419707da9c",
"/": "90d8f09c69343f3fafe140419707da9c",
"main.dart.js": "2b84057070ef449be47fab4dcfbced35",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"json/holidays.json": "8afb7295484fb813a6f498338bffe43f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a4f1ff3c98915a1fd10e673ec0f80da6",
".git/REBASE_HEAD": "6757d2c9a150f55c88d865c8238666e0",
".git/ORIG_HEAD": "6757d2c9a150f55c88d865c8238666e0",
".git/config": "7799d1bbafd11b5ff478304cdc3f43b9",
".git/objects/59/4cd09b4137579a6ec3fbb221f66bff651bca7c": "b41a4fc09249ef164333c4433cf280e2",
".git/objects/3b/f18b0a63632eeefa3e0b8f59f8aff7d1babe32": "fa511cc2bda4f9e72f66c964bfec55b2",
".git/objects/03/1d4e670c92bcd2d41630d485c2189c66730f86": "2003d11be7be91337ab6c0a4a1cefd22",
".git/objects/03/b9e1cc8e3e76acab94a64a2f000cf42acffbc2": "763b11be93dd17b760be18905f94304a",
".git/objects/04/a95f6609b13b1051f647d4c2814a5b88846956": "2e881db692343fb929dd3b0429574576",
".git/objects/6a/286ebcc33bc8a9207a0c3a097e46006f226137": "0a912a0f8f4cb1b34df5810bec5ede19",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/51/ae0518e47d444ae048ef4b970e7110f493bafd": "11bf33236c3b6b70465282a34e7dec86",
".git/objects/34/56c0b3bd1f8728bdbc62705d7cf6e5a4c4b302": "ec3f5f9d0aa875cde35aaa4e5c1dcdb1",
".git/objects/5a/9f7ea83baf78e77b425914ae7586e13ef61451": "604cf620f17cbb1908d1a03dbff734ea",
".git/objects/9d/572eb5cce89fbe73a0b32feb4f318bcf72a5a5": "fdfe03edb743129f30ffb71d2f476200",
".git/objects/ac/3749697a759dc592ed54a70a7dfed6e6bc1bc6": "105cde12082717c22728ccc4d7c8a8c5",
".git/objects/bd/896cc95d61696fcc2ed63a5f76da290b096f12": "6e2a953c926fc43c2af932754c943687",
".git/objects/d6/af7b5ca1080a669d34dda524f4f89c6adeaa90": "d8eb9d677118e635f5a66403d138e1f4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/030a741ecd1280054382ee94e360f6023a9609": "fc7d24ee7c26696b3ac60b31ac488128",
".git/objects/bc/35119ddc4f0af562e258ab29981c29d47e2112": "b6e0328a610dcfd70d62170730407591",
".git/objects/bc/721f31e377cc8ff818fbd5ecf4c825949f7325": "73a206028ddbfe74d5803e0dd4696040",
".git/objects/d8/03ded915ce62643519f8685d20ab9d26876d88": "dfb6d9a36d85f49d804c890b93cb6e42",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c27393a4f5f09b4f577178dfbb5ff3532be430": "1155961b6df029661e657e9df5888fe9",
".git/objects/fc/b923462a461afba5e2b2fcfbe5112efec37341": "70fbbc59b5652b1101fdc52479525163",
".git/objects/e3/13c1287373ac24ec59ec454b5b0550b88fd660": "6258e2f60e87ca81f2d3f46594338c87",
".git/objects/fe/c3cef20fc50e7febb1a506dd412516f10c990b": "c808d89361c773d9224db10678760c5f",
".git/objects/fe/58189f3117fb53ede09582ddf2e391eb035f65": "0d2cc5abe2d56bdcd36f869243c12542",
".git/objects/fb/864132b4316721d5117ad1d305b815c25f3204": "2f84ad4e168c81d2fadd2579ca2e4923",
".git/objects/27/87b851e091ca9287185aebb6abc1d60d5237b6": "46442c0b490de43e9c03b1252c4b8122",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/86886a37e338bbc3d8f82e832b1dae2e384640": "888640ceada36936ae13acda8eaff27e",
".git/objects/89/b03750a7529bbb2f83442db1e74500a3b62395": "15d453a559010450eda065c96e290fae",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/14408d8fd48e5e07136e9af48fbbde8c7efa7c": "d71729d19fda1feefa949c3165c6d439",
".git/objects/43/d15e55628f07d2f9ccb329e909eee7cf83bb96": "6fd964764cab3d65e430643fb59d0971",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/cc7803ac99f0aa6bdfe9ac9295f970dfefe6d0": "ad18fd1e30f07e7a19c3fc229a4971d9",
".git/objects/00/44d7175a34d2931da3539c22b25f3fdcce2f0d": "f3cc3a63323b6e91a2897bc357f8571d",
".git/objects/6e/28b738d55f7de565ee674cc3a4bb98fbd99c5a": "769fd0f1ac62853c2f8d1cd96b50c4c2",
".git/objects/09/470cb7529c3463a25fcabc321acc95008b98cf": "79b8c66cb1416d872ae820b4d6e3ebc5",
".git/objects/09/1c42f078397e12bdfdb9a151108aeee00cd34f": "ecbbc41ce6566389a0224efe1a482d9e",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/0a/e2a28b808f5c3832d9df3e1f0f2358ae750abc": "850716744e6d6ec506dd037461e714e3",
".git/objects/b8/e01777d3f7eaf6d90f4e1c707965e3d71af533": "c37495bb945b2950d701cecd48dbd687",
".git/objects/d5/9359bccd14e4abc2b16dde5d145c2cdd96c737": "8717f4a5ba4455bdb9ecb403bb203198",
".git/objects/d5/7f01f1a729275c02df664d29462350c4fbc782": "a78a3a0fba66031690e2f38663dfa2bd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/1f163c78be9abfcb095befc7fdff35ec3713a6": "59cb593db9e04aa39a3274f9d5d5941e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/217e45a2da841fe6267f538a8c9a14732261a4": "e25df38dd6b473f9b4023aceb3c7d894",
".git/objects/ea/66d5e418e3f32ebd732d441c171f45724fc3f1": "d990f91008f16a6ead08be15317ad287",
".git/objects/e1/7a0496217a4460a34f01c2e8b201f5cf647120": "f9d1492e4834ed373e2cc2e109788ab6",
".git/objects/e6/cdc3955b0e8faa061249e03eb7b1597372fbeb": "a58d7ac302dead9b40ddbdf953153c21",
".git/objects/e6/ce05fd9e4379502671a8c1ad434c83761052b8": "dffccf4d50969fca0a8fdd87d4c1c6e9",
".git/objects/e6/253ccb007394d3b3d95ed1657fa4d0469066a2": "2c450b64f55d72a6e1fee461cdb60209",
".git/objects/cb/e7227a5d0b140c0b45e1521fe897fea4cbf9f8": "13f055460634d9392586c0758aa95350",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/8e440e2bd1c77713171234cf1558b3c8579401": "ec22f7d74b41b9b511f824a63ad22305",
".git/objects/79/c4622297aa3e62538e3062d86cad18b44070b5": "48dfbf62f5dd9fb934234fdd1cba32c5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/fd536201a0d405922775ba1cd7244f7666f6dd": "55a8dc23818174be91d391de686e89f6",
".git/objects/76/e841c8b4af796827a7be977acefd5265f923de": "74b6a1c848bb69e4a5cd0f9c288e6db2",
".git/objects/1c/cda5b24713c79bf8d95a1c089c6ddf0e105283": "9ed4cda5f4140425a300c41bb9c605e7",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "d217ec01a88975fdc9acfeff0d5daadb",
".git/logs/refs/heads/main": "89ad4e61f193a98c48e3938acff82c00",
".git/logs/refs/remotes/holiday_alert/main": "31a693268ce309d753b758e60befc227",
".git/refs/heads/main": "aaf2a8981c67de9651e1aab6393140d0",
".git/refs/remotes/holiday_alert/main": "aaf2a8981c67de9651e1aab6393140d0",
".git/index": "27ec1ca07080e4e472a05048e424b266",
".git/COMMIT_EDITMSG": "0430bfd16626150e9f76eb4e01ff91c4",
".git/FETCH_HEAD": "af129f7099a0c36adbf808107da21398",
".git/sourcetreeconfig": "19c884345fccdeae68977acc629f2944",
"assets/AssetManifest.json": "6093fd2fca46abc58e7c6360d76aa4bf",
"assets/NOTICES": "68494daf0a14b19a40bfeec9dcc53f04",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/img/run_rabbit.png": "b26955d850b85fbb0dda692c2f04ce59",
"assets/assets/img/summer_pool.gif": "b305a8aad3aa079321862f7f3f9d60d5",
"assets/assets/img/autumn_dot.gif": "c5fb8097a2235a9e9fed6a3b94879144",
"assets/assets/img/winter_snow.gif": "9358c03ef17dacad1712afe26d4626fd",
"assets/assets/img/holiday.png": "97080bd00d25ea6cfe32430cd44b84bc",
"assets/assets/img/spring.gif": "7395b7ae6f14f04ed138c3bb3e5c4655",
"assets/assets/json/holidays.json": "d01341eb399a21892cf1ece62fc97934",
"assets/assets/icon/snowboard.png": "6437a83312788f420e9b959561fbbef4",
"assets/assets/icon/leaf-fall.png": "90eb4730d981c845c5fdd3d06a3a3de9",
"assets/assets/icon/surfing.png": "7c65ec39ba9352e87159d6159fccd623",
"assets/assets/icon/runner.png": "47c430fa7eda8cb710766d1cabe32a74",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
