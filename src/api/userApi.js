import API from './base';

export const getUserInfo = ( ) => {
    return API.get('/user');
}

const getListUser = (params) => {
    return API.get('/user/list', {params})
}

export default {
    getUserInfo,
    getListUser
}