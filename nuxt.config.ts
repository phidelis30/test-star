// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          src: "https://js-widget.pages.dev/widget-micro-button.js",
          type: "text/javascript",
          defer: true,
        },
      ],
      meta: [
        {
          name: "starevaluator_verified",
          content: "starevaluator-verified_yizerkkhjKJHKJoi",
        },
      ],
      htmlAttrs: { lang: "fr-FR" },
    },
  },
});
