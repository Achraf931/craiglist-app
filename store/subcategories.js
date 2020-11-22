export const state = () => ({
  subcategories: [],
  subcategory: {}
})

export const mutations = {
  AddSubCategory(state, subcategory) {
    state.subcategory = subcategory
  },
  AddSubCategories(state, subcategories) {
    state.subcategories = subcategories
  }
}

export const getters = {
  subcategory(state) {
    return state.subcategory
  },
  subcategories(state) {
    return state.subcategories
  }
}

export const actions = {
  getSubCategories({commit}, {category}) {
    this.$axios.post('/subcategories', {category: category}).then(res => {
      console.log(res.data)
      commit('AddSubCategories', res.data)
    })
  }
}
