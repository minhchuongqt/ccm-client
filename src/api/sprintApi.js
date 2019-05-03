import API from './base';

class SprintApi {
    constructor() {}

    getListSprint = (params) => {
        return API.get('/sprint/notComplete', {params});
    }
    
    createSprint = (data) => {
        return API.post('/sprint', data)
    }
}

const sprintApi = new SprintApi()

export default sprintApi