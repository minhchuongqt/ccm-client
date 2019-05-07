import API from './base';

class IssueApi {
    constructor() {}

    getIssueList = (  ) => {
        return API.get('/issue/listIssues');
    }
    
    
    createIssue = (data) => {
        return API.post('/issue', data)
    }
}

const sprintApi = new IssueApi()

export default sprintApi