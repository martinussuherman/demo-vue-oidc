<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item to="/">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item to="/about">
              <v-list-item-icon>
                <v-icon>mdi-about</v-icon>
              </v-list-item-icon>
              <v-list-item-title>About (Protected Page)</v-list-item-title>
            </v-list-item>

            <v-list-item v-if="oidcIsAuthenticated" @click.prevent="signOut">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sign out - {{ oidcUser.email }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <router-view/>
   </v-main>
  </v-app>
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
  drawer = false

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

  toggleDrawer () {
    this.drawer = !this.drawer
  }
}
</script>
