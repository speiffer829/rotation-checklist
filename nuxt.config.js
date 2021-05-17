export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "rotation-checklist",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  router: {
    middleware: ['auth']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyCPvASeAr1pO4Ez63-q1-zJEqrXJ_Tqop0",
          authDomain: "rotation-checklist.firebaseapp.com",
          projectId: "rotation-checklist",
          storageBucket: "rotation-checklist.appspot.com",
          messagingSenderId: "772489583908",
          appId: "1:772489583908:web:e4d9361a0eb8d463b367b1",
          measurementId: "G-PMWDE2CJPX"
        },
        services: {
          auth: {
            persistence: "local", // default
            initialize: {
              onAuthStateChangedAction: "onAuthStateChangedAction",
              subscribeManually: false
            },
            ssr: false,
          }
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
