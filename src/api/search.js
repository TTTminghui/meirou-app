import axios from './axios';

function querySearch(name) {
    console.log(name);

    return axios.get('/search', {
        params: {
            name: name
        }
    });
}

export default {
    querySearch
};