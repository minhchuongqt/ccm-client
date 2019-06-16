import { GET_LIST_WORKFLOW, CREATE_STEP, UPDATE_WORKFLOW_STATUS, SWAP_WORKFLOW } from '../constants/types/workflow';
import WorkflowApi from '../api/workflowApi';
import {toast} from 'react-toastify'
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
export const swapWorkflow = (data) => dispatch => {
    WorkflowApi.swapWorkflow(data).then(res => {
        if(res.data) {
            dispatch({type: SWAP_WORKFLOW, payload: res.data.data})
        }
    })
}


export const updateWorkflow = (id, data) => dispatch => {
    WorkflowApi.updateWorkflow(id, data).then(res => {
        if(res.data) {
            if(res.data.error) {
                toast.error(res.data.error)
            } else {
                dispatch({type: UPDATE_WORKFLOW_STATUS, payload: res.data.success })
            }
        }
    })
}