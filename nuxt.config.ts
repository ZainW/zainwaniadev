export default defineNuxtConfig({
  extends: '@nuxt-themes/alpine',
  modules: [
  '@nuxtjs/plausible'
  ],
  plausible: {
    domain: 'zainwania.dev'
  }
})
