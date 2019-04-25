import API from './base';

class SprintApi {
    constructor() {}

    getListSprint = (  ) => {
        return API.get('/sprint');
    }
    
    createSprint = (data) => {
        return API.post('/sprint', data)
    }
}

const sprintApi = new SprintApi()

export default sprintApi