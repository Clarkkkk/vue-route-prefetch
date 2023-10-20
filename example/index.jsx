import { createApp, h } from 'vue/dist/vue.esm-bundler'
import { createRouter, createWebHistory, RouterView } from 'vue-router'
import RoutePrefetch from '../src'
import Nav from './nav.vue'

const app = createApp({
    setup() {
        return () => h(RouterView)
    }
})

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: {
                render() {
                    return (
                        <div>
                            <h1>hi</h1>
                            <Nav />
                        </div>
                    )
                }
            }
        },
        {
            path: '/async-page',
            meta: {
                prefetch(route) {
                    console.log(route)
                }
            },
            component: () => import('./async-page.vue')
        }
    ]
})

app.use(router)
app.use(RoutePrefetch, {
    componentName: 'PrefetchLink'
})

window.pages = new Set()

const createPage = (id) => async () => {
    console.log(`fetching page ${id}`)
    window.pages.add(id)
    return {
        render() {
            return (
                <div>
                    <h1>page {id}</h1>
                    <Nav />
                </div>
            )
        }
    }
}

for (let i = 0; i < 6; i++) {
    router.addRoute({
        path: `/page/${i + 1}`,
        component: createPage(i + 1)
    })
}

app.mount('#app')
