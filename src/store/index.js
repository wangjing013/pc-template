const state = () => {
  return {
    isLogin: false,
    userInfo: null,
  }
}

const mutations = {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  },
  setLoginStatus(state, status) {
    state.isLogin = status
  },
}

const actions = {
  nuxtServerInit({ commit }, { app }) {
    const userInfo = app.$cookies.get('token')
    if (userInfo) {
      commit('setLoginStatus', true)
      commit('setUserInfo', userInfo)
    } else {
      commit('setLoginStatus', false)
      commit('setUserInfo', null)
    }
  },
  setUserInfo({ commit }, userInfo) {
    commit('setLoginStatus', true)
    commit('setUserInfo', userInfo)
  },
  loginOut({ commit }) {
    commit('setLoginStatus', false)
    commit('setUserInfo', null)
  },
}

export default {
  state,
  mutations,
  actions,
}
