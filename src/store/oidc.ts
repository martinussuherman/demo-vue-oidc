import { vuexOidcCreateStoreModule } from 'vuex-oidc'
import { getRuntimeOidcConfig } from '@/config/oidc'

// NOTE: If you want to customize how tokens are stored you can use WebStorageStateStore from oidc-client (see bellow)
// Default storage is window.localStorage
// import { WebStorageStateStore } from 'oidc-client'

export async function configureVuexOidc () {
  const oidcStore = vuexOidcCreateStoreModule(
    await getRuntimeOidcConfig(),
    // NOTE: If you do not want to use localStorage for tokens, in stead of just passing oidcSettings, you can
    // spread your oidcSettings and define a userStore of your choice
    // {
    //   ...oidcSettings,
    //   userStore: new WebStorageStateStore({ store: window.sessionStorage })
    // },

    // Optional OIDC store settings
    {
      namespaced: true,
      dispatchEventsOnWindow: true
    },

    // Optional OIDC event listeners
    {
      userLoaded: (user) => window.console.log('OIDC user is loaded:', user),
      userUnloaded: () => window.console.log('OIDC user is unloaded'),
      accessTokenExpiring: () => window.console.log('Access token will expire'),
      accessTokenExpired: () => window.console.log('Access token did expire'),
      silentRenewError: () => window.console.log('OIDC user is unloaded'),
      userSignedOut: () => window.console.log('OIDC user is signed out'),
      oidcError: (payload) => window.console.log('OIDC error', payload),
      automaticSilentRenewError: (payload) => window.console.log('OIDC automaticSilentRenewError', payload)
    }
  )

  return oidcStore
}
