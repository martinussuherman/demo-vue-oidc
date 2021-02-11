import Vue from 'vue'
import VueRouter, { NavigationGuard, RouteConfig } from 'vue-router'
import { vuexOidcCreateRouterMiddleware } from 'vuex-oidc'
import { configureVuexStore } from '@/store'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import OidcCallback from '@/views/OidcCallback.vue'
import OidcPopupCallback from '@/views/OidcPopupCallback.vue'
import OidcCallbackError from '@/views/OidcCallbackError.vue'

export type VuexOidcRouteConfig = RouteConfig & {
  meta?: {
    isPublic?: boolean;
    isOidcCallback?: boolean;
  };
}

async function createOidcRoute (): Promise<NavigationGuard<Vue>> {
  return vuexOidcCreateRouterMiddleware(await configureVuexStore(), 'oidcStore')
}

export async function configureRouter () {
  Vue.use(VueRouter)

  const routes: Array<VuexOidcRouteConfig> = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        isPublic: true
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/oidc-callback', // Needs to match redirect_uri in you oidcSettings
      name: 'OidcCallback',
      component: OidcCallback,
      meta: {
        isOidcCallback: true
      }
    },
    {
      path: '/oidc-popup-callback', // Needs to match popupRedirectUri in you oidcSettings
      name: 'oidcPopupCallback',
      component: OidcPopupCallback,
      meta: {
        isOidcCallback: true
      }
    },
    {
      path: '/oidc-callback-error',
      name: 'oidcCallbackError',
      component: OidcCallbackError,
      meta: {
        isPublic: true
      }
    }
  ]

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

  router.beforeEach(await createOidcRoute())
  return router
}
