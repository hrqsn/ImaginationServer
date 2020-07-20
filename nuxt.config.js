require('dotenv').config()
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Imagination Server✨',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'MinecraftBEで東京ディズニーリゾート完全再現プロジェクト' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Imagination Server' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://imaginationserver.com' },
      { hid: 'og:title', property: 'og:title', content: 'Imagination Server' },
      { hid: 'og:description', property: 'og:description', content: 'MinecraftBEで東京ディズニーリゾート完全再現プロジェクト' },
      { hid: 'og:image', property: 'og:image', content: 'https://user-images.githubusercontent.com/25542189/87313085-61669f80-c55c-11ea-8edf-fdffef4435d8.png' },
      { name: 'twitter:card', content: 'summary' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [{ src: '~/assets/scss/main.scss', lang: 'scss' }],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    '@nuxtjs/dotenv',
    ['@nuxtjs/google-analytics', {
      id: process.env.GTAG
    }]
  ],
  webfontloader: {
    google: {
      families: ['Montserrat:wght@600;800&display=swap']
    }
  },
  styleResources: {
    scss: ['./assets/scss/modules/*.scss']
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
