import { GET_ISSUE_LIST, CREATE_ISSUE, GET_ISSUE_TYPE, CHANGE_ADD_ISSUE_VALUE,
    GET_ISSUE_INFO, RESET_ADD_ISSUE_VALUE} from '../constants/types/issue';
import IssueApi from '../api/issueApi';

export const getIssueList = (data) => dispatch => {
    IssueApi.getIssueList(data).then(res => {
        if (res.data) {
            dispatch({ type: GET_ISSUE_LIST, payload: res.data.data })
        }
    })
}

export const getIssueInfo = (id, data) => dispatch => {
    IssueApi.getIssueInfo(id, data).then(res => {
        if (res.data && res.id ) {
            dispatch({ type: GET_ISSUE_INFO, payload: res.data.data })
        }
    })
}

export const createIssue = (data) =>  dispatch => {
     IssueApi.createIssue(data).then(res => {
        if (res.data) {
            dispatch({ type: CREATE_ISSUE, payload: res.data.data })
        }
    })
}

export const getIssueType = (data) => dispatch => {
     IssueApi.getIssueType(data).then(res => {
        if (res.data) {
            dispatch({ type: GET_ISSUE_TYPE, payload: res.data.data })
        }
    })
}

export const changeAddIssueFormValue = (key, value) => dispatch => {
    dispatch({ type: CHANGE_ADD_ISSUE_VALUE, payload: { key, value } })
}

export const resetAddIssueFormValue = () => dispatch => {
    dispatch({ type: RESET_ADD_ISSUE_VALUE })
}