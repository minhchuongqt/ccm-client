import API from './base';

export const getIssueList = (  ) => {
    return API.get('/issue');
}


export default {
    getIssueList
}