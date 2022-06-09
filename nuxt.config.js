import colors from "vuetify/es5/util/colors";

export default {
  target: 'static',
  ssr: false,
  head: {
    titleTemplate: "%s - MADFest",
    title: "MADFest",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { name: "title", content: "MADFest"},
      { name: "description", content: "MADFest is a Mobile Application Development competition organized by the Department of SE & CS in FOC, NSBM with IEEE CS Chapter of NSBM."},
      { name: "keywords", content: "Mobile,Hackathon,Developement,Competition,NSBM,IEEE"},
      { name: "robots", content: "index, follow"},
      { name: "language", content: "English"},
      { name: "revisit-after", content: "2 days"},

    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    font: {
      family: 'Poppins'
    },
    theme: {
      dark: false,

      themes: {
        light: {
          primary: "#125596", //colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: "#32ad4a", //colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  loading: {
    color: 'white',
    height: '5px'
  },


  generate: {
    dir: 'docs'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
    extractCSS: true,
  }
}
