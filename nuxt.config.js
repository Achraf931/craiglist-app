let env = require('dotenv').config()

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Craiglist',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.gstatic.com">\n' +
          '<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap' }
    ]
  },

  loading: false,

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-agile',
    '~/plugins/vue-glide'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    icons: {
      solid: [
        'faTimes',
        'faHome',
        'faUserPlus',
        'faSignInAlt',
        'faSearch',
        'faSignOutAlt',
        'faUserAlt',
        'faPlus',
        'faChevronLeft',
        'faChevronRight',
        'faHeart'
      ],
      regular: true
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: env.parsed.API_URL,
    credentials: false
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login:{
            url: 'auth/signin',
            method: 'post',
            propertyName: 'data.token'
          },
          user:{
            url: 'auth/me',
            method: 'get',
            propertyName: 'data'
          },
          logout:{
            url: 'auth/signout',
            method: 'post'
          }
        }
      }
    }
  },

  router: {
    linkExactActiveClass: 'exact-active-link',
    extendRoutes(routes, resolve) {
      return [
        {
          name: 'index',
          path: '/',
          component: resolve(__dirname, 'pages/index.vue'),
          chunkName: 'pages/index'
        },
        {
          name: 'favorites',
          path: '/favorites',
          component: resolve(__dirname, 'pages/favorites.vue'),
          chunkName: 'pages/favorites'
        },
        {
          name: 'auth-signin',
          path: '/signin',
          component: resolve(__dirname, 'pages/auth/signin.vue'),
          chunkName: 'pages/auth/signin'
        },
        {
          name: 'auth-register',
          path: '/register',
          component: resolve(__dirname, 'pages/auth/register.vue'),
          chunkName: 'pages/auth/register'
        },
        {
          name: 'city',
          path: '/:city',
          component: resolve(__dirname, 'pages/city.vue'),
          chunkName: 'pages/city'
        },
        {
          name: 'category',
          path: '/:city/:category',
          component: resolve(__dirname, 'pages/categories.vue'),
          chunkName: 'pages/categories'
        },
        {
          name: 'subcategory',
          path: '/:city/:category/:subcategory',
          component: resolve(__dirname, 'pages/subcategories.vue'),
          chunkName: 'pages/subcategories'
        },
        {
          name: 'offerWithoutSub',
          path: '/:city/:category/:offer',
          component: resolve(__dirname, 'pages/offer.vue'),
          chunkName: 'pages/offer'
        },
        {
          name: 'offer',
          path: '/:city/:category/:subcategory/:offer',
          component: resolve(__dirname, 'pages/offer.vue'),
          chunkName: 'pages/offer'
        },
        {
          name: 'user-dashboard',
          path: '/user/dashboard',
          component: resolve(__dirname, 'pages/user/dashboard.vue'),
          chunkName: 'pages/user/dashboard'
        },
        {
          name: 'admin-dashboard',
          path: '/admin/dashboard',
          component: resolve(__dirname, 'pages/admin/dashboard.vue'),
          chunkName: 'pages/admin/dashboard'
        }
        ]
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
      }
    },
    transpile: ['vue-agile', 'vue-glide']
  }
}
