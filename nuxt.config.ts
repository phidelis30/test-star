// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          src: "https://res.cloudinary.com/rahato-mg/raw/upload/v1714565076/widget-micro-button_dbev2n.js",
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
