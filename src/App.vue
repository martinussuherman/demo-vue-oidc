<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <a v-if="oidcIsAuthenticated" href @click.prevent="signOut">Sign out - {{ oidcUser.email }}</a>
    </div>

    <router-view/>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex'
import { Component, Vue } from 'vue-property-decorator'
import { VuexOidcStoreActions, VuexOidcStoreGetters } from 'vuex-oidc'
import { Profile } from 'oidc-client'

/** https://stackoverflow.com/questions/60099323/how-to-use-mapactions-with-vue-typescript-class-component */
@Component({
  computed: {
    ...mapGetters(
      'oidcStore',
      {
        oidcIsAuthenticated: 'oidcIsAuthenticated',
        oidcUser: 'oidcUser'
      }
    )
  },
  methods: {
    ...mapActions(
      'oidcStore',
      {
        authenticateOidcPopup: 'authenticateOidcPopup',
        removeOidcUser: 'removeOidcUser',
        signOutOidc: 'signOutOidc'
      }
    )
  }
})

export default class App extends Vue {
  oidcIsAuthenticated!: VuexOidcStoreGetters['oidcIsAuthenticated'];

  /** oidcUser in vuex-oidc returns any  */
  // oidcUser!: VuexOidcStoreGetters['oidcUser'];
  oidcUser!: Profile;

  authenticateOidcPopup!: VuexOidcStoreActions['authenticateOidcPopup'];

  /** removeOidcUser in vuex-oidc returns void  */
  // signOutOidc!: VuexOidcStoreActions['signOutOidc'];
  signOutOidc!: (payload?: object) => Promise<void>;

  /** removeOidcUser in vuex-oidc returns void  */
  //  removeOidcUser!: VuexOidcStoreActions['removeOidcUser'];
  removeOidcUser!: () => Promise<void>;

  hasAccess () {
    return this.oidcIsAuthenticated || this.$route.meta.isPublic
  }

  signOut () {
    this.signOutOidc().then(() => {
      this.$router.push('/')
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
