import axios from './axios';

function queryRecom() {
    return axios.get('/reconmhop');
}

export default {
    queryRecom
};