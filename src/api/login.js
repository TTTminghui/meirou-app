import axios from './axios';

function queryLogin(type = 'phone', name = '', password = '') {
    return axios.post('/login', {
        type,
        name,
        password
    });
}

function queryLoginAgin(name = '', isTrue = false) {
    return axios.get('/logins', {
        name,
        isTrue
    });
}

export default {
    queryLogin,
    queryLoginAgin
};