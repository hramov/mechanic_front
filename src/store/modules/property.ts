import axios from 'axios';
import { Commit } from 'vuex';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IState {
    property: [];
}

export default {
    state: {
        property: []
    },
    mutations: {
        propertyMutation(state: IState, data: any) {
            state.property = data;
        }
    },
    actions: {
        async getProperty(commit: Commit) {
            const result = await axios.get('http://localhost:3000/property');
            commit('propertyMutation', result.data);
        }
    },
    getters: {
        propertyGetter: function (state: IState) {
            return state.property;
        }
    }
}