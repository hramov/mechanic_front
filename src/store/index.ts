import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    property: [],
    distance: [],
    position: [],
    department: [],
    device: [],
    employee: [],
    stationProperty: [],

    user: JSON.parse(localStorage.getItem('user') || '{}'),
    token: JSON.parse(localStorage.getItem('token') || '{}')
  },
  mutations: {
    propertyMutation(state, data) {
      state.property = data;
    },
    propertyStationMutation(state, data) {
      state.stationProperty = data;
    },
    distanceMutation(state, data) {
      state.distance = data;
    },
    positionMutation(state, data) {
      state.position = data;
    },
    departmentMutation(state, data) {
      state.department = data;
    },
    deviceMutation(state, data) {
      state.device = data;
    },
    userMutation(state, data) {
      state.user = data;
    },
    tokenMutation(state, data) {
      state.token = data;
    },
    employeeMutation(state, data) {
      state.employee = data;
    }
  },
  actions: {
    async getProperty({ commit }) {
      const result = await axios.get('http://localhost:3000/property');
      commit('propertyMutation', result.data);
    },
    async getPropertyForStation({ commit }, id: number) {
      const result = await axios.get(`http://localhost:3000/property/station/${id}`);
      commit('propertyStationMutation', result.data);
    },
    async getDistance({ commit }) {
      const result = await axios.get('http://localhost:3000/distance');
      commit('distanceMutation', result.data);
    },

    async getPosition({ commit }) {
      const result = await axios.get('http://localhost:3000/admin/position')
      commit('positionMutation', result.data)
    },
    async getDepartment({ commit }) {
      const result = await axios.get('http://localhost:3000/admin/department')
      commit('departmentMutation', result.data)
    },
    async getDevice({ commit }) {
      const result = await axios.get('http://localhost:3000/admin/device')
      commit('deviceMutation', result.data)
    },
    async getEmployee({ commit }) {
      const result = await axios.get('http://localhost:3000/admin/employee')
      console.log(result);
      commit('employeeMutation', result.data)
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
    },

    async saveEmployee(_, employee) {
      const result = await axios.post('http://localhost:3000/admin/employee', employee);
      if (result.data) {
        return {
          status: true,
          message: 'Пользователь успешно добавлен!'
        }
      }
    },

    async saveProperty(_, property) {
      const result = await axios.post('http://localhost:3000/admin/property', property);
      if (result.data) {
        return {
          status: true,
          message: 'Оборудование успешно добавлено!'
        }
      }
    },
    async saveStation(_, station) {
      const result = await axios.post('http://localhost:3000/admin/distance', station);
      if (result.data) {
        return {
          status: true,
          message: 'Станция успешно добавлена!'
        }
      }
    }
  },
  getters: {
    propertyGetter: state => state.property,
    distanceGetter: state => state.distance,
    userGetter: state => state.user,
    tokenGetter: state => state.token,
    positionGetter: state => state.position,
    departmentGetter: state => state.department,
    deviceGetter: state => state.device,
    employeeGetter: state => state.employee,
    stationPropertyGetter: state => state.stationProperty,
  }
})
