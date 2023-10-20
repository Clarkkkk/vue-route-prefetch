import type { App, Component } from 'vue'
import { onMounted, onBeforeUnmount, defineComponent, h, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { usePrefetch } from './composable'
import type { ComponentInstance, PrefetchLinkProps } from './types'
import {
  canPrefetch,
  supportIntersectionObserver,
  requestIdleCallback,
} from './utils'

export function installRouterPrefetch(
  app: App,
  { componentName = 'PrefetchLink', prefetch: enablePrefetch = true } = {},
) {
  if (!supportIntersectionObserver) return
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        ;(entry.target as any)._linkPrefetch()
      }
    })
  })

  const routerLink: Component =
    app.component('RouterLink') || app.component('router-link')!

  if (!routerLink) {
    console.error(
      `[vue-router-prefetch] Call app.use(VueRouter) before this plugin!`,
    )
  }

  const Link = defineComponent<PrefetchLinkProps>({
    name: componentName,
    props: {
      ...((routerLink as any).props || {}),
      prefetch: {
        type: Boolean,
        default: enablePrefetch,
      },
      prefetchFiles: {
        type: Array,
      },
      timeout: {
        type: Number,
        default: 2000,
      },
    },
    setup(props, { slots }) {
      let _linkObserved = false
      const { perfetchRoute, prefetchFiles } = usePrefetch()
      const elRef = ref<ComponentInstance | null>(null)

      onMounted(() => {
        if (props.prefetch && observer && canPrefetch) {
          requestIdleCallback(observe, { timeout: props.timeout || 2000 })
        }
      })

      onBeforeUnmount(() => {
        if (_linkObserved && elRef.value) {
          observer.unobserve(elRef.value.$el)
        }
      })

      function observe() {
        if (elRef.value) {
          observer.observe(elRef.value.$el)
          elRef.value.$el._linkPrefetch = linkPrefetch
          _linkObserved = true
        }
      }

      function linkPrefetch() {
        perfetchRoute(props.to)
        if (props.prefetchFiles) {
          prefetchFiles(props.prefetchFiles)
        }

        elRef.value && observer.unobserve(elRef.value.$el)
      }

      return () =>
        h(
          RouterLink as Component,
          { ...props, ref: elRef },
          () => slots.default && slots.default(),
        )
    },
  })

  app.component(Link.name, Link)
}
