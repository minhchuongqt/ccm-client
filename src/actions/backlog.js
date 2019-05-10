import { GET_LIST_SPRINT, CREATE_SPRINT, GET_LIST_BACKLOG_ISSUE } from '../constants/types/backlog';
import BacklogApi from '../api/backlogApi';

export const getListSprint = (data) => dispatch => {
    BacklogApi.getListSprint(data).then(res => {
        if(res.data) {
            dispatch({type: GET_LIST_SPRINT, payload: res.data.data})
        }
    })
}

export const createSprint = (data) => dispatch => {
    BacklogApi.createSprint(data).then(res => {
        if(res.data) {
            dispatch({type: CREATE_SPRINT, payload: res.data.data})
        }
    })
}

export const getListBacklogIssue = (data) => dispatch => {
    BacklogApi.getListBacklogIssue(data).then(res => {
        if(res.data) {
            dispatch({type: GET_LIST_BACKLOG_ISSUE, payload: res.data.data})
        }
    })
}