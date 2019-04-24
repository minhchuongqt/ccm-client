import API from './base';

export const getListProject = (  ) => {
    return API.get('/project');
}

export default {
    getListProject,
}