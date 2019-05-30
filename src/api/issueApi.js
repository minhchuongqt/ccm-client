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

    getListStoryPoint = (params) => {
        return API.get('/storyPoint' , {params});
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
    changeIssueWorkflow = (id, data) => {
        return API.put('/issue/' + id, data)
    }
    
}

const sprintApi = new IssueApi()

export default sprintApi