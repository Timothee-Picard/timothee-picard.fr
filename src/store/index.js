import { createStore } from 'vuex'

export default createStore({
  state: {
    toast: {
      state: false,
      error: false,
      message: 'Default message'
    }
  },
  getters: {
    toast(state) {
      return state.toast
    }
  },
  mutations: {
    openToast(state, data) {
      if (!data) data = {error:null,message:null}
      if (data.error) state.toast.error = data.error
      else state.toast.error = false
      if (data.message) state.toast.message = data.message
      else state.toast.message = 'Default message'
      state.toast.state = true
      setTimeout(()=> {
        this.commit("closeToast")
      },7000)
    },
    closeToast(state) {
      state.toast.state = false
    }
  },
  actions: {
  },
  modules: {
  }
})
