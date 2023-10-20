# vue-route-prefetch

[![NPM version][npm-image]][npm-url] [![NPM Downloads][npm-download]][npm-url] [![License][license]][license-url] [![Minified Size][minified-size]][npm-url] [![Build Status][build-status]][github-actions]

> Note: This is a fork of [vue-router-prefetch](https://github.com/egoist/vue-router-prefetch) with only Vue 3 support. If you are using Vue 2, please consider the original vue-router-prefetch.

## Features

- Prefetch links when they are visible in viewport.
- Provide a composable for manually prefetch.
- Tiny-size.

## Install

```sh
npm i vue-route-prefetch
```

Or

```sh
pnpm i vue-route-prefetch
```

```sh
yarn add vue-route-prefetch
```

## Usage

You need to use this plugin after `vue-router`:

```js
import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import PrefetchPlugin from 'vue-route-prefetch'

const app = createApp()
const router = createRouter()
app.use(router).use(PrefetchPlugin)
```

Now you can replace your `<RouterLink>` that needs to prefetch to `<PrefetchLink>`. When this component is visible in viewport, it will automatically prefetch the (async) route component.

**Check out the [live demo](https://stackblitz.com/edit/vue-nr9q5u).**

You can also register the component with another name:

```js
app.use(RouterPrefetch, {
  componentName: 'QuickLink'
})
```

Now you can use it as `<quick-link>` in your app.

## Props

All [props](https://router.vuejs.org/api/#router-link-props) of `<RouterLink>` are still available in `<PrefetchLink>`, additional props are listed below.

### prefetch

- Type: `boolean`
- Default: `true`

Whether to prefetch the matched route component.

You can also set `meta.prefetch` on vue-router's `route` object to disable prefetching this route for all `<router-link>`s:

```js
createRouter({
  routes: [
    {
      path: '/some-async-page',
      meta: { prefetch: false },
      component: () => import('./async-page.vue')
    }
  ]
})
```

It's also possible to turn of prefetching globally:

```js
app.use(RouterPrefetch, {
  prefetch: false
})
```

### prefetchFiles

- Type: `string[]`
- Examples: `['/foo.css']`

A list of additional files to prefetch. By default we only prefetch the route component.

You can also set `meta.prefetchFiles` on vue-router's `route` object, it will be merged with the prop value:

```js
createRouter({
  routes: [
    {
      path: '/some-async-page',
      meta: { prefetchFiles: ['/foo.css'] },
      component: () => import('./async-page.vue')
    }
  ]
})
```

### timeout

- Type: `number`
- Default: `2000` (ms)

Timeout after which prefetching will occur.

## Manully prefetch

You can prefetch manually by using `usePrefetch`.

Signature:

```TypeScript
function usePrefetch(): {
    perfetchRoute: (link: RouteLocationRaw) => void;
    prefetchFiles: (files: string[]) => void;
}
```

```html
<script setup>
import { usePrefetch } from 'vue-route-prefetch'

const { prefetchRoute, prefetchFiles } = usePrefetch()
</script>
<template>
  <div>
    <button @mouseenter="prefetchRoute('/details')">
      See details
    </button>
    <button @mouseenter="prefetchFiles('/theme.css')">
      Switch theme
    </button>
  </div>
</template>
```

## Browser Support

It works on the browsers with the support of [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) (See [compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#browser_compatibility)). Otherwise, you may need a [polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill).

## Credits

Forked from [vue-router-prefetch](https://github.com/egoist/vue-router-prefetch). Inspired by [quicklink](https://github.com/GoogleChromeLabs/quicklink) and [`nuxt-link`](https://github.com/nuxt/nuxt.js/pull/4574/).


## Acknowledgment

If you found it useful somehow, I would be grateful if you could leave a star in the project's GitHub repository.

Thank you.

[npm-url]: https://www.npmjs.com/package/vue-route-prefetch
[npm-image]: https://badge.fury.io/js/vue-route-prefetch.svg
[npm-download]: https://img.shields.io/npm/dw/vue-route-prefetch
[license]: https://img.shields.io/github/license/Clarkkkk/vue-route-prefetch
[license-url]: https://github.com/Clarkkkk/vue-route-prefetch/blob/main/LICENSE.md
[minified-size]: https://img.shields.io/bundlephobia/min/vue-route-prefetch
[build-status]: https://img.shields.io/github/actions/workflow/status/Clarkkkk/vue-route-prefetch/.github%2Fworkflows%2Fpublish.yml
[github-actions]: https://github.com/Clarkkkk/vue-route-prefetch/actions
