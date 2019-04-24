import API from './base';

export const getGroupList = ( ) => {
    return API.get('/group');
}

export default {
    getGroupList,
}