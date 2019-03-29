import API from './base';

export const register = (path, data) => {
    return API.post(path, data);
}

export default {
    register,
}