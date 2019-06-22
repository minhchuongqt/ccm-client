import API from './base';

export const getUserInfo = ( ) => {
    return API.get('/user');
}

const getListUser = (params) => {
    return API.get('/user/list', {params})
};

const getListEmail = (params) => {
    return API.get('/user/email', {params})
}

const inviteUser = (data) => {
    return API.post('/project/addMember', data)
}

const updateInfo = (data) => {
    return API.put('/user', data)
}

export default {
    getUserInfo,
    getListUser,
    getListEmail,
    inviteUser,
    updateInfo
}