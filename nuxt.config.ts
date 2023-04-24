export default defineNuxtConfig({
  extends: '@nuxt-themes/alpine',
  modules: [
  '@nuxtjs/plausible',
  '@nuxthq/studio'
  ],
  plausible: {
    domain: 'zainwania.dev'
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: ''
  },
  app: {
    head: {
      htmlAttrs:{
        lang: 'en'
      },
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Zain Wania',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Personal Site' }
      ],
    }
  }
})
