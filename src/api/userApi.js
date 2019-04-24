import API from './base';

export const getUserInfo = ( ) => {
    return API.get('/user');
}

export default {
    getUserInfo,
}