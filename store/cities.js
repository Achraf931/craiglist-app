export const state = () => ({
  cities: []
})

export const mutations = {
  AddCity(state, city) {
    state.city = city
  },
  AddCities(state, cities) {
    state.cities = cities
  }
}

export const getters = {
  city(state) {
    return state.city
  },
  cities(state) {
    return state.cities
  }
}

export const actions = {
  getCities({commit}) {
    this.$axios.get('/cities').then(res => {
      commit('AddCities', res.data)
    })
  }
}
