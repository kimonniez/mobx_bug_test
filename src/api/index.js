import axios from 'axios';
// import {getQueryString} from "../helpers";

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/';

const apiClient = axios.create({
    baseURL: apiUrl,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-Data-Token': 'testdatatoken'
    }
});

const callApi = async (method, values = false) => {
    try {
        return await methodsList[method](values);//
    } catch (error) {
        console.log('api method not found');
        console.log(error);
    }
};

const methodsList = {
    fetchStat: async () => {
        try {
            const response = await apiClient.get('/');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export {
    callApi
};
