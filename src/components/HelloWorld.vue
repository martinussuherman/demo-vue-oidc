<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ msg }}
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank">
            Discord Community
          </a>
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-row justify="center">
          <a
            v-for="(item, index) in whatsNext"
            :key="index"
            :href="item.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ item.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <v-row justify="center">
          <a
            v-for="(link, index) in importantLinks"
            :key="index"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-row justify="center">
          <a
            v-for="(eco, index) in ecosystem"
            :key="index"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { VContainer, VRow, VCol, VImg } from "vuetify/lib";

@Component({
  components: {
    VContainer,
    VRow,
    VCol,
    VImg,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  ecosystem = [
    {
      text: "vuetify-loader",
      href: "https://github.com/vuetifyjs/vuetify-loader",
    },
    {
      text: "github",
      href: "https://github.com/vuetifyjs/vuetify",
    },
    {
      text: "awesome-vuetify",
      href: "https://github.com/vuetifyjs/awesome-vuetify",
    },
  ];

  importantLinks = [
    {
      text: "Documentation",
      href: "https://vuetifyjs.com",
    },
    {
      text: "Chat",
      href: "https://community.vuetifyjs.com",
    },
    {
      text: "Made with Vuetify",
      href: "https://madewithvuejs.com/vuetify",
    },
    {
      text: "Twitter",
      href: "https://twitter.com/vuetifyjs",
    },
    {
      text: "Articles",
      href: "https://medium.com/vuetify",
    },
  ];

  whatsNext = [
    {
      text: "Explore components",
      href: "https://vuetifyjs.com/components/api-explorer",
    },
    {
      text: "Select a layout",
      href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
    },
    {
      text: "Frequently Asked Questions",
      href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
    },
  ];
}
</script>
