import { GET_ISSUE_LIST, CREATE_ISSUE, GET_ISSUE_TYPE } from '../constants/types/issue';
import IssueApi from '../api/issueApi';

export const getIssueList = (data) => dispatch => {
    IssueApi.getIssueList(data).then(res => {
        if(res.data) {
            dispatch({type: GET_ISSUE_LIST, payload: res.data.data})
        }
    })
}

export const createIssue = (data) => dispatch => {
    IssueApi.createIssue(data).then(res => {
        if(res.data) {
            dispatch({type: CREATE_ISSUE, payload: res.data.data})
        }
    })
}

export const getIssueType = (data) => async dispatch => {
    await IssueApi.getIssueType(data).then(res => {
        if(res.data) {
            dispatch({type: GET_ISSUE_TYPE, payload: res.data.data})
        }
    })
}