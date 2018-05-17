import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

import * as favoriteMutations from './modules/favorites/mutations'
import * as favoriteActions from './modules/favorites/actions'

Vue.use(Vuex)

const mutations = {}
_.merge(mutations, favoriteMutations)

const actions = {}
_.merge(actions, favoriteActions)

const store = new Vuex.Store({
  state: {
    favorites: []
  },
  mutations,
  actions
})

export default store
