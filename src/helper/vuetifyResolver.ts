import { ComponentResolver } from "vite-plugin-components";

/**
 * Resolver for Vuetify
 *
 * @link https://github.com/vuetifyjs/vuetify
 */
export const VuetifyResolver = (): ComponentResolver => (name: string) => {
  if (name.match(/^V[A-Z]/)) {
    return {
      name: name,
      importName: name,
      path: "vuetify/lib",
    };
  }
};
