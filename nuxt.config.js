require('dotenv').config()
const ENV = process.env.EXT_ENV
export default {
  globalName: 'app',
  globals: {
    id: (globalName) => globalName,
  },
  srcDir: './src',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pc template',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [],
  },
  // runtime env webpack define
  env: {
    EXT_ENV: ENV,
  },
  // loadingIndicator
  loadingIndicator: {
    name: 'three-bounce',
    color: '#3B8070',
    background: 'white',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['ant-design-vue/dist/antd.css', '~/assets/styles/common.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui', '@/plugins/axios', '@/plugins/error-catch'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    [
      '@nuxtjs/dotenv',
      {
        /* module options */
        filename: `../.env.${ENV}`,
      },
    ],
    '@nuxtjs/composition-api/module',
    '@nuxtjs/device',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Router config
  router: {
    base: '/',
  },

  // Server Configuration
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
}
