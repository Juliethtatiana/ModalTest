// https://nuxt.com/docs/api/configuration/nuxt-config

import Lara from "@primevue/themes/Lara";
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,

  imports: {
    dirs: [
      "composables",
      "composables/*/index.{ts,js,mjs,mts}",
      "composables/**",
    ],
  },

  // css
  css: ["@/assets/main.scss"],

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_URL,
    },
  },

  // modules
  modules: ["@primevue/nuxt-module", "@pinia/nuxt"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // primevue
  primevue: {
    usePrimeVue: true,
    options: {
      ripple: true,
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: "",
        },
      },
    },

    components: {
      include: ["Dialog", "InputText", "Button", "Message", "Checkbox"],
    },
  },
});
