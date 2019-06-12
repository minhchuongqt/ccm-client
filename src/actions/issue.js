import { GET_ISSUE_LIST, CREATE_ISSUE, GET_ISSUE_TYPE, CHANGE_ADD_ISSUE_VALUE,
    GET_ISSUE_INFO, RESET_ADD_ISSUE_VALUE, SELECT_ISSUE, REMOVE_FILE_IN_ADD_FORM_VALUE,
    GET_LIST_USER, RESET_CREATE_ISSUE_STATUS,
    GET_PRIORITY, GET_LIST_LABEL, GET_LIST_STORY_POINT,
     CHANGE_SELECTED_FILTER_FOR_USER_ISSUE_VALUE,
     CHANGE_SEARCH_VALUE,
     CHANGE_SELECTED_FILTER_FOR_DETAIL_ISSUE_VALUE,
     CHANGE_SORT_TYPE, CHANGE_ISSUE_WORKFLOW,
     UPDATE_ISSUE_DETAIL_STATUS,
     RESET_UPDATE_ISSUE_DETAIL_STATUS,
     CREATE_SUBTASK_STATUS,
     RESET_CREATE_SUBTASK_STATUS,
     REMOVE_ISSUE_STATUS,
     RESET_REMOVE_ISSUE_STATUS,
     POST_COMMENT,
     RESET_POST_COMMENT_STATUS,
     POST_COMMENT_STATUS
} from '../constants/types/issue';
import IssueApi from '../api/issueApi';
import BaseApi from '../api/base'
import {toast} from 'react-toastify'
import _ from 'lodash'
import {API} from '../config'

export const getIssueList = (data, setSelectedIssue) => async dispatch => {
    dispatch({ type: GET_ISSUE_LIST, payload: {isFetching: true, data: [], error: null} })
    await IssueApi.getIssueList(data).then(res => {
        if (res.data) {
            dispatch({ type: GET_ISSUE_LIST, payload: {isFetching: false, data: res.data.data, error: null} })
            if(res.data.data[0] && setSelectedIssue) dispatch(getIssueInfo(res.data.data[0]._id))
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

export const getListLabel = (data) => dispatch => {
    IssueApi.getListLabel(data).then(res => {
        if (res.data) {
            dispatch({ type: GET_LIST_LABEL, payload: res.data.data })
        }
    })
}

export const getListStoryPoint = (data) => dispatch => {
    IssueApi.getListStoryPoint(data).then(res => {
        if (res.data) {
            dispatch({ type: GET_LIST_STORY_POINT, payload: res.data.data })
        }
    })
}

export const createIssue = (data) =>  dispatch => {
    let copyData = _.cloneDeep(data)
    if(copyData.attachs && copyData.attachs.length > 0) {
        let promises = (copyData.attachs || []).map(i => {
            // console.log(i)
            return i.raw
              ? BaseApi.uploadFile(i.raw).then(res => _.get(res || {}, "data.data.filePath", ""))
              : Promise.resolve(i);
        });
        // console.log(promises)
        return Promise.all(promises).then(files => {
            copyData.attachs = (files || []).filter(i => !!i);
            // console.log(copyData)
            IssueApi.createIssue(copyData).then(res => {
                if (res.data) {
                    dispatch({ type: CREATE_ISSUE, payload: res.data.success })
                }
            })
        })
        .catch(error => {
            throw error;
        });
    } else {
        IssueApi.createIssue(copyData).then(res => {
            if (res.data) {
                dispatch({ type: CREATE_ISSUE, payload: res.data.success })
            }
        })
    }
}

export const createSubtask = (data) => dispatch => {
    IssueApi.createIssue(data).then(res => {
        if(res.data) {
            if(res.data.error) {
                toast.error(res.data.error)
            } else {
                dispatch({type: CREATE_SUBTASK_STATUS, payload: res.data.success })
            }
        }
    })
}


export const postComment = (data) => dispatch => {
    IssueApi.postComment(data).then(res => {
        if(res.data) {
            if(res.data.error) {
                toast.error(res.data.error)
            } else {
                dispatch({type: POST_COMMENT_STATUS, payload: res.data.success })
            }
        }
    })
}


export const resetCreateIssueStatus = () => dispatch => {
    dispatch({ type: RESET_CREATE_ISSUE_STATUS })
}

export const resetUpdateIssueStatus = () => dispatch => {
    dispatch({ type: RESET_UPDATE_ISSUE_DETAIL_STATUS })
}

export const resetCreateSubtaskStatus = () => dispatch => {
    dispatch({ type: RESET_CREATE_SUBTASK_STATUS })
}
export const resetPostCommentStatus = () => dispatch => {
    dispatch({ type: RESET_POST_COMMENT_STATUS })
}

export const getIssueType = (data) => dispatch => {
     IssueApi.getIssueType(data).then(res => {
        if (res.data) {
            dispatch({ type: GET_ISSUE_TYPE, payload: res.data.data })
            const issueType = res.data.data.find(item => item.type == "Story")
            dispatch({ type: CHANGE_ADD_ISSUE_VALUE, payload: { 
                key: "issueType", 
                value: {
                    value: issueType._id,
                    label: issueType.type,
                    iconUrl: API + issueType.iconUrl
                }  
            }})
        }
    })
}

export const getPriority = (data) => dispatch => {
     IssueApi.getPriority(data).then(res => {
        if (res.data) {
            dispatch({ type: GET_PRIORITY, payload: res.data.data })
            const priority = res.data.data.find(item => item.level == 3)
            priority && dispatch({ type: CHANGE_ADD_ISSUE_VALUE, payload: { 
                key: "priority", 
                value: {
                    value: priority._id,
                    label: priority.name,
                    iconUrl: API + priority.iconUrl
                }  
            }})
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
    
            const file = { id: filename, raw: value, filename, url, }
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

export const resetRemoveIssueStatus = () => dispatch => {
    dispatch({ type: RESET_REMOVE_ISSUE_STATUS })
}

export const changeFilterForUserIssue = data => dispatch => {
    dispatch({type: CHANGE_SELECTED_FILTER_FOR_USER_ISSUE_VALUE, payload: data})
}

export const changeSearchValue = data => dispatch => {
    dispatch({type: CHANGE_SEARCH_VALUE, payload: data})
}

export const changeFilterForDetailIssue = data => dispatch => {
    dispatch({type: CHANGE_SELECTED_FILTER_FOR_DETAIL_ISSUE_VALUE, payload: data})
}

export const changeSortType = data => dispatch => {
    dispatch({type: CHANGE_SORT_TYPE, payload: data})
}
export const changeIssueWorkflow = (id, data) => dispatch => {
    IssueApi.changeIssueWorkflow(id, data).then(res => {
        if(res.data) {
            if(res.data.error) {
                toast.error(res.data.error)
            } else {
                dispatch({type: CHANGE_ISSUE_WORKFLOW, payload: res.data.data })
            }
        }
    })
}


export const updateIssueDetail = (id, data) => dispatch => {
    console.log(id, ':', data)
    IssueApi.updateIssue(id, data).then(res => {
        if(res.data) {
            if(res.data.error) {
                toast.error(res.data.error)
            } else {
                dispatch({type: UPDATE_ISSUE_DETAIL_STATUS, payload: res.data.success })
            }
        }
    })
}

export const removeIssue = (id) => dispatch => {
    IssueApi.removeIssue(id).then(res => {
        if(res.data) {
            if(res.data.error) {
                toast.error(res.data.error)
            } else {
                dispatch({type: REMOVE_ISSUE_STATUS, payload: res.data.success })
            }
        }
    })
}