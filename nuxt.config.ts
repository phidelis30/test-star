// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          src: "http://starevaluator.com/assets/js/widget-micro-button.js",
          type: "text/javascript",
          defer: true,
        },
        {
          src: "http://starevaluator.com/assets/js/widget-micro-combo.js",
          type: "text/javascript",
          defer: true,
        },
        {
          src: "http://starevaluator.com/assets/js/widget-micro-star-score.js",
          type: "text/javascript",
          defer: true,
        },
        {
          src: "http://starevaluator.com/assets/js/widget-mini.js",
          type: "text/javascript",
          defer: true,
        },
        {
          src: "http://starevaluator.com/assets/js/widget-starter.js",
          type: "text/javascript",
          defer: true,
        },
        {
          src: "http://starevaluator.com/assets/js/widget-micro-star.js",
          type: "text/javascript",
          defer: true,
        },
        {
          src: "http://starevaluator.com/assets/js/widget-horizontal.js",
          type: "text/javascript",
          defer: true,
        },
        {
          src: "http://starevaluator.com/assets/js/widget-micro-review-count.js",
          type: "text/javascript",
          defer: true,
        },
        {
          src: "http://starevaluator.com/assets/js/widget-star-note.js",
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
