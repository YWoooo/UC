export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ],
  },
  env:{
    ucapi: process.env.UCAPI
  },
  axios: {
    baseURL: process.env.ucapi,
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/api.ts',
    "~/plugins/message.ts",
    "~/plugins/vuetify.ts",
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
