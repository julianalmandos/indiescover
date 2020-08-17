import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: '',
    userInformation: []
  },
  mutations: {
    setToken(state, token) {
      state.accessToken = token;
    },
    setUserInformation(state, userInformation) {
      state.userInformation = userInformation;
    }
  },
  actions: {
  },
  modules: {
  }
})
