import API from './base';

export const getListProject = (  ) => {
    return API.get('/project');
}

export const getProjectType = (  ) => {
    return API.get('/projectType');
}


export default {
    getListProject,
    getProjectType
}