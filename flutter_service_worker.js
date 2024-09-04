'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f84d2208da1fb7edab82633a820fe444",
"version.json": "524f0a7fb343abba82baa325896add26",
"index.html": "805c77189a3cba8de9d884e14c50a80e",
"/": "805c77189a3cba8de9d884e14c50a80e",
"main.dart.js": "ec30dc9a74938b0f5da4db487841a13a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "73bcfd778fd2e36cb3dc140f2a9fad7e",
".git/config": "e654ffbd342151a4848caf4e8d5451d3",
".git/objects/69/28cd6261564e7cc866f9cd3ceb662f157244fe": "3331470a044225c8b7b68a45230ab654",
".git/objects/3d/d6c36410561fa86c8826b33bfa9435adf4d373": "bff1af62d7b08780a3a33518a343c2e4",
".git/objects/67/37f9b6a52341719f36b41c8fa5ecad93e93144": "ab470a27d032402c6e7326126855dfa4",
".git/objects/b4/d8e74436c72e65a116ae832a143a273cd82ca4": "a7bb499d404535593540c087a147b5b8",
".git/objects/a2/5b427a2527219e58b5765fafc9ef69359a73bb": "50ed232bd1d3308a91ec99eb06b2e91d",
".git/objects/c7/04b4350237334fe6cc929a8623292626a5c9ce": "0eb2dc23abed24191112e90e7dffa2ff",
".git/objects/e4/910d78294e033f9bdd2297ce234bdf70c5933c": "db3b5abe5c3eb8d30bc434439e433dcf",
".git/objects/ed/784ce304484f7eee8185a21d149f7b1ab48e4e": "eab87fa8137966d5848deabe0a199512",
".git/objects/ed/23583583ec7a2792d80bf4d497bda315d3de43": "89b99f5638751bedc319e2a06ea4aa79",
".git/objects/pack/pack-d07881ebbe1dcfb81db1a6294d828e47ba66d98d.pack": "0cd18f2f71161cb5227c43c5ea7f89c0",
".git/objects/pack/pack-d07881ebbe1dcfb81db1a6294d828e47ba66d98d.idx": "6683531b5c6841349b3bc9b33cf898ee",
".git/objects/73/f70ce65d064433c518333fc676390f8476000d": "559ece3d95bbb0823bdcce731dc9fed5",
".git/objects/8f/cacd0c29129dfc8138260b6dceb37f6df0a45f": "e37707d883e771e20e09312437f94fa5",
".git/objects/75/4775033e029782b9acbef9f40706bdbe4f68e4": "68fe69eb48a600453c557ab07c0c53bf",
".git/objects/65/fb2ddf58795720be27563ead581677bff6f76a": "b4d55f19be1072f6419ebc4bd5e93b67",
".git/objects/3a/6ffd04c0b5f4f52ccae5c7d8ae6415fb25dcfb": "0b925e6eeee2279888f5147c4efdc52e",
".git/objects/6d/d4c843860adffca8a6ac1ff75ccac37c0ae278": "70a0cb2f2cff79592f9d60e1b9c006d7",
".git/objects/63/4186dd94048b0df2494691d97b31669b10ffe5": "206f2fc04bc6329fcded469bedffb1cf",
".git/objects/63/bbcdc2d9f3e3c0cc91cf73749af9ab4dfb83ea": "2fae4b62d0a762e4cd0f0bd067adbeca",
".git/objects/d3/d87a98fe916b5ae3cb4e3fffd3ca8a78d0a6d8": "5f86d8c754cf4ddd7dac9741fe9bd0e5",
".git/objects/a8/8a554794f87817aa8762c094e9feb65a8576a6": "aafb895c9639827b97d964ef30cdf56d",
".git/objects/2d/889b65978b04080d6dcc3f81f95c5442f18d6d": "cf0afa6c7e659b7fd3d41a5fcf8dc884",
".git/objects/48/aee9b52a47d396f7beec4caccbd6428ec34170": "2fb84cbd7f4922211e3001bca7a74012",
".git/objects/1e/c8621a91281359e4f76643f5328ea6db4efb9c": "765b0759c7144714dfd8abcdfb3f57a7",
".git/objects/1c/cecfed2440e6ae4f9b48c163e378b98f6a56d5": "bbd00bdb18fe02cab240594f51802ff3",
".git/objects/47/44f5e4d9bdac8e3bff2e5089bc53b3a9ed39d0": "93bb02e2f6bcb50d65ea9e0d8b937eec",
".git/objects/14/8653c28a6f0970f97e3df670edfff00b6c92c0": "d69d0a7093464c785ac2c006b989e021",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5fdb281dcbccfe5bd16793e6c713a4de",
".git/logs/refs/heads/main": "5fdb281dcbccfe5bd16793e6c713a4de",
".git/logs/refs/remotes/origin/HEAD": "54a8c659e071d5ebcfbef2206aba0c28",
".git/logs/refs/remotes/origin/main": "83a0a00f5a8657830b12fd655cfd2959",
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
".git/refs/heads/main": "09ed44a252111b1aa5df929adb6e9c2e",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "09ed44a252111b1aa5df929adb6e9c2e",
".git/index": "daa201e22253ecef8fba3f08149516a7",
".git/packed-refs": "44bd024d89a37887e1f11421a12b0227",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "63d7e3b21fcc39e1ef0fcd84b71a30d0",
".git/sourcetreeconfig": "550a2d75cfc89bad964cd3f84a6a5d22",
"assets/AssetManifest.json": "04a946c1d584708a3ffac8c5297250be",
"assets/NOTICES": "4c16254b115186ac0bc3b4907cdc08b5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "9fa01aa8d7e1419ea38680c14068dde4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "daf7c9a27ce6e0721b2ff54e51e2f5bd",
"assets/fonts/MaterialIcons-Regular.otf": "fd91eceaef22ea6108f5313f298501bb",
"assets/assets/images/wtr.png": "0c87e15a8f31a50ee286b9ce19958d88",
"assets/assets/images/golf_hole_2.png": "acad6171a8d5c4866de43ac090647301",
"assets/assets/images/golf_hole.png": "e11b7a4703777b27a9fb39d9a17822b1",
"assets/assets/images/tbox.png": "0d765dc19d088200adc9e9d3753e2827",
"assets/assets/images/bnk.png": "a5fd0508e34869b9aa106ef9e037250a",
"assets/assets/json/club.json": "d746fd8588cf9f2537119db109466098",
"assets/assets/json/club_all.json": "fb84dda3db3e6a3ae467743704fec700",
"assets/assets/b_data/58.dat": "d97044fa148a294abedec127a30384e6",
"assets/assets/b_data/64.dat": "dbebc2c946f76c0554a29831b38bbe48",
"assets/assets/b_data/70.dat": "5074b5d9d61bcd20ed715bc0e64e73fe",
"assets/assets/b_data/71.dat": "a63d9ab6f83cafe5ba6694ece2d9d429",
"assets/assets/b_data/65.dat": "751c801a629dd1cf0c34089b5403a54c",
"assets/assets/b_data/59.dat": "2f01e41e1b4365ffd8667be5c50a6eca",
"assets/assets/b_data/9.dat": "f4a1b49df21a0ebe91775699b3716848",
"assets/assets/b_data/73.dat": "2ce5112b3efb4f7f363698b645e9d2f2",
"assets/assets/b_data/67.dat": "4fca9a59ec998f0adc71b9e7efc9db37",
"assets/assets/b_data/98.dat": "78021f41800b292507bcc1642396376f",
"assets/assets/b_data/99.dat": "266422a12580ac6f9516224e05a093cd",
"assets/assets/b_data/66.dat": "b2cb6b8c9f8e8aadc1ac583bd2467d7c",
"assets/assets/b_data/72.dat": "59947697764690787e50598a7f380b6f",
"assets/assets/b_data/8.dat": "6333637875ff791e0882091ff1fdf53b",
"assets/assets/b_data/76.dat": "b0276c7693351075ef56e6ec69773f8c",
"assets/assets/b_data/62.dat": "9863f5196508183e9cdd7f26773263af",
"assets/assets/b_data/89.dat": "a2800e7755e460915354572cd20bd17d",
"assets/assets/b_data/88.dat": "d8e8bda32f53ace6d0b9cc9e1360acf4",
"assets/assets/b_data/63.dat": "d24a5f7cec58bdc8fe8168d293ee3965",
"assets/assets/b_data/77.dat": "c4aa25d31da6890f39d1fe854cbe5af9",
"assets/assets/b_data/61.dat": "e5c9a0931825e24b8f7d940592016f9a",
"assets/assets/b_data/75.dat": "7253796469e8b0c7a3aaa868d2df8da0",
"assets/assets/b_data/49.dat": "a9d1d11037220aafd000c8ee4d8e652d",
"assets/assets/b_data/48.dat": "7d6e5f3d5a0eff9d8cb7891575b4998b",
"assets/assets/b_data/74.dat": "9b282192c17ef20c8e712e11f6b7d131",
"assets/assets/b_data/60.dat": "664781208f1b180e476e071e8388240e",
"assets/assets/b_data/13.dat": "d7c531a67ac2d6ad72acddb307ecb816",
"assets/assets/b_data/106.dat": "81e7695c2423d31b8a51884d6ad4a780",
"assets/assets/b_data/112.dat": "103b6182a6dc41a21a092cedcb7795f7",
"assets/assets/b_data/113.dat": "10935643aab8da3cea1f5f6a9d603b11",
"assets/assets/b_data/107.dat": "470f91c27033dde3514fb317f10a1058",
"assets/assets/b_data/12.dat": "a62881b7eca9ffab8cdb6bbe215e12c5",
"assets/assets/b_data/38.dat": "411c77c207bf05bc85253505988a8cc7",
"assets/assets/b_data/10.dat": "4a588366b1c373e933b84007c8ba34c6",
"assets/assets/b_data/111.dat": "1928c6bbda1d3fdf92edc1a97e9b4a05",
"assets/assets/b_data/105.dat": "3eda151b626a649150fcf02e9503a60f",
"assets/assets/b_data/104.dat": "0ae092575021f60e4cd9ba51daac419f",
"assets/assets/b_data/110.dat": "37c78b12673bbc5a4e8fb1a178c59fe0",
"assets/assets/b_data/11.dat": "76f83b8f8082e6fc34d92486d3705b01",
"assets/assets/b_data/39.dat": "2063f01e4d9057c9a818d83bee6b3c0e",
"assets/assets/b_data/15.dat": "35f8222e7630a7dfda62d1b6fd7ca830",
"assets/assets/b_data/29.dat": "e65628248c3374fb32d2d721e9054e23",
"assets/assets/b_data/128.dat": "a4912fafd693837d4afc3e3ed71c6765",
"assets/assets/b_data/114.dat": "61ca7bf6ff8e0b32c05193539f2139b7",
"assets/assets/b_data/100.dat": "98af206d0e7188a8013a18571d3f6364",
"assets/assets/b_data/101.dat": "a5ba94799c12f84faafa973dd5f9119f",
"assets/assets/b_data/115.dat": "5a9aad3562aa0c49868499b30b147285",
"assets/assets/b_data/28.dat": "19586ea144d42041300a0584549cbf56",
"assets/assets/b_data/14.dat": "e877c46dfcc598b8b9317af0fd15fc4d",
"assets/assets/b_data/16.dat": "9a301408e5dee510e7368a0fdf65a068",
"assets/assets/b_data/103.dat": "9e66e7d612ece9a7a464e5d778b4e810",
"assets/assets/b_data/117.dat": "3c7f28ca1fbebc41b2c62dd123565ae1",
"assets/assets/b_data/116.dat": "ff67823aa939f8064778c0f492daeebb",
"assets/assets/b_data/102.dat": "b867174c468c890ef534682df2f81b5a",
"assets/assets/b_data/17.dat": "038cbf41e759ddb8f583ac1e53b2fb76",
"assets/assets/b_data/26.dat": "a97c066379c5179459df1712fa983f2a",
"assets/assets/b_data/32.dat": "5c1fb9a0bfdcd2928b1d548984f8706b",
"assets/assets/b_data/127.dat": "a482f88619bbd75e5a9342e14d0b1293",
"assets/assets/b_data/126.dat": "d166c682e9dd7bdfefdbe95d30408b3f",
"assets/assets/b_data/33.dat": "ce7759353caa39f2c5b2901a479a01b6",
"assets/assets/b_data/27.dat": "d8821f8caae9ee70efb450a9bdc8cbb6",
"assets/assets/b_data/19.dat": "7f1b65dc97ce3728cc95958150b42abb",
"assets/assets/b_data/31.dat": "012920d187b16fc53811820cc914f38b",
"assets/assets/b_data/25.dat": "01407bf40b173caf43c3aa8fca003e93",
"assets/assets/b_data/124.dat": "6d9568834141603353fdd1c3296addd8",
"assets/assets/b_data/118.dat": "166a699443d18c8f56bda39c8fcad345",
"assets/assets/b_data/119.dat": "80c14a0cfabd94c1ba2feeb1729c533f",
"assets/assets/b_data/125.dat": "1cd558f513903a4505e8920d6c3f2e18",
"assets/assets/b_data/24.dat": "45ed2372abc121b3027054391cf10d05",
"assets/assets/b_data/30.dat": "c5a1b586abb45c17436c6a4665e5d758",
"assets/assets/b_data/18.dat": "7251312078b2bb238cff058ffa407f70",
"assets/assets/b_data/34.dat": "868ab3b9f450684ce2878cf87c8cb2fb",
"assets/assets/b_data/20.dat": "1d38b154460087e70abd83a1554d0b24",
"assets/assets/b_data/109.dat": "4c6a3c53863733efea7faceabba5ba07",
"assets/assets/b_data/121.dat": "fde78cb0ef195f293be0cd3247967c41",
"assets/assets/b_data/120.dat": "2c81f88e9db2c7b7edeccf4df49c0dee",
"assets/assets/b_data/108.dat": "86ff66d93e339ecf5d9757e622817180",
"assets/assets/b_data/21.dat": "35aa94553da4218544cc006ceba0eb36",
"assets/assets/b_data/35.dat": "f3e54af025f866fd07d7eb9bda8ed446",
"assets/assets/b_data/23.dat": "f5b2c20e686d20e3155a0598d75ff873",
"assets/assets/b_data/37.dat": "92ce44a53b959ada0f6d26fec582756c",
"assets/assets/b_data/122.dat": "ec6c7ca3d4495be7c18353157ec1cf68",
"assets/assets/b_data/123.dat": "cb03c56157f52618d57631238611adbf",
"assets/assets/b_data/36.dat": "aae3fc3f48e891b477dbf93ac8cfd78c",
"assets/assets/b_data/22.dat": "6adb731907ed821d46329afa4c5c5661",
"assets/assets/b_data/79.dat": "01bb3d444a34c50f44cefb9400fd954b",
"assets/assets/b_data/45.dat": "01c7547e80d29387866b2ca6d49442ef",
"assets/assets/b_data/3.dat": "2c9ba622c79ea7323755cb1810b545d5",
"assets/assets/b_data/51.dat": "649a579eff4a7cd64dc8c15b0e7e9f15",
"assets/assets/b_data/86.dat": "36e35cc23b2537b18d4db82a5badcba1",
"assets/assets/b_data/92.dat": "9d731421705ed5ceb545cc93eabe7a4c",
"assets/assets/b_data/93.dat": "7dd720a81fc137d4593f75122d5b7a3f",
"assets/assets/b_data/87.dat": "3ba76653c4c36237cdd1d271d678fe6f",
"assets/assets/b_data/2.dat": "b45c558287d57b9b385557b4dc64f59d",
"assets/assets/b_data/50.dat": "f3075305d7de3c19c0bf4f83f4502617",
"assets/assets/b_data/44.dat": "54cca448d43f92dc5c718e770e9e23e1",
"assets/assets/b_data/78.dat": "9a8cf62ab7e964ff3db646a062844b47",
"assets/assets/b_data/52.dat": "8ffa96215f04fcd50a607de384d15ca8",
"assets/assets/b_data/46.dat": "4797efca9915188844231ad31101d672",
"assets/assets/b_data/91.dat": "c4a60ea546b20bfce4fab1b40bc93984",
"assets/assets/b_data/85.dat": "feb6a1432df95d3ff72117d584e13cf0",
"assets/assets/b_data/84.dat": "ad0ec2b182d3545ff8990677014fdd5a",
"assets/assets/b_data/90.dat": "2d314421700d7212dc9caca496a1b182",
"assets/assets/b_data/47.dat": "674986df910375ceb922de9c50f0c259",
"assets/assets/b_data/53.dat": "c1d1072dc61dab0413a2ff65a2f934c3",
"assets/assets/b_data/1.dat": "723d645f6963179b6f06ce85ea288c25",
"assets/assets/b_data/5.dat": "b5050937cf72094cfb7a9fed7000fff2",
"assets/assets/b_data/57.dat": "53aa61f0be8578bf671cd7593e5f0653",
"assets/assets/b_data/43.dat": "5a927351bd8444bb9ea55fe91573699e",
"assets/assets/b_data/94.dat": "f1578bb8e4d9d80fbf979fa1e26867fd",
"assets/assets/b_data/80.dat": "454d2a1c885767d6a25c1c4cb1572614",
"assets/assets/b_data/81.dat": "c6a8707ad7f98c6fb1cbac1d5b7a8432",
"assets/assets/b_data/95.dat": "242a7937ad255524c0397cfe38002fd5",
"assets/assets/b_data/42.dat": "e6cb9d5790ca68125bc5e9a4b77eeead",
"assets/assets/b_data/4.dat": "11977373fdcf2ae5d807090740ee341a",
"assets/assets/b_data/56.dat": "fcb366e96f28575237c14faf78bccad1",
"assets/assets/b_data/40.dat": "67676af81b74224f59ef8ddc0f163739",
"assets/assets/b_data/54.dat": "3d3f2f7334c5a2ab99084e9ec780ba2a",
"assets/assets/b_data/6.dat": "b468525e4f03dba267708194f17c8cc5",
"assets/assets/b_data/68.dat": "47e8e09e2668ae6b408ef8d9a3c4822e",
"assets/assets/b_data/83.dat": "86859d604fee5a907a198690347c59eb",
"assets/assets/b_data/97.dat": "c8c40273b95d6468b28fb8eadfaa4d14",
"assets/assets/b_data/96.dat": "cbbcd9948c6e75ff684f9d3f64a78f34",
"assets/assets/b_data/82.dat": "3f8215586fab06c07b03ca1eeeea1bc7",
"assets/assets/b_data/69.dat": "2cf33829b59cd4c3dd2861f888880f02",
"assets/assets/b_data/55.dat": "2372820084b72dfad5df483420ff9270",
"assets/assets/b_data/7.dat": "80c5a41875a32a27a4819937679c6c6a",
"assets/assets/b_data/41.dat": "cfdf7faf27861ce32ef1824f44b36aca",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
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
