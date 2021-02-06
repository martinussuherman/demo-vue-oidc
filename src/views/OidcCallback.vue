<template>
  <div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const oidcStore = namespace('oidcStore')

@Component
export default class OidcCallback extends Vue {
  @oidcStore.Action
  public oidcSignInCallback!: (url?: string) => Promise<string>

  created () {
    this.oidcSignInCallback()
      .then((redirectPath) => {
        this.$router.push(redirectPath)
      })
      .catch((err) => {
        console.error(err)
        this.$router.push('/signin-oidc-error') // Handle errors any way you want
      })
  }
}
</script>
