import { createStore } from 'vuex';

const store = createStore({
    state () {
        return {
            selectedVehicle: Object,
        }
    },
    mutations: {
        changeVehicle(state: any, vehicle: any): void {
            state.selectedVehicle = vehicle;
        }
    },
    getters: {
        selectedVehicle(state) {
            return state.selectedVehicle;
        }
    }
});

export default store;