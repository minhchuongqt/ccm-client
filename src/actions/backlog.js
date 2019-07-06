import { GET_LIST_SPRINT, CREATE_SPRINT, GET_LIST_BACKLOG_ISSUE,
     GET_SPRINT_ACTIVE, GET_SPRINT_ACTIVE_INFO, START_SPRINT, COMPLETE_SPRINT, CHANGE_COMPLETE_SPRINT_VALUE,
     CHANGE_SEARCH_VALUE,
     GET_LIST_ALL_SPRINT
     } from '../constants/types/backlog';
import BacklogApi from '../api/backlogApi';
import {toast} from 'react-toastify'

export const getListSprint = (data) => dispatch => {
    BacklogApi.getListSprint(data).then(res => {
        if(res.data.error) {
            toast.error(res.data.error)
        } else {
            dispatch({type: GET_LIST_SPRINT, payload: res.data.data})
        }
    })
}
export const getSprintActive = (data) => dispatch => {
    BacklogApi.getSprintActive(data).then(res => {
        if(res.data.error) {
            toast.error(res.data.error)
        } else {
            dispatch({type: GET_SPRINT_ACTIVE, payload: res.data.data})
        }
    })
}
export const getSprintActiveInfo = (data) => dispatch => {
    BacklogApi.getSprintActiveInfo(data).then(res => {
        if(res.data.error) {
            toast.error(res.data.error)
        } else {
            dispatch({type: GET_SPRINT_ACTIVE_INFO, payload: res.data.data})
        }
    })
}

export const startSprint = (data) => dispatch => {
    BacklogApi.startSprint(data).then(res => {
        if(res.data.error) {
            toast.error(res.data.error)
        } else {
            dispatch({type: START_SPRINT, payload: res.data.data})
        }
    })
}
export const completeSprint = (data) => dispatch => {
    BacklogApi.completeSprint(data).then(res => {
        if(res.data.error) {
            toast.error(res.data.error)
        } else {
            dispatch({type: COMPLETE_SPRINT, payload: res.data.data})
        }
    })
}

export const createSprint = (data) => dispatch => {
    BacklogApi.createSprint(data).then(res => {
        if(res.data.error) {
            toast.error(res.data.error)
        } else {
            dispatch({type: CREATE_SPRINT, payload: res.data.data})
        }
    })
}

export const getListBacklogIssue = (data) => dispatch => {
    BacklogApi.getListBacklogIssue(data).then(res => {
        if(res.data.error) {
            toast.error(res.data.error)
        } else {
            dispatch({type: GET_LIST_BACKLOG_ISSUE, payload: res.data.data})
        }
    })
}

export const changeCompleteSprintValue = (key, value) => dispatch => {
    // if(key === 'attachs') {
    //     var FileSize = value.size / 1024 / 1024; // in MB
    //     if (FileSize > 10) {
    //         toast.error('File size cannot more than 10MB');
    //         return;
    //     }
    //     const readerBase64 = new FileReader();
    //     readerBase64.onload = (eventBase64) => {
    //         const url = eventBase64.target.result;
    //         const filename = value.name;
    
    //         const file = { id: filename, raw: value, filename, url, }
    //         dispatch({ type: CHANGE_COMPLETE_SPRINT_VALUE, payload: { key, file }});
    //     };
    //     readerBase64.readAsDataURL(value);
    // } else {
        dispatch({ type: CHANGE_COMPLETE_SPRINT_VALUE, payload: { key, value } })
    // }
}

export const changeSearchValue = value => dispatch => {
    dispatch({type: CHANGE_SEARCH_VALUE, payload: value})
}

export const getListAllSprint = data => dispatch => {
    BacklogApi.getListAllSprint(data).then(res => {
        if(res.data.error) {
            toast.error(res.data.error)
        } else {
            dispatch({type: GET_LIST_ALL_SPRINT, payload: res.data.data})
        }
    })
}