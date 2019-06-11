import API from './base';

class ProjectApi {

    getListProject = (  ) => {
        return API.get('/project');
    }
    
    getProjectType = (  ) => {
        return API.get('/projectType');
    }
    
    createProject = (data) => {
        return API.post('/project', data)
    }
    deleteProject = (id) => {
        return API.remove('/project/' + id)
    }
}

const projectApi = new ProjectApi()

export default projectApi