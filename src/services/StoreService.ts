import Vehicle from "../models/Vehicle";
import store from "../Store";

export default class StoreService {
    static setVehicle(vehicle: Vehicle): void {
        store.commit('changeVehicle', vehicle);
    }

    static getVehicle(): Vehicle {
        return store.getters.selectedVehicle;
    }
}
