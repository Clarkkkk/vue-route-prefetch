
# 2.0.2    (2021-08-12)

## **Features**

* Upgrade to Vue 3 (#44) ([a9c916b3](https://github.com/Clarkkkk/vue-router-prefetch/commit/a9c916b30402b8fde59c5ec7f1cd67939977c10d))
    
    ### **BREAKING CHANGE**
    
    Require Vue 3 and Vue Router 4
    
* add typings (#8) ([75280f43](https://github.com/Clarkkkk/vue-router-prefetch/commit/75280f43714f25119a99b7298f01dba972e538d4))
* support prefetch and prefetchFiles on route object ([e39e99b9](https://github.com/Clarkkkk/vue-router-prefetch/commit/e39e99b915fc19c9d2cac8c53235f75babc3088e))
* increase default timeout, expose as prop ([8ef61718](https://github.com/Clarkkkk/vue-router-prefetch/commit/8ef61718b2e965fe01a8fbf8ce491edb0a37ab2a))
* Make use of requestIdleCallback if available (#6) ([31eb933f](https://github.com/Clarkkkk/vue-router-prefetch/commit/31eb933f82931e56e131d2fbcff4ffca650bbec1))
    
    ### **Description**
    
    requestIdleCallback will start up the observation in the next available idle time of the browser, without getting in the way of anything important within the app.
    
* use bili ([3b88be93](https://github.com/Clarkkkk/vue-router-prefetch/commit/3b88be93c97073ffc031cf85795a632fd0b4d981))
* support commonjs modules (#4) ([8a391a14](https://github.com/Clarkkkk/vue-router-prefetch/commit/8a391a14b1c793f1f044a42b5e2db3543db36b65))
    closes #3 * add prefetchFiles prop, closes #1 ([1a7fdd76](https://github.com/Clarkkkk/vue-router-prefetch/commit/1a7fdd760764e52c5c8bfb8db03b55af21aff014))

## **Bug Fixes**

* mark vue and vue-router as peerDependency ([d4ab1b04](https://github.com/Clarkkkk/vue-router-prefetch/commit/d4ab1b04c398aedc0ceb58d41e7c5656b2cf6a8a))
* make sure route component is defined (#37) ([e49a57c6](https://github.com/Clarkkkk/vue-router-prefetch/commit/e49a57c6eef32fc72a938cd1514b31928c4f3800))
    
    ### **Description**
    
    Co-authored-by: 寇超 <kouchao@xindong.com>
    Co-authored-by: EGOIST <0x142857@gmail.com>
    
* beforeDestroy (typo) (#34) ([c62f9a03](https://github.com/Clarkkkk/vue-router-prefetch/commit/c62f9a03ea40fec42e807b28d5d2bffe4ba41608))
* Add missing timeout param (#31) ([ccd762fd](https://github.com/Clarkkkk/vue-router-prefetch/commit/ccd762fd06b7a51b04fc326483eef03a65fc5853))
* ensure the Component is lazy loaded, closes #7 ([58872194](https://github.com/Clarkkkk/vue-router-prefetch/commit/58872194930281db4e13e54cc76e101d9d0709e3))
* use unminified version by default ([51c8df51](https://github.com/Clarkkkk/vue-router-prefetch/commit/51c8df5192f042dd29d71eb399b818dc7a45a0e0))
* allow to turn off prefetching globally ([28a2d192](https://github.com/Clarkkkk/vue-router-prefetch/commit/28a2d192f6d3280321e314f2ce957ca85ca13321))
* support vue-router 3.0.1 and below ([71674bc9](https://github.com/Clarkkkk/vue-router-prefetch/commit/71674bc951c0de79e2374574b34992ce56e9fdf9))
* make prefetch do nothing in ssr ([e171f7aa](https://github.com/Clarkkkk/vue-router-prefetch/commit/e171f7aa1448def9ecbc9a14ed2123980f3570e1))
* don't prefetch if Save-Data is enabled ([b31b2a19](https://github.com/Clarkkkk/vue-router-prefetch/commit/b31b2a1912a824698ceaa1c8e7661e775f2061b8))

## **Documentation**

* update features ([52597733](https://github.com/Clarkkkk/vue-router-prefetch/commit/525977335957970812e3021f8f8460b031f3f5e6))
* fix typo (#5) ([aaae2ad9](https://github.com/Clarkkkk/vue-router-prefetch/commit/aaae2ad938cf5ca178284eeb982fae02aef38ab7))
* add demo link ([5c8c2306](https://github.com/Clarkkkk/vue-router-prefetch/commit/5c8c2306a889e019306f89e599b0982bc069cbf7))

## **Test**

* add cypress for e2e test (#10) ([a63e7ca1](https://github.com/Clarkkkk/vue-router-prefetch/commit/a63e7ca16d8a95c1fda1720c512df6e549012b52))

## **Chores**

* update readme ([c677dff6](https://github.com/Clarkkkk/vue-router-prefetch/commit/c677dff62f1a1f38eb6d035713a3b66c33f9984e))
* bump elliptic from 6.4.1 to 6.5.3 (#24) ([e2ecf3bc](https://github.com/Clarkkkk/vue-router-prefetch/commit/e2ecf3bccac83261d6554e54483bd8568cc80fb9))
    
    ### **Description**
    
    Bumps [elliptic](https://github.com/indutny/elliptic) from 6.4.1 to 6.5.3.
    - [Release notes](https://github.com/indutny/elliptic/releases)
    - [Commits](https://github.com/indutny/elliptic/compare/v6.4.1...v6.5.3)
    
    Signed-off-by: dependabot[bot] <support@github.com>
    
    Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
    
* bump mixin-deep from 1.3.1 to 1.3.2 (#15) ([c462f9af](https://github.com/Clarkkkk/vue-router-prefetch/commit/c462f9af143590d8d7b010a8482520f41796deb2))
    
    ### **Description**
    
    Bumps [mixin-deep](https://github.com/jonschlinkert/mixin-deep) from 1.3.1 to 1.3.2.
    - [Release notes](https://github.com/jonschlinkert/mixin-deep/releases)
    - [Commits](https://github.com/jonschlinkert/mixin-deep/compare/1.3.1...1.3.2)
    
    Signed-off-by: dependabot[bot] <support@github.com>
    
    Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
    
* bump handlebars from 4.0.12 to 4.7.6 (#25) ([bbbaefd6](https://github.com/Clarkkkk/vue-router-prefetch/commit/bbbaefd6e4c7bebe6d01c84952083d9b2395c332))
    
    ### **Description**
    
    Bumps [handlebars](https://github.com/wycats/handlebars.js) from 4.0.12 to 4.7.6.
    - [Release notes](https://github.com/wycats/handlebars.js/releases)
    - [Changelog](https://github.com/handlebars-lang/handlebars.js/blob/master/release-notes.md)
    - [Commits](https://github.com/wycats/handlebars.js/compare/v4.0.12...v4.7.6)
    
    Signed-off-by: dependabot[bot] <support@github.com>
    
    Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
    
* bump bin-links from 1.1.2 to 1.1.8 (#26) ([a52d1d92](https://github.com/Clarkkkk/vue-router-prefetch/commit/a52d1d9237b8a91be59b9da92ceb107de22997f0))
    
    ### **Description**
    
    Bumps [bin-links](https://github.com/npm/bin-links) from 1.1.2 to 1.1.8.
    - [Release notes](https://github.com/npm/bin-links/releases)
    - [Changelog](https://github.com/npm/bin-links/blob/v1.1.8/CHANGELOG.md)
    - [Commits](https://github.com/npm/bin-links/compare/v1.1.2...v1.1.8)
    
    Signed-off-by: dependabot[bot] <support@github.com>
    
    Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
    
* bump http-proxy from 1.17.0 to 1.18.1 (#27) ([1e3c004a](https://github.com/Clarkkkk/vue-router-prefetch/commit/1e3c004aae5f5fa49a9006a886106e2401410e6b))
    
    ### **Description**
    
    Bumps [http-proxy](https://github.com/http-party/node-http-proxy) from 1.17.0 to 1.18.1.
    - [Release notes](https://github.com/http-party/node-http-proxy/releases)
    - [Changelog](https://github.com/http-party/node-http-proxy/blob/master/CHANGELOG.md)
    - [Commits](https://github.com/http-party/node-http-proxy/compare/1.17.0...1.18.1)
    
    Signed-off-by: dependabot[bot] <support@github.com>
    
    Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
    
* update semantic-release ([8abd2273](https://github.com/Clarkkkk/vue-router-prefetch/commit/8abd2273e000ab32f7f4e9be2d41caec48c34f1f))
* somehow GITHUB_TOKEN isn't working ([72de3827](https://github.com/Clarkkkk/vue-router-prefetch/commit/72de38273e33cd5a2fefdaac827e61f9f1592f83))
* tweaks ([419a5ed1](https://github.com/Clarkkkk/vue-router-prefetch/commit/419a5ed1bd7c95ba21a5d861c027924decdd0ea7))
* use github actions ([80d36aab](https://github.com/Clarkkkk/vue-router-prefetch/commit/80d36aab5d26d72d3381e5b50a55a6b53700c1dc))
* bump eslint-utils from 1.3.1 to 1.4.3 (#11) ([396a7fed](https://github.com/Clarkkkk/vue-router-prefetch/commit/396a7fed480b451da15ebdc94dd529bcaf1d896f))
    
    ### **Description**
    
    Bumps [eslint-utils](https://github.com/mysticatea/eslint-utils) from 1.3.1 to 1.4.3.
    - [Release notes](https://github.com/mysticatea/eslint-utils/releases)
    - [Commits](https://github.com/mysticatea/eslint-utils/compare/v1.3.1...v1.4.3)
    
    Signed-off-by: dependabot[bot] <support@github.com>
    
* ignore dist ([ee94643b](https://github.com/Clarkkkk/vue-router-prefetch/commit/ee94643bf4f0615861c76ba532279bacfbd0e096))



