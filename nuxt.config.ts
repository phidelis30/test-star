// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://api-starevaluator.com/widget-star-evaluator",
        },
      ],
      script: [
        {
          src: "https://api-starevaluator.com/widget-star-evaluator-js",
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
    },
  },
});
