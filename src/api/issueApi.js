import API from './base';

class IssueApi {
    constructor() {}

    getIssueList = (params) => {
        return API.get('/issue/listIssues', {params});
    }
    
    
    createIssue = (data) => {
        return API.post('/issue', data)
    }
}

const sprintApi = new IssueApi()

export default sprintApi