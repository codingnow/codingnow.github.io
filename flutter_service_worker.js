'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "524f0a7fb343abba82baa325896add26",
"index.html": "18036f13d9aaeaf22edda8c5ec9c0a2d",
"/": "18036f13d9aaeaf22edda8c5ec9c0a2d",
"main.dart.js": "7136a685adb53e658667ce21d85c8e1f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c74add144c5136f274883d189bc97bb6",
".git/config": "ec0c4f607ffb5002e055c8bfb916a522",
".git/objects/59/c15356a80a95db93793a297a5b9c2345c83ed0": "9e61f2ef884944ef174d652432dee034",
".git/objects/0c/8da7f86346d5d6195ab8513df391ac19ae8d7c": "d3126790bccabb471f8ba65980c5f398",
".git/objects/66/6aa26ed130f099ee05ed0fd86656ad0ae07eec": "361b42bb8381fda5a9ca52f42f10b771",
".git/objects/50/a2ef0a977b86e91d2f0adf106f0793751ac286": "187d2e9546eeaab4facd25845b9659ce",
".git/objects/50/1b8ae7a3fbdfd59bfd8b1696101c6f1b6500bd": "94cc881b663dc1206e50c779be3ee326",
".git/objects/57/1db407b58e7b4fde35ca0a9d4534cd9a41d299": "6b292a929b26c7708ff16b31263d8af0",
".git/objects/6f/1b5aa17658657490c5280d4a751fdd9fbca5d7": "6fe8dfdda91903ea814ec7bb60f929cd",
".git/objects/9b/5fbaa870da18abdfe515c0f317007401677a63": "7f7af0773abbc3b1b53309357a6098f6",
".git/objects/6a/5f3370134965531d6575d0e173f60135015a46": "644bae6c35bf8e534a24c94c8fc223ad",
".git/objects/35/6cfd8c54a29dfc450ea6eb02d19a030c25bf71": "4774be694d43359fc5f1bbb40b566607",
".git/objects/69/8ff48b425846dcdbfe97827daa0e6aaf1e2681": "bcb5366ed3a8c902744ea6e2c1fa50c2",
".git/objects/3c/ef084a04b5fb08f17cb13744f77361f7d907f1": "fcc509931e6fe4af2e6602037c2aad8a",
".git/objects/56/4c1c33349d9a49b684a18bcd1944b1cd3aa030": "3900be2bd78538c223c4dd6e9209b82c",
".git/objects/51/bfd2483518ba456f6d18f0b79308c9cf7148d1": "00d3819725212d4aad8eb258df43922d",
".git/objects/51/7b2be253f57cd8edb3925a07da0e707caf85ec": "7deb6e12d17b5f037deb05c4af489222",
".git/objects/67/86954ff67b80cbe2d5345e0bb98e2984815fb8": "60a5c352679556198712fa846e85f816",
".git/objects/0e/be5b2c90a1a91668a0600b9d537a4236856cc7": "79dc74aa7d86f11fb75ebf2038306147",
".git/objects/60/14b4c7e1009ac8711da13286e9b63f3e5b5742": "5a270ec8eb27918eb2cc67b38a5326dd",
".git/objects/60/f475018206b270b0ce4c1d870e933d89a82d98": "c2ad17450bc86c2d351517fd2bd52300",
".git/objects/5a/253d9bed6661b4e05d4d202a8c9c46eb4c22cb": "652dcf6abb36fb16b8ecb74055eba4f7",
".git/objects/5f/b5164d9c176f3aa91421a53f8e43cd11c06339": "7a90fd0b4219374c945f5f8d889184c5",
".git/objects/05/6eccb1de0aded353f9710622628dfb30d05ee2": "276b17ff02e526e389b55d92dbbd4592",
".git/objects/05/b36c28ebfc1b98881cde7beb614e1f71b6b038": "a2c5a9ac188ced81d913183ecc3dc6dc",
".git/objects/9c/23f4ec8c93645cda51fe0caaf469118d8d4ae4": "432bc6b0637728c57873821ef8c18264",
".git/objects/9c/cdad102aaae984286051e25e39075d3977a6fe": "518279c6d3d909d8794b61039191ed67",
".git/objects/02/ef73f97568c26766887bebaaee8d0d457fe0b0": "f66998641a84be8102090497c9627863",
".git/objects/a4/b6addba679a48d5228a455d49c2461fb9db3b0": "2488230f592873d888d418712b669b3a",
".git/objects/b2/991c875a7c02917940f552aa2175dbb1ee34c3": "621f8567af3fbe444521eae0a59bd656",
".git/objects/d9/b58674fca21dcd9d0bcc4fcbb74cd664e07368": "5a01504d1a82b9174ff7569796dc8a34",
".git/objects/ac/f7ebdd0d286e78d51fd01d4365154cfab74cda": "e211af4904077a08d98c1f68ef616273",
".git/objects/d7/63e11ebfe663c7a2fc5471beedb8caa9a4ca8f": "71d0179067587b9897b4c3f55febf085",
".git/objects/d7/13d24fe35fc00fe69b8fa3bb849bac4c053146": "baa5c61c4ebec89f6d1c3a8c826e65ab",
".git/objects/d0/97046ea02800a0a40a2778efd0a2fb8dd12a30": "4202a0e8c575d3ad832a6184286f6086",
".git/objects/be/19f1138a070ec322f86d7103fb3205bd8084ef": "aff6249f1f10ce6781a910ed91ae73b3",
".git/objects/da/d669ea8ce8fb1a2c9989c780a955834e2efd8c": "71d07bc41a59af1959aa36774a0b27a9",
".git/objects/a2/7eecf2297b65c972ec9a662bb9811d9d9d2c12": "763de2e7a11ef1f281ec2ee32442fcd4",
".git/objects/a5/4803e29d877d148c96d22c2eda5f4613caf5bb": "cfb63aa92d824ac435dd287b9d215b1b",
".git/objects/bd/b6e4ec1dc3ffa254e41c21bcf49cadd42fd3a0": "cd9fa56fd863b63dd289d41bf3822852",
".git/objects/d1/bc0affda70ef3d7ca9be3dbab19fc02d9aa497": "29875ab5db4efa5858a827af75b1d627",
".git/objects/d6/44499e044623b468d01c9e65e6f811ddc12cc9": "382fa98b72f7a092efb591340436cc40",
".git/objects/ae/6aba68f44703d59143d96a42075c63c5e85960": "2ff0621a5af5fb95c8a0b5ae04d794fe",
".git/objects/ab/7214e714638b4bc2b07dc4a0c475a1327232a3": "07ba1d602475567531da3df0ee4c2a74",
".git/objects/e5/55af446ba15dfd55aa10c42a1912584486af10": "91d9b7e1a164078d5fab97a5bee09c5a",
".git/objects/e5/c2c3d0369154de9c70a40c83cf582d76c33fa9": "3e7143e4a0281c90669c653246da471e",
".git/objects/c9/7340b79daa7e9081c6409b803697e8b341d0b2": "9f86af1a47d122a8a6a094fa508f35e2",
".git/objects/fd/b80a912b32ca2abfdd2940987acfac30fdc968": "2b854d791dc405baf4f583399c42dc03",
".git/objects/f5/f1c1afcb1d916b6da28f0d656795524e9194c7": "1b3fc3eb17dab7f18ee37c3ea2b3207d",
".git/objects/e3/def2f03c6c3667c0ad13df59458a1c5890a42a": "3c3c6ac95905361c6db26c91cf552505",
".git/objects/cf/fc7cd04a90c753c3500582d229874aca86c1ca": "51e1fc2a5aa072d230d928005aa92441",
".git/objects/cf/d47485498300faea0065d54a9478ec551a50a3": "83b2cb944d582bbf2fff7f3951b1fa67",
".git/objects/ca/1ded8959ca165c622749af45cf9aed28144f7a": "83c648036ad80b4eb53673da914cf680",
".git/objects/ca/b0f604ebc10a93284fa9116a706d8052c92339": "0a074af06773f334dd0688dee7a8ee6a",
".git/objects/fe/a3f2ea390cf12612bd4544abf8f92e7e53b657": "b18cbf770e802ab664902ee05e5bbac3",
".git/objects/c8/d799e24e21812fa646d64790153effdc5eb536": "2f57bc0c6a22fa1381a11159905fbc28",
".git/objects/c1/eb4c92dce41840f0f1d26a81859a7c30191009": "fa428060668253a0afce6273190ed994",
".git/objects/c1/3421d2bd5e0eb97c30563810a75d762cb3d769": "07853dbe8bceb7f762a4baf2b87bdaef",
".git/objects/c1/c7805c76134648237ddb1a0ee0e87d758a8901": "bb98b1e4e76b79b7a0c1d9bf0c8bf81a",
".git/objects/ec/98df05f91d7c151ee0b49d15f90d836c248bc4": "d1fcdb05b94c574be72627f1412dc38e",
".git/objects/20/fb3b1c9e8855addb27d7050fe88d1f6f70d269": "bbfb028e86b194f27be06b6a07d1e0b9",
".git/objects/pack/pack-514c2baf12a185184091dd4833de14146ddc7f11.pack": "4ee4e6d7c55983f050689a857435e6b9",
".git/objects/pack/pack-514c2baf12a185184091dd4833de14146ddc7f11.idx": "987fce9f4b7b2c87f100b687ab4f3799",
".git/objects/11/a14453c6550ef80a9d1a23f9ca32681937d6a9": "f5d13033b51592d60e22158888e77a30",
".git/objects/7d/1f8396b320242e4b185c10a31129a836978c51": "efd888a92c3a60e821fb6935b2ebc4ad",
".git/objects/7c/673cc608da116b0a0cb52ec7c16db6b9d9c3ad": "af87599aa1ccd062c1c27060e7927b4f",
".git/objects/16/c419ab74531ae3dfa99d428fcf143c92a38471": "601b576f4e7105bf9ace41de2cfdeda3",
".git/objects/16/4a8fc6c58064e6d373fb07e24040752b9f3d39": "e47d1d1d3abee3b860c889b1ca44cdae",
".git/objects/89/9232f008be20cc9cf5cf04c92b2ec0775c61d3": "cc43bd088a7f8aa87605fe8f04ece346",
".git/objects/89/cec082bc00b01253bb55094b8fa63d6a77e040": "aa07f9617acadda58dc6f6f83785b851",
".git/objects/87/12fa8545a2037454b3579313efffb3f23c0f6b": "5f2674d6b077337f55efc84a3701d0a4",
".git/objects/87/5b35795afcaf7ffb3d959e38a11e379164d8a9": "89fa54a7b8ae345420fd29dff044c904",
".git/objects/87/bb1464e9377f19af254a6b9bcafb53fc4cbf80": "1ef70a2c603a21c8a7801340f9ecfa9b",
".git/objects/1a/a816e6a6a88d09091f909ce83605642b265efe": "6d7323396b1f4e2875d7559a6cc9fdbf",
".git/objects/7e/d74e0385c91d312beb5187ef9c1ecd0f693e5d": "2ffe769aa50fbd61486d11f33c0879bc",
".git/objects/7e/6271a90a41accb0bf7c20bffbcd7d0836810e1": "965c2c57d1c1c64995ff271246d1272c",
".git/objects/26/5c8925b033e0eabbc488351b11fdef0e4f6477": "a670b8bb92f7629eef95d7e279789ff7",
".git/objects/21/ac5e713f53bf5a46f791cd7937d1e36649eb21": "c52700a6b17fdd3f57e443e82fa34a7c",
".git/objects/75/13b0e94e8e1175966727fc57efedabec90cae5": "2fbeb2c0a60a5ca230ba4f2f09e45caf",
".git/objects/2a/bb32c239c1cd8066ef7b4794d56ef89a1ecd00": "902e675821f5d61897426d3830fc3c69",
".git/objects/2f/45e21375794ddb7e9ec1ca8778fdf1a6e08134": "4d37c60ee0ca7959ad1d5a3787dd4091",
".git/objects/43/63721529b0e567af53c387696e2e1a59ddd6bc": "52fc1b1b38b1a735c10d353ca6401ee6",
".git/objects/07/ecd647707a99682f7e3e94257ab86ecea54f18": "f2be14f84cfdfac90512de8b2288eb55",
".git/objects/07/6814be60d193e500b55b5625ff39c0912b5499": "d74f0a2e658ec43acc9307de14cc438b",
".git/objects/38/e0b242e4b03bc57c408c98517d18df62e367fa": "0aa0e7c9d0d7255714027318d97d5ee7",
".git/objects/00/607dab37ee36e58744b85a71478e681f87a1da": "0e618a6d1ff7d3ad98c65747805f5c30",
".git/objects/9a/2912cd05910a38f853f5a4b75ceabab71ff731": "8a82ac8c1367f209d45fcf1aeed76918",
".git/objects/5d/bfb04d4dcc445f795f3273f5d6caabe485ae7d": "d4c84fb0da8075198dea38cd2040acaa",
".git/objects/31/16ce88480cff033e4e31c198d9a71f6787dfb3": "02d80cd53e245be74f1406ddf42118f2",
".git/objects/31/02fb7b6ca83b1fbcfcd9de26a3b7cc686e11ba": "4fc4e353c5f24891552007a98999a968",
".git/objects/31/498530908e63f7fa1cb4b81aa1c03bfdf7a213": "3b26edf980f9e34544d101ef276c036a",
".git/objects/62/407d2a591c6d324e49eb55e5a9149633ea423c": "1731fe3dc245e01166ecb72840ea149a",
".git/objects/96/7cd4df5db845db8fae5d3baebf57b03fe0d87a": "3e6872059779c91b0a71fbfb597b62ae",
".git/objects/3a/060fdedbafc985f094d41fa789d27315ee4b56": "df713418ff3e0f3012f02fbe3b628067",
".git/objects/37/97af07242a74429ae2333c74d362e2ff17ea84": "c61d61bf0b75306065852b3369759dbe",
".git/objects/08/f9e1252f9a86645966154fc515d827c993c589": "ce6548c802ccc81a9aa54c4a2fd2e40d",
".git/objects/6d/f8fbadd45684fe2a9262a06ccc4fa6714f6e2a": "5f106d0905abda98b619645d554ebfe8",
".git/objects/6d/9517b970383d84f6970593840df59ecd56ead6": "2abd0ca16cc8862027b743eeba7ade27",
".git/objects/6d/efa1dcde563483495a36816e118c91d466826c": "c075acf58d3fc701a92eb3d3271dc550",
".git/objects/99/580f5efa195363c80de45ede014002ef9481ea": "5421434c25e810a41e692a1e2befd97f",
".git/objects/99/6b8888105ae8bd1c8584995a8349c89cdc3125": "9577127e058a79b7d50f9ab12b68bd99",
".git/objects/55/bd590e84f9356fcbdea623553571ad72a6b8cb": "31b0319c19bf7ebaeda927a76dfe838d",
".git/objects/97/57048108954feca523f450c81284c8b8829cc4": "b1a58ae35f8d9d24a1d8262c52370a84",
".git/objects/63/a80938f75f55b4235679bc08adb05a6bd502bf": "68aa88fde6017e759ad36d7cf6da2f58",
".git/objects/0a/5170a785d1f0094bf35106fdafbb0f97435c66": "82275a5c393ca69eb023ed51ac11f8ac",
".git/objects/64/b5600a522f0218d2b960d89e72d300851f7db5": "674a09ad18386c3bd1667b2523279820",
".git/objects/d3/369d5b82fa9c0d1b5b22339e0c7b4a8a0b097f": "af512a890bdd3460b901c5c2c76fe125",
".git/objects/d4/21eaa9eeba3eebb772e7309b329f39d69c8227": "89618a055a6d93b6ee23cd6de3f9c138",
".git/objects/ba/45b0708eae6c154c1a2962c0d8de8956e98f9c": "3ce253462b46407d5b64ec790f22ccc8",
".git/objects/ba/da4829280f3eae3cd825c3d2cea1f4337c8ab2": "79fda0b26c6f64faca1a91c3ac188af5",
".git/objects/a7/d4a42c90e47f42fbc8ac8ddf1a525616e3028c": "43ef28da8ddabf7486d57e13fedfe96b",
".git/objects/a7/f77777cfbc6b019abc83abc331f262388c8169": "c392b8576332833d5a63c30a58e7fd40",
".git/objects/b8/04abcb072428f5a239ce3d4ef4a9c6a195c08a": "fe39ace3f0eae29d9ee45ca5de0f067c",
".git/objects/dd/4f2bf26c12a37209c3ca6419b3ab2e4e5f11e9": "f9306f73d28a03192a8a30836b19c47b",
".git/objects/a9/33a6868583535a220a10c758d8ac550b8c8fb4": "77b1d6b526b6a03106ae28065a6162ae",
".git/objects/b7/12c5b2e0235af3acac2fcdf4dbc16386f4af0f": "1e4717af845b991836cf1cf9ed59ddf6",
".git/objects/db/77e833cbd6ccd37ac2bbbcbe894fa55b7f1e6d": "306885e6fc0cb9877c79067d2377c74c",
".git/objects/de/5969db0c1046250de79f469acc32ec07dc834b": "9217d10628c253120402cce46638823e",
".git/objects/a6/55f9660523c2be7815a25893821d7934652ac7": "9e437f753c40b26b300f643df6c711bc",
".git/objects/b9/b27a236c799d914ea89973c89c6e01b200aabf": "2bd04b3d65bd5aed250a6b568b8a44b3",
".git/objects/a1/9751c097a63770171e3a70ad2e11a931fdf28a": "5ea0b95c782646d6b625e008bc5cafc9",
".git/objects/c3/b74150bee15f2cfc90a3da45ec48dd005a22ba": "5aa3d3fe2e6d57699e5fe00b00858873",
".git/objects/c4/cb41ab1153097d2689a77d25499ef38e1dd1d0": "5551b5554b31994f64ab2ddc65dd38dc",
".git/objects/cd/65fb86df7b647b6f42052e906b39073978199b": "693f2a9c35ccdb360e060d4653a3e8c3",
".git/objects/cc/d188fb88a043982b4a1f619406c70d9c399f95": "0908668aff6ec00486a09e3e4ef9b434",
".git/objects/cc/84e862a3b4dcf4fa42e76cb7a296121a8a001e": "21b229e4fe21574f04ce92371a82f572",
".git/objects/e8/e0ccf401a4aa9698aab0317f645ad88a2139e7": "189d331924d1045f040f39e0e9149d59",
".git/objects/fa/ba2113bb1834051d8c513ee3332bd2ebbdcc6d": "0f808795344479124835944af652db85",
".git/objects/ff/a10f848ee7529edeeb8eff295b171a3fbff456": "72139d1c1d06feaba12696f692c40fca",
".git/objects/f6/d013eb8a325b2274574a6c222b37c0ee354dae": "c6a5b712ff007edfa08dc726e9ddab2c",
".git/objects/f6/00f2e362697efbb0941050b10d7839f0c089de": "aeba1b21a387d21d18b0668817353c67",
".git/objects/f6/471605e6320c774d59eaeb7c484b36b8c34875": "f23f5c7c641730e799a8d565f847f781",
".git/objects/e9/f145cd341aa73e60929f74b18ae102f120d42e": "14c204056e8109fff65543b27a90d69a",
".git/objects/e7/88255e9bcc200821cae7546586d62f3f90e6e2": "657ec64fc4ea57b014cd052430540f8b",
".git/objects/e7/9791b294874efaec8f75757c65fb1a71d21530": "f794e903f88f9642e642991add6cbc63",
".git/objects/f8/24e6e772e4afe3ff348ef09f4d1845ed6b56eb": "9a3fde9a0169eac699c7b360cde1e2fd",
".git/objects/e0/cb26c2a3da01797341d0c62081e767a4474eb9": "e6604c4a9a6571b72773cc3215d77935",
".git/objects/79/e40b3dbdd1ca0be401036b80c74d0be60ea147": "98f3ca3815d4e64b580bb68ab5347125",
".git/objects/41/17a291601bbe2c58ff1131b5802ec9854d3859": "664a1f538d975b5f4d54e0fa35d93948",
".git/objects/1b/a4792f7b8410b2daa0ed8c5dee98a82b3c31a7": "ae65f3fa3165672651b6c3dc5651ba3b",
".git/objects/1b/6eef86518caa9aae5c78b2764d87bc436b03c8": "641224cf8687d18e5f056f5b8a4266fc",
".git/objects/48/7bde9f5b3e3043d0a1da3c75f1cc0434c5dff6": "413b7fcbe3248434a82a1a0f7dba28fc",
".git/objects/48/1a2962ab49bf3967597d16180d58da9743ef1d": "3ac38f6cceed088bfb90ac154e782f4f",
".git/objects/84/787dd0685b7342bcd7ef238fa4641b2ac75d80": "3cd92d47938f04516fb7a5d7c1b46269",
".git/objects/24/fd48951cc6be2c61d860af7092c20193e1270b": "57c41c88079ff2fe2d612023a7128119",
".git/objects/12/234e85741db4ad7ed6fe2b273fe4f8d0b4b1b5": "eadd21b621abc3cfa447f9c63616defb",
".git/objects/12/9860ad534f6956f8ef3df90594c613b34f6ee7": "044fa902fcd84afe6fff0812216658a0",
".git/objects/12/8479acb1019ff4eee880b898ece5b7f92b991a": "7455c380b0da0c53aff13a970c4bee69",
".git/objects/76/c75ce2580aca0fd2a7c68a81e5c7864b849897": "e2eff8e5c50be34fb266ae1b8872034d",
".git/objects/1c/abc12c50e81d533cb0c0780023b511df274db2": "40f64b329a6f3244da0e0ee32758925f",
".git/objects/1c/383ce60dfa6ba0cf960999dfa68a3cf060c163": "a0dbe603f0e98049ebcef6ae69511808",
".git/objects/49/03e0c21c24b31c27bda618891cc451d8151f5e": "9135fc329538272edfd6fcfa1ca4394d",
".git/objects/40/f01cde98e26f3171526e4314ceac0312dccb84": "767fc2d92def437e7eb105bf7d9b4d46",
".git/objects/2e/3102fea4b328e8727e28f8a558c879c130ef94": "496cbca1326e7372281b57e2e075ed89",
".git/objects/47/85abf88a9af9759c783e7dfa153e5b554e4382": "af43d7f7394c3fb5c05b524f40a1fc3c",
".git/objects/78/be6b7af231de8da4cc4b3e78655e282263200b": "c9cfdc5ebef4685e7ba69f9c64fc8eda",
".git/objects/13/40b8d499b74112fd2dd6029bd1a0d9cb0fe552": "6219a5d72c24af6aaf9287de3117b19f",
".git/objects/7a/f3db5421a1c198a72214b78e1d1b9541a15aef": "4b8d4b4ef5dd6dbee1cf68c0f1163331",
".git/objects/7a/434c0b16e76057c31114b4e69ffd45e8448168": "cddbd0553f5621a64bb0eb30d8ef4e48",
".git/objects/14/7ff3c84da2de1e675b95e6c3af23016d7eeb27": "c7302b9fcfe9f69c2dc8a981837ff4da",
".git/objects/8e/82bebf8a385c7e1457c3b24c5b95cb6e34c563": "f08fa31114577747b56c95909b9e983d",
".git/objects/25/8d45ca7afb9e98063589e054ec6ddd8b268597": "975fa018339a38fa0d992037aaa74c11",
".git/objects/25/07a1f9c052be40756f97a091ea78de7dae2a1b": "4e75307f1bf379b9b40a076ec253b041",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "86daf305dc3ee240d23d76e06c258952",
".git/logs/refs/heads/main": "86daf305dc3ee240d23d76e06c258952",
".git/logs/refs/remotes/origin/main": "89c49f25eaa81c6ec6737518ad72ce56",
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
".git/refs/heads/main": "aee2a013fa1ffe55ad220a17b5a5fadb",
".git/refs/remotes/origin/main": "aee2a013fa1ffe55ad220a17b5a5fadb",
".git/index": "3ce98ee802f5e8288ac815a08fd85879",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "b41bcd178f42fbef5ddd4b2b0b99e41e",
"assets/AssetManifest.json": "2dcd43b6ed88778aad85dc645325617b",
"assets/NOTICES": "984e16e59107dcc07f8826b430959971",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "d144725c34fb0de38beb1dd26e13026d",
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
"assets/assets/images/wtr.png": "0c87e15a8f31a50ee286b9ce19958d88",
"assets/assets/images/bnk.png": "a5fd0508e34869b9aa106ef9e037250a",
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
