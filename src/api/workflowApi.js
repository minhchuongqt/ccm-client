import API from './base';

class WorkflowApi {
    getWorkflowList = (params) => {
        return API.get('/workflow/list', {params});
    }
}

const workflowApi = new WorkflowApi()

export default workflowApi