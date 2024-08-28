'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "62f10972406790f25ee2000c54116f6d",
"version.json": "aa627ac1431d173788f24d7460a5f840",
"index.html": "848537f635d78b400ba279bc898b707a",
"/": "848537f635d78b400ba279bc898b707a",
"main.dart.js": "5f1f218613c31bcbc6b71e40a23d635d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"json/holidays.json": "8afb7295484fb813a6f498338bffe43f",
"main.dart.mjs": "9948e77025293c59045a6f24aac896ee",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a4f1ff3c98915a1fd10e673ec0f80da6",
"main.dart.wasm": "695170e549402e9272689e9cf871ec15",
".git/ORIG_HEAD": "0705aadfe4d1874b8758646eb1e19288",
".git/config": "0464674ac32291e435f88ccdefa41c8a",
".git/objects/0d/cc7453d3610b1c3844db8f26db6d974404e328": "b8773965b4fff4aa3cc84c5fb06be30f",
".git/objects/95/becb1fd6567d510888c2fc1ebd55e033bd300b": "3ca7568cbe1be92e4d5d5beb0084b1c0",
".git/objects/0c/1143e1d63d82bc64583b68f14715565d04cf30": "0e2fdac013e0db2b912d9a922305cf11",
".git/objects/3e/d74e3cecc313ed897d22147de07e1543eafeac": "5602ac3fad036b12ce175c51ab8644d9",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/3b/f18b0a63632eeefa3e0b8f59f8aff7d1babe32": "fa511cc2bda4f9e72f66c964bfec55b2",
".git/objects/03/1d4e670c92bcd2d41630d485c2189c66730f86": "2003d11be7be91337ab6c0a4a1cefd22",
".git/objects/9b/f8e2cbfb516c674cc097d0632cc624782e7a28": "ca045c8ffcc99f073fa62ccdd2c2d78a",
".git/objects/9b/6f11a0a7245ba67bd3c469e3812840546c8de1": "00c00c96eecc347f7d41170e150075a8",
".git/objects/04/a95f6609b13b1051f647d4c2814a5b88846956": "2e881db692343fb929dd3b0429574576",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/51/ae0518e47d444ae048ef4b970e7110f493bafd": "11bf33236c3b6b70465282a34e7dec86",
".git/objects/67/d1329322b6dac78e36b280d749904103c9c1f7": "a8b68740152c9c41c15707d46afeaf16",
".git/objects/60/0a2466233a9f1b535b2374a0f6e8949f913087": "65e09c17aa75fae587bc3d8c5687b79d",
".git/objects/34/56c0b3bd1f8728bdbc62705d7cf6e5a4c4b302": "ec3f5f9d0aa875cde35aaa4e5c1dcdb1",
".git/objects/5a/9f7ea83baf78e77b425914ae7586e13ef61451": "604cf620f17cbb1908d1a03dbff734ea",
".git/objects/9d/572eb5cce89fbe73a0b32feb4f318bcf72a5a5": "fdfe03edb743129f30ffb71d2f476200",
".git/objects/9c/63d6b53ec10976abbfb96dc92793801d30de57": "459e93fa268f0cc63c6a2c494ea004a0",
".git/objects/9c/92923682669651b5d6621de1fee2e4dd877fec": "a0f5a7737afe4f667a7113d38fb64245",
".git/objects/a3/60dca42cb56437576aa01dfd898b80acae3b5a": "838a603a1d1a067e1789f259abd1d2a2",
".git/objects/ac/3749697a759dc592ed54a70a7dfed6e6bc1bc6": "105cde12082717c22728ccc4d7c8a8c5",
".git/objects/ac/9e7d12c0a3b84e9c04325de7c71898204f17e8": "41f8773df4d49bfa68fc92d355f6c1d6",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b4/d769df9b4b97def72bb4e7ecd1100a17632daa": "9914c5863d45f2f976f0fc441b6088d8",
".git/objects/d1/907b54531d1637027455f8b5608be342234a1a": "afa3653cad6a71c870bcabde4884c22d",
".git/objects/d6/af7b5ca1080a669d34dda524f4f89c6adeaa90": "d8eb9d677118e635f5a66403d138e1f4",
".git/objects/d6/d004c1e6d90dfcc27f8b741c845c1d3ecd26d1": "5ad368903c53747904177d295b959df5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/030a741ecd1280054382ee94e360f6023a9609": "fc7d24ee7c26696b3ac60b31ac488128",
".git/objects/bc/35119ddc4f0af562e258ab29981c29d47e2112": "b6e0328a610dcfd70d62170730407591",
".git/objects/bc/721f31e377cc8ff818fbd5ecf4c825949f7325": "73a206028ddbfe74d5803e0dd4696040",
".git/objects/d8/03ded915ce62643519f8685d20ab9d26876d88": "dfb6d9a36d85f49d804c890b93cb6e42",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c27393a4f5f09b4f577178dfbb5ff3532be430": "1155961b6df029661e657e9df5888fe9",
".git/objects/c7/53db5cad280e7683bd262c91ca32785270227c": "33b598417d51bbff943206dbd9bcfa25",
".git/objects/c9/63b50de38b247bad088546c65ca7fa8387c6c1": "0660047d5cb8c9fec486e80256321807",
".git/objects/fc/b923462a461afba5e2b2fcfbe5112efec37341": "70fbbc59b5652b1101fdc52479525163",
".git/objects/fd/d6fe05d6ddab66811b7124f7eb5487b738024b": "f0675cf2a2d93191116037fa1f8634df",
".git/objects/fd/266908d425f08b9eb616ac6b29cf9e166dcb83": "d31e65b144fa973eefb776a043a9792e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/9e7f32ddeceb6c84ac95c2ab4c7903965f65b0": "cea72354ce0149eb53f9e73cddc9ee35",
".git/objects/f5/35ff3864463162ad2fb70a30e988d6613ab607": "0acdb506a6ed52ee96e54ce24fe773b4",
".git/objects/e3/13c1287373ac24ec59ec454b5b0550b88fd660": "6258e2f60e87ca81f2d3f46594338c87",
".git/objects/fe/c3cef20fc50e7febb1a506dd412516f10c990b": "c808d89361c773d9224db10678760c5f",
".git/objects/fe/58189f3117fb53ede09582ddf2e391eb035f65": "0d2cc5abe2d56bdcd36f869243c12542",
".git/objects/fb/864132b4316721d5117ad1d305b815c25f3204": "2f84ad4e168c81d2fadd2579ca2e4923",
".git/objects/ed/1510d6e97c2f4f3fdb47211b90c36a4742b411": "256638249c524849039137f0edf3d1da",
".git/objects/27/87b851e091ca9287185aebb6abc1d60d5237b6": "46442c0b490de43e9c03b1252c4b8122",
".git/objects/27/ce16ccf024a00aa650ecf4ad5c6617fbee9cbd": "064ea61ff1a997488fbb9902f98b1241",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/86886a37e338bbc3d8f82e832b1dae2e384640": "888640ceada36936ae13acda8eaff27e",
".git/objects/89/b03750a7529bbb2f83442db1e74500a3b62395": "15d453a559010450eda065c96e290fae",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/14408d8fd48e5e07136e9af48fbbde8c7efa7c": "d71729d19fda1feefa949c3165c6d439",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2f/7cec36ded294f4a10d7dcb3a8a4ed57705399a": "ff3ba8870cac681d5b5fec09e51c5d86",
".git/objects/2f/3fdbe6aef850d60f547dd8bccca7740b6bbbae": "1c5df7ea309bc50d23813cf62c4e8142",
".git/objects/43/d15e55628f07d2f9ccb329e909eee7cf83bb96": "6fd964764cab3d65e430643fb59d0971",
".git/objects/88/c7722dc00b0e5c17eb3204b51b0461054ed11c": "6bba14d7af76dfe5706a5ed3c363b244",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d8923395f538d5753e7b95ab4c4e5640371c93": "a4294d399f112b6029d1b7b8d050808c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/00/2b1a938b76000006f1eef250151ae52e3ee906": "0890980ad512ef8c2d62bc5a1d70128b",
".git/objects/00/ffa5dba437443f71c997adc636ca5a68875da6": "71305e97999140480ec39aa86650f236",
".git/objects/6e/28b738d55f7de565ee674cc3a4bb98fbd99c5a": "769fd0f1ac62853c2f8d1cd96b50c4c2",
".git/objects/09/1c42f078397e12bdfdb9a151108aeee00cd34f": "ecbbc41ce6566389a0224efe1a482d9e",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/3f/c614dda3d95ab18fed65f600a913010fd4bc8a": "8dab4e61380a204d0fafc15b0a06a906",
".git/objects/37/eb2ea57431696c291f0417ad0d9bd116e04a15": "839d48eb687afea14ad3035e6b7b23d2",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/39/9d0075da4bc8ce6dcfd9a9386d94c78906ad2a": "a1e399d0e67b3dbce6e589d0f1a7a0c1",
".git/objects/99/f5cf83bd7d9bcb75fe343599461b2136d0900c": "dda8ed5728b5e55a9c83359ca501df87",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/63/3b626f2abb9c685bb78c79f4d7375c14528eb7": "fd52feb420ce3fe7b4f44ca255a70136",
".git/objects/0f/82a4950ea0626d94b9ad121ec2779b6996e531": "6377bf19d86e35a939af39b8920eaf66",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/d87a98fe916b5ae3cb4e3fffd3ca8a78d0a6d8": "5f86d8c754cf4ddd7dac9741fe9bd0e5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b8/e01777d3f7eaf6d90f4e1c707965e3d71af533": "c37495bb945b2950d701cecd48dbd687",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/16bcc10389b89d373f2c6345fa6fca07224cc8": "3e00ae1802fac7793b4059fd337f8b38",
".git/objects/dd/5f037c0d19137563dc96a7dc804e8d07dec610": "7cfa4f123b3518e5a2f4e435d55bb566",
".git/objects/d5/9359bccd14e4abc2b16dde5d145c2cdd96c737": "8717f4a5ba4455bdb9ecb403bb203198",
".git/objects/d5/7f01f1a729275c02df664d29462350c4fbc782": "a78a3a0fba66031690e2f38663dfa2bd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/f1a13a70963f3fe041de9a586d14d9551d0bbd": "30b4fee51c6bd5d4d571d9fe315a7e37",
".git/objects/b0/de70b8ffa2343b98e293cf94a0b2ebfb3f1fc4": "34dcf203bebbfe4fcd516fb3e79a0123",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/217e45a2da841fe6267f538a8c9a14732261a4": "e25df38dd6b473f9b4023aceb3c7d894",
".git/objects/ea/66d5e418e3f32ebd732d441c171f45724fc3f1": "d990f91008f16a6ead08be15317ad287",
".git/objects/e1/db66fcbd1ed033125c13e4b88823a7aeb1e6bf": "491afcdb7de202528ab3647eef9a10fb",
".git/objects/e1/7a0496217a4460a34f01c2e8b201f5cf647120": "f9d1492e4834ed373e2cc2e109788ab6",
".git/objects/e1/a5c19230c77705fe00a9fd4eeef2be10621d6f": "0f66879278430fa799c96247eb1b33dc",
".git/objects/e6/cdc3955b0e8faa061249e03eb7b1597372fbeb": "a58d7ac302dead9b40ddbdf953153c21",
".git/objects/e6/ce05fd9e4379502671a8c1ad434c83761052b8": "dffccf4d50969fca0a8fdd87d4c1c6e9",
".git/objects/e6/253ccb007394d3b3d95ed1657fa4d0469066a2": "2c450b64f55d72a6e1fee461cdb60209",
".git/objects/f9/bcb4a2e9a0c22c56c3706ec20e83ebe53c1e0d": "bb79c9f52c3791e2a019c80ca5d81180",
".git/objects/ff/1d43debcbc1a22b6ec69754672e75e8476e2d7": "963e86f1e729393a474071e7c4134e96",
".git/objects/c5/1fd7ea79b9385121698d684de1ba3f085cec13": "36acc5e6b32a44e6b924c7ad5c93646f",
".git/objects/cb/e7227a5d0b140c0b45e1521fe897fea4cbf9f8": "13f055460634d9392586c0758aa95350",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/8e440e2bd1c77713171234cf1558b3c8579401": "ec22f7d74b41b9b511f824a63ad22305",
".git/objects/79/c4622297aa3e62538e3062d86cad18b44070b5": "48dfbf62f5dd9fb934234fdd1cba32c5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/6e8edd431646c5fdc933ed43b634bd99f3c523": "ded682aa8911f0de65a81cadc2d4194f",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/83/77ca979ed8385c8430b07a5f80117e6bfeb664": "275030f57bc179ac3ddb19be1d9cee41",
".git/objects/48/e29c2cb878900aafd77480fb1e6d2bfab9c007": "e53705122cb1704a237beb021990ddb0",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/fd536201a0d405922775ba1cd7244f7666f6dd": "55a8dc23818174be91d391de686e89f6",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/e841c8b4af796827a7be977acefd5265f923de": "74b6a1c848bb69e4a5cd0f9c288e6db2",
".git/objects/1c/cda5b24713c79bf8d95a1c089c6ddf0e105283": "9ed4cda5f4140425a300c41bb9c605e7",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/47/7d571c81c5ffb4a4f91b64e63194de11b8280b": "59d6de2bd3f340b437348724637862ff",
".git/objects/8b/66c959449d97f82b81a63bae12cd5f49dda28b": "3a2d73fceb86e1644578af4907c1327c",
".git/objects/14/03cd5ebc0384308f67bd0c94e97adbabfdc2b8": "b1bb2bc034efe379086b3a7e969e7b96",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "20e35c7c7a4b4fbe9406b015ca3bbf6f",
".git/logs/refs/heads/main": "859369da0b63d388d644d39c9cba22ef",
".git/logs/refs/remotes/holiday_alert.git/main": "666fc07a21ec4ab2013a2e6d44d27517",
".git/logs/refs/stash": "37d71a2f51522ceea3c16f8bf1ad8ced",
".git/refs/heads/main": "094a8ff1ea04e34297413e9ef9319044",
".git/refs/remotes/holiday_alert.git/main": "094a8ff1ea04e34297413e9ef9319044",
".git/refs/stash": "82a84002dab5878095393b01847f18e3",
".git/index": "a6b4be9479824f485783403fc6bd95d1",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "60b4335e2b3bc7b4be2e84a17ba8e3e2",
".git/FETCH_HEAD": "c9bfa4037c808d10f2c36842b1dccfdd",
".git/sourcetreeconfig": "fcf359fe2631d328aa12a6382534dddd",
"assets/AssetManifest.json": "001f5ac744f82fe1fd28b3aaba07e9dc",
"assets/NOTICES": "dbfa15fd6b122e12ea384b644e6ff606",
"assets/FontManifest.json": "05c0c081a9847e2f8307c798170314ff",
"assets/AssetManifest.bin.json": "c44d6ab572c5e88746fa01c910f853ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "56e975add415a9835f97012d9ea131cf",
"assets/fonts/MaterialIcons-Regular.otf": "de849df1137d4734d6f1dfd79b1daf2e",
"assets/assets/img/run_rabbit.png": "b26955d850b85fbb0dda692c2f04ce59",
"assets/assets/img/summer_pool.gif": "b305a8aad3aa079321862f7f3f9d60d5",
"assets/assets/img/autumn_dot.gif": "c5fb8097a2235a9e9fed6a3b94879144",
"assets/assets/img/winter_snow.gif": "9358c03ef17dacad1712afe26d4626fd",
"assets/assets/img/holiday.png": "97080bd00d25ea6cfe32430cd44b84bc",
"assets/assets/img/spring.gif": "7395b7ae6f14f04ed138c3bb3e5c4655",
"assets/assets/json/holidays.json": "cc69c78d0dbb933940a1b05b665477dc",
"assets/assets/icon/snowboard.png": "6437a83312788f420e9b959561fbbef4",
"assets/assets/icon/leaf-fall.png": "90eb4730d981c845c5fdd3d06a3a3de9",
"assets/assets/icon/surfing.png": "7c65ec39ba9352e87159d6159fccd623",
"assets/assets/icon/runner.png": "47c430fa7eda8cb710766d1cabe32a74",
"assets/assets/fonts/Sunflower-Light.ttf": "a981eff3dba58c344d38a86b762da8b6",
"assets/assets/fonts/Sunflower-Bold.ttf": "ae75ade2d4918e1f7963f4a0da6d375a",
"assets/assets/fonts/Sunflower-Medium.ttf": "c3f66dbbffe93255c43d77a5fc643d0a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
