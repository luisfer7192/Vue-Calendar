import Vue from 'vue'
import Vuex from 'vuex'

// import puzzles from './modules/puzzles'
// import rules from './modules/rules'

import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations, // global mutations
  modules: {
    // puzzles: puzzles, // there are examples to follow
    // rules: rules
  }
})
