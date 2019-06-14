import API from './base';

class WorkflowApi {
    getWorkflowList = (params) => {
        return API.get('/workflow/list', {params});
    }
    addStep = (data) => {
        return API.post('/workflow', data)
    }
}

const workflowApi = new WorkflowApi()

export default workflowApi