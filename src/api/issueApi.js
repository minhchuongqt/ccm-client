import API from './base';

class IssueApi {
    constructor() {}

    getIssueList = (params) => {
        return API.get('/issue/listIssues', {params});
    }

    getIssueInfo = (id, params) => {
        return API.get('/issue/' + id , {params});
    }

    getListLabel = (params) => {
        return API.get('/label' , {params});
    }
    
    createIssue = (data) => {
        return API.post('/issue', data)
    }

    getIssueType = ( params ) => {
        return API.get('/issueType', {params});
    }

    getPriority = ( params ) => {
        return API.get('/priority', {params});
    }

    getListUserToAssign = (params) => {
        return API.get('/user/list', {params})
    }
    
}

const sprintApi = new IssueApi()

export default sprintApi