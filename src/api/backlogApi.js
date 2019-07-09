import API from './base';

class BacklogApi {

    getListSprint = (params) => {
        return API.get('/sprint/notComplete', {params});
    }
    getSprintActive = (params) => {
        return API.get('/sprint/board', {params});
    }
    getSprintActiveInfo = (params) => {
        return API.get('/sprint/active', {params});
    }
    getListBacklogIssue = (params) => {
        return API.get('/issue/listIssues', {params});
    }
    startSprint = (data) => {
        return API.post('/sprint/start', data)
    }
    completeSprint = (data) => {
        return API.post('/sprint/complete', data);
    }
    createSprint = (data) => {
        return API.post('/sprint', data)
    }
    getListAllSprint = (params) => {
        return API.get('/sprint', {params})
    }
    deleteSprint = (data) => {
        return API.remove('/sprint', data)
    }
}

const backlogApi = new BacklogApi()

export default backlogApi