import { GET_LIST_WORKFLOW, CREATE_STEP } from '../constants/types/workflow';
import WorkflowApi from '../api/workflowApi';

export const getWorkflowList = (data) => dispatch => {
    WorkflowApi.getWorkflowList(data).then(res => {
        if (res.data) {
            dispatch({ type: GET_LIST_WORKFLOW, payload: res.data.data })
        }
    })
}
export const addStep = (data) => dispatch => {
    WorkflowApi.addStep(data).then(res => {
        if(res.data) {
            dispatch({type: CREATE_STEP, payload: res.data.data})
        }
    })
}
