import {config} from "dotenv";

export const state = () => ({
  offers: [],
  offersFavorites: [],
  offer: {},
  infos: []
})

export const mutations = {
  AddOffer(state, offer) {
    state.offer = offer
  },
  AddOffers(state, offers) {
    state.offers = offers
  },
  AddFavorites(state, offersFavorites) {
    state.offersFavorites = offersFavorites
  },
  AddInfos(state, infos) {
    state.infos = infos
  }
}

export const getters = {
  offer(state) {
    return state.offer
  },
  offers(state) {
    return state.offers
  },
  offersFavorites(state) {
    return state.offersFavorites
  },
  infos(state) {
    return state.infos
  }
}

export const actions = {
  getOffers({commit}, {page, city, category, subcategory}) {
    this.$axios.post('/offers?page=' + page, {city, category, subcategory}).then(res => {
      console.log(res.data)

      commit('AddOffers', res.data.data)
      commit('AddInfos', res.data)
    })
  },
  getFavorites({commit}) {
    this.$axios.get('/auth/favorites').then(res => {
      commit('AddFavorites', res.data)
    })
  },
  async getOffer({commit}, slug) {
    await this.$axios.get('/offer/' + slug).then(res => {
      commit('AddOffer', res.data)
    })
  }
}
