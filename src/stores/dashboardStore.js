import {observable, action, configure} from "mobx";
import BaseStore from "./baseStore.js";
configure({enforceActions: 'observed'});

export class DashboardStore extends BaseStore{

    @observable stat = {};

    @observable regInfo = [];
    @observable regInfoReady = false;

    @action.bound fetchStat = async () => {
        const statResponse = await this.callApi('fetchStat');
        this.stat = statResponse;
        console.log(statResponse);
        // eslint-disable-next-line array-callback-return
        // Object.keys(statResponse.data.registrations).map(key => {
        //     let item = {date: key, count: parseInt(statResponse.data.registrations[key])};
        //     this.regInfo.push(item);
        // });
        // this.regInfoReady = true;
    };
}
