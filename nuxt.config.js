var url = 'http://processcreative.tv'
var title = 'ProcessCreative'
var desc = 'We are an agency rooted in film production. Our in-house team of directors, designers and producers is eqquiped to serve individuals, agencies and brands with creative solutions.'
var unfurl = `${url}/unfurl.jpg`
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ProcessCreative.Tv',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: desc }
      { name: 'theme-color', content: '#ffffff' },
      { name: 'robots', content: 'all' },
      { property: 'og:url', content: url },
      { property: 'og:image', content: unfurl },
      { property: 'og:title', content: title },
      { property: 'og:description', content: desc },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:domain', value: url },
      { name: 'twitter:title', value: title },
      { name: 'twitter:description', value: desc },
      { name: 'twitter:image', content: unfurl },
      { name: 'twitter:url', value: url }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'image_src', href: unfurl },
      { rel: 'mask-icon', color: '#ffffff', href: '/safari-pinned-tab.svg' },
      { rel: 'manifest', href: '/manifest.json' }
    ],
    script: [
      {
        src: '//fast.wistia.com/assets/external/E-v1.js',
        async: true
      }
    ]
  },
  css: [
    { src: '~assets/styles/main.scss', lang: 'scss' }
  ],
  loading: { color: '#ffffff' },
  /*
  ** Add modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  plugins: [
    { src: `~plugins/vue-lazyload`, ssr: false },
    { src: `~plugins/vue-smooth-scroll`, ssr: false },
    { src: `~plugins/vue-scroll-reveal`, ssr: false }
  ],
  router: {
    middleware: ['toggleMobileNav']
  },
  build: {
    // Load plugins in build
    vendor: ['axios', 'storyblok-vue', 'vue-lazyload', 'vue-smooth-scroll', 'vue-scroll-reveal'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  }
}
