<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <button
        v-if="oidcIsAuthenticated"
        @click="signOutOidc"
      >
        {{ oidcUser.profile.email }} - Logout
      </button>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { User } from 'oidc-client'

const oidcStore = namespace('oidcStore')

@Component
export default class App extends Vue {
  @oidcStore.Getter
  public oidcIsAuthenticated!: boolean

  @oidcStore.Getter
  public oidcUser!: User | null

  @oidcStore.Action
  public signOutOidc!: (payload?: object) => void
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
