import {callApi} from "../api/index.js";
import {action, configure, observable} from "mobx";
configure({enforceActions: 'observed'});

export default class BaseStore {
    @observable pending = false;

    @action.bound callApi = async (method, data) => {
        this.startAppLoading();
        const result = await callApi(method, data);
        this.stopAppLoading();
        return result;
    };

    @action startAppLoading = () => {
        this.pending = true;
    };

    @action stopAppLoading = () => {
        this.pending = false;
    };
}
