import API from './base';

class IssueApi {
    constructor() {}

    getIssueList = (params) => {
        return API.get('/issue/listIssues', {params});
    }
    
    
    createIssue = (data) => {
        return API.post('/issue', data)
    }

    getIssueType = (  ) => {
        return API.get('/issueType');
    }
    
}

const sprintApi = new IssueApi()

export default sprintApi