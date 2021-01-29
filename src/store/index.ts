import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    property: [],
    distance: []
  },
  mutations: {
    propertyMutation(state, data) {
      state.property = data;
    },
    distanceMutation(state, data) {
      state.distance = data;
    }
  },
  actions: {
    async getProperty({ commit }) {
      const result = await axios.get('http://localhost:3000/property');
      commit('propertyMutation', result.data);
    },
    async getDistance({ commit }) {
      const result = await axios.get('http://localhost:3000/distance');
      commit('distanceMutation', result.data);
    }
  },
  getters: {
    propertyGetter: state => state.property,
    distanceGetter: state => state.distance
  }
})
