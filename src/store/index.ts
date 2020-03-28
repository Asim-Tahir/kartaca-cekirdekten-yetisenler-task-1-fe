import Vue from 'vue'
import Vuex from 'vuex'

const {state} = require('./state');
const {getters} = require('./getters');
const {mutations} = require('./mutations');
const {actions} = require('./actions');

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,

	state,
	getters,
	mutations,	
  actions
})