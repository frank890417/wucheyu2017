import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    works: [],
    loading: true,
    userData: {},
    defaut_hashtags: [
      "Visual",
      // "UI/UX",
      "Hardware",
      // "Development",
      "Sound",
      "3D",
      // "Animation",
      // "Arts",
      // "Project"
    ]
  },
  mutations: {
    setUserData(state,value){
      state.userData=value
    },
    setWorks(state, value){
      state.works = value
      
    },
    setLoading(state,value){
      state.loading=value
    }
  }
})
