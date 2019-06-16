import API from './base';

class WorkflowApi {
    getWorkflowList = (params) => {
        return API.get('/workflow/list', {params});
    }
    addStep = (data) => {
        return API.post('/workflow', data)
    }
    updateWorkflow = (id, data) => {
        return API.put('/workflow/' + id, data)
    }
    swapWorkflow = (data) => {
        return API.post('/workflow/swap', data)
    }
}
const workflowApi = new WorkflowApi()

export default workflowApi