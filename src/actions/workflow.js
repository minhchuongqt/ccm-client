import { GET_LIST_WORKFLOW } from '../constants/types/workflow';
import WorkflowApi from '../api/workflowApi';
import {toast} from 'react-toastify'

export const getWorkflowList = (data) => dispatch => {
    WorkflowApi.getWorkflowList(data).then(res => {
        if (res.data) {
            dispatch({ type: GET_LIST_WORKFLOW, payload: res.data.data })
        }
    })
}