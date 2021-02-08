import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    property: [],
    distance: [],
    position: [],
    department: [],
    device: [],
    employees: [],
    stationProperty: [],
    singleProperty: {},
    operatedProperty: [],
    singleStation: {},
    singleWorker: {},

    APIURL: 'http://localhost:3000',

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
    OperatedPropertyMutation(state, data) {
      state.operatedProperty = data;
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
      state.employees = data;
    },
    SinglePropertyMutation(state, data) {
      state.singleProperty = data;
    },
    SingleStationMutation(state, data) {
      state.singleStation = data;
    },
    SingleWorkerMutation(state, data) {
      state.singleWorker = data;
    }
  },
  actions: {
    async getProperty({ commit }) {
      const result = await axios.get(`${this.state.APIURL}/property`);
      commit('propertyMutation', result.data);
    },
    async getPropertyForStation({ commit }, id: number) {
      const result = await axios.get(`${this.state.APIURL}/property/station/${id}`);
      commit('propertyStationMutation', result.data);
    },
    async getSingleProperty({ commit }, id: number) {
      const result = await axios.get(`${this.state.APIURL}/property/${id}`);
      commit('SinglePropertyMutation', result.data);
    },
    async getOperatedProperty({ commit }) {
      const result = await axios.get(`${this.state.APIURL}/property/operated`);
      commit('OperatedPropertyMutation', result.data);
    },
    async getSingleStation({ commit }, id: number) {
      const result = await axios.get(`${this.state.APIURL}/distance/station/${id}`);
      commit('SingleStationMutation', result.data);
    },
    async getSingleWorker({ commit }, id: number) {
      const result = await axios.get(`${this.state.APIURL}/admin/employee/${id}`);
      commit('SingleWorkerMutation', result.data);
    },
    async getDistance({ commit }) {
      const result = await axios.get(`${this.state.APIURL}/distance`);
      commit('distanceMutation', result.data);
    },

    async getPosition({ commit }) {
      const result = await axios.get(`${this.state.APIURL}/admin/position`)
      commit('positionMutation', result.data)
    },
    async getDepartment({ commit }) {
      const result = await axios.get(`${this.state.APIURL}/admin/department`)
      commit('departmentMutation', result.data)
    },
    async getDevice({ commit }) {
      const result = await axios.get(`${this.state.APIURL}/admin/device`)
      commit('deviceMutation', result.data)
    },
    async getEmployees({ commit }) {
      const result = await axios.get(`${this.state.APIURL}/admin/employee`)
      console.log(result);
      commit('employeeMutation', result.data)
    },

    async loginAction({ commit }, { login, password }) {
      const result = await axios.post(`${this.state.APIURL}/auth/login`, { login: login, password: password });
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
      const result = await axios.post(`${this.state.APIURL}/admin/employee`, employee);
      if (result.data) {
        return {
          status: true,
          message: 'Пользователь успешно добавлен!'
        }
      }
    },
    async updateEmployee(_, { employee, id }) {
      const result = await axios.put(`${this.state.APIURL}/admin/employee/${id}`, employee);
      if (result.data) {
        return {
          status: true,
          message: 'Пользователь успешно обновлен!'
        }
      }
    },
    async deleteEmployee(_, id) {
      const result = await axios.delete(`${this.state.APIURL}/admin/employee/${id}`);
      if (result.data) {
        return {
          status: true,
          message: 'Пользователь успешно удален!'
        }
      }
    },

    async saveProperty(_, property) {
      const result = await axios.post(`${this.state.APIURL}/admin/property`, property);
      if (result.data) {
        return {
          status: true,
          message: 'Оборудование успешно добавлено!'
        }
      }
    },
    async updateProperty(_, { property, id }) {
      const result = await axios.put(`${this.state.APIURL}/admin/property/${id}`, property);
      if (result.data) {
        return {
          status: true,
          message: 'Оборудование успешно обновлено!'
        }
      }
    },
    async deleteProperty(_, id) {
      const result = await axios.delete(`${this.state.APIURL}/admin/property/${id}`);
      if (result.data) {
        return {
          status: true,
          message: 'Оборудование успешно удалено!'
        }
      }
    },

    async saveStation(_, station) {
      const result = await axios.post(`${this.state.APIURL}/admin/distance`, station);
      if (result.data) {
        return {
          status: true,
          message: 'Станция успешно добавлена!'
        }
      }
    },
    async updateStation(_, { station, id }) {
      const result = await axios.put(`${this.state.APIURL}/admin/distance/${id}`, station);
      if (result.data) {
        return {
          status: true,
          message: 'Станция успешно обновлена!'
        }
      }
    },
    async deleteStation(_, id) {
      const result = await axios.delete(`${this.state.APIURL}/admin/distance/${id}`);
      if (result.data) {
        return {
          status: true,
          message: 'Станция успешно удалена!'
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
    employeesGetter: state => state.employees,
    stationPropertyGetter: state => state.stationProperty,
    singlePropertyGetter: state => state.singleProperty,
    operatedPropertyGetter: state => state.operatedProperty,

    singleStationGetter: state => state.singleStation,
    singleWorkerGetter: state => state.singleWorker,
  }
})
