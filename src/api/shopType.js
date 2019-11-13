import axios from './axios';

function queryShopType(name) {
    return axios.get('/shop', {
        params: {
            name: name
        }
    });
}

export default {
    queryShopType
};