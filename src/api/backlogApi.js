import API from './base';

class BacklogApi {
    constructor() {}

    getListSprint = (params) => {
        return API.get('/sprint/notComplete', {params});
    }

    getListBacklogIssue = (params) => {
        return API.get('/issue/listIssues', {params});
    }
    
    createSprint = (data) => {
        return API.post('/sprint', data)
    }
}

const backlogApi = new BacklogApi()

export default backlogApi