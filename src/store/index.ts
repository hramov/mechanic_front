import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    property: [],
    distance: [],
    user: JSON.parse(localStorage.getItem('user') || '{}'),
    token: JSON.parse(localStorage.getItem('token') || '{}')
  },
  mutations: {
    propertyMutation(state, data) {
      state.property = data;
    },
    distanceMutation(state, data) {
      state.distance = data;
    },
    userMutation(state, data) {
      state.user = data;
    },
    tokenMutation(state, data) {
      state.token = data;
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
    },
    async loginAction({ commit }, { login, password }) {
      const result = await axios.post('http://localhost:3000/auth/login', { login: login, password: password });
      let user = {};
      let token = '';

      if (result.data.token) {
        user = result.data.user;
        token = result.data.token;
      }

      commit('userMutation', user);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', JSON.stringify(token));
    }
  },
  getters: {
    propertyGetter: state => state.property,
    distanceGetter: state => state.distance,
    userGetter: state => state.user,
    tokenGetter: state => state.token,
  }
})
