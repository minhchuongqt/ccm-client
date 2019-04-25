import API from './base';

export const getIssueList = (  ) => {
    return API.get('/issue');
}

export const getIssueType = (  ) => {
    return API.get('/issueType');
}


export default {
    getListProject,
    getProjectType
}