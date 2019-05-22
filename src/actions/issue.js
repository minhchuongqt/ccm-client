import { GET_ISSUE_LIST, CREATE_ISSUE, GET_ISSUE_TYPE, CHANGE_ADD_ISSUE_VALUE,
    GET_ISSUE_INFO, RESET_ADD_ISSUE_VALUE, SELECT_ISSUE, REMOVE_FILE_IN_ADD_FORM_VALUE,
    GET_LIST_USER
} from '../constants/types/issue';
import IssueApi from '../api/issueApi';
import {toast} from 'react-toastify'
export const getIssueList = (data) => dispatch => {
    IssueApi.getIssueList(data).then(res => {
        if (res.data) {
            dispatch({ type: GET_ISSUE_LIST, payload: res.data.data })
        }
    })
}

export const getIssueInfo = (data) => dispatch => {
    IssueApi.getIssueInfo(data).then(res => {
        if (res.data) {
            dispatch({ type: GET_ISSUE_INFO, payload: res.data.data })
        }
    })
}

export const getListUser = (data) => dispatch => {
    IssueApi.getListUserToAssign(data).then(res => {
        if (res.data) {
            dispatch({ type: GET_LIST_USER, payload: res.data.data })
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

export const selectIssue = (data) => dispatch => {
    // localStorage.setItem('selectedIssue', JSON.stringify(data))
    dispatch({type: SELECT_ISSUE, payload: data})
}

export const changeAddIssueFormValue = (key, value) => dispatch => {
    if(key === 'attachs') {
        var FileSize = value.size / 1024 / 1024; // in MB
        if (FileSize > 10) {
            toast.error('File size cannot more than 10MB');
            return;
        }
        const readerBase64 = new FileReader();
        readerBase64.onload = (eventBase64) => {
            const url = eventBase64.target.result;
            const filename = value.name;
    
            const file = { id: filename, value, filename, url, }
            dispatch({ type: CHANGE_ADD_ISSUE_VALUE, payload: { key, file }});
        };
        readerBase64.readAsDataURL(value);
    } else {
        dispatch({ type: CHANGE_ADD_ISSUE_VALUE, payload: { key, value } })
    }
}

export const onRemoveFile = id => dispatch => {
    dispatch({ type: REMOVE_FILE_IN_ADD_FORM_VALUE, payload: {id} })
}
export const resetAddIssueFormValue = () => dispatch => {
    dispatch({ type: RESET_ADD_ISSUE_VALUE })
}