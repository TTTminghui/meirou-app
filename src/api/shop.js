import axios from './axios';

function queryShopType(name) {
    console.log(name);

    return axios.get('/shop', {
        params: {
            name: name
        }
    });
}

export default {
    queryShopType
};