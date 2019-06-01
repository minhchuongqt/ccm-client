import { GET_LIST_SPRINT, CREATE_SPRINT, GET_LIST_BACKLOG_ISSUE,
     GET_SPRINT_ACTIVE, GET_SPRINT_ACTIVE_INFO, START_SPRINT, COMPLETE_SPRINT
     } from '../constants/types/backlog';
import BacklogApi from '../api/backlogApi';

export const getListSprint = (data) => dispatch => {
    BacklogApi.getListSprint(data).then(res => {
        if(res.data) {
            dispatch({type: GET_LIST_SPRINT, payload: res.data.data})
        }
    })
}
export const getSprintActive = (data) => dispatch => {
    BacklogApi.getSprintActive(data).then(res => {
        if(res.data) {
            dispatch({type: GET_SPRINT_ACTIVE, payload: res.data.data})
        }
    })
}
export const getSprintActiveInfo = (data) => dispatch => {
    BacklogApi.getSprintActiveInfo(data).then(res => {
        if(res.data) {
            dispatch({type: GET_SPRINT_ACTIVE_INFO, payload: res.data.data})
        }
    })
}

export const startSprint = (data) => dispatch => {
    BacklogApi.startSprint(data).then(res => {
        if(res.data) {
            dispatch({type: START_SPRINT, payload: res.data.data})
        }
    })
}
export const completeSprint = (data) => dispatch => {
    BacklogApi.completeSprint(data).then(res => {
        if(res.data) {
            dispatch({type: COMPLETE_SPRINT, payload: res.data.data})
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