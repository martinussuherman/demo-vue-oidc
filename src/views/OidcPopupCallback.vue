<template>
  <div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { User } from 'oidc-client'

const oidcStore = namespace('oidcStore')

@Component
export default class OidcPopupCallback extends Vue {
  @oidcStore.Action
  public oidcSignInPopupCallback!: (url?: string) => Promise<User | undefined>

  created () {
    this.oidcSignInPopupCallback()
      .then((user) => {
        console.log(user?.profile.name)
      })
      .catch((err) => {
        console.error(err)
        this.$router.push('/signin-oidc-error') // Handle errors any way you want
      })
  }
}
</script>
