import type { RouteComponent, RouteLocationRaw, Router } from 'vue-router'
import { useRouter } from 'vue-router'
import prefetch from './prefetch'

export function usePrefetch() {
    const router = useRouter()
    function prefetchRoute(link: RouteLocationRaw) {
        const route = router.resolve(link)

        if (route.meta.__prefetched) return

        route.meta.__prefetched = true

        if (route.meta.prefetch !== false) {
            // Prefetch route component
            const components = getRouteComponents(route)
            for (const Component of components) {
                try {
                    Component()
                } catch (e) {
                    console.error(e)
                }
            }
        }

        if (typeof route.meta.prefetch === 'function') {
            route.meta.prefetch(route)
        }

        // Prefetch addtional files
        prefetchFiles((route.meta.prefetchFiles as string[]) || [])
    }

    function prefetchFiles(files: string[]) {
        for (const file of files) {
            prefetch(file)
        }
    }

    return { prefetchRoute, prefetchFiles }
}

function getRouteComponents(route: ReturnType<Router['resolve']>) {
    return route.matched
        .map((record) => {
            if (record.components) {
                return Object.values(record.components)
            } else {
                return undefined
            }
        })
        .flat()
        .filter((Component) => {
            return typeof Component === 'function' && !('cid' in Component)
        }) as (() => Promise<RouteComponent>)[]
}
