import API from './base';

export const login = ( data ) => {
    return API.post('/auth/login', data);
}

// export const login = ( data ) => {
//     return API.get('/auth/login', data);
// }

export default {
    login,
}