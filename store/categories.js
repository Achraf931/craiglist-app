export const state = () => ({
  categories: [],
  category: {}
})

export const mutations = {
  AddCategory(state, category) {
    state.category = category
  },
  AddCategories(state, categories) {
    state.categories = categories
  }
}

export const getters = {
  category(state) {
    return state.category
  },
  categories(state) {
    return state.categories
  }
}

export const actions = {
  getCategories({commit}) {
    this.$axios.get('/categories').then(res => {
      commit('AddCategories', res.data)
    })
  }
}
