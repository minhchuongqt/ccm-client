import { GET_LIST_PROJECT, GET_PROJECT_TYPE, 
    CREATE_PROJECT, SELECT_PROJECT, DELETE_PROJECT_STATUS
    ,RESET_DELETE_PROJECT_STATUS
 } from '../constants/types/project';
import ProjectApi from '../api/projectApi';
import {toast} from 'react-toastify'
export const getListProject = (data) => dispatch => {
    ProjectApi.getListProject(data).then(res => {
        if(res.data) {
            dispatch({type: GET_LIST_PROJECT, payload: res.data.data})
        }
    })
}

export const getProjectType = (data) => dispatch => {
    ProjectApi.getProjectType(data).then(res => {
        if(res.data) {
            dispatch({type: GET_PROJECT_TYPE, payload: res.data.data})
        }
    })
}

export const createProject = (data) => dispatch => {
    ProjectApi.createProject(data).then(res => {
        if(res.data) {
            if(res.data.error) {
                toast.error(res.data.error)
            } else {
                dispatch({type: CREATE_PROJECT, payload: res.data.data})
            }
        }
    })
}

export const selectProject = (data) => dispatch => {
    localStorage.setItem('selectedProject', JSON.stringify(data))
    dispatch({type: SELECT_PROJECT, payload: data})
}

export const deleteProject = (id) => dispatch => {
    ProjectApi.deleteProject(id).then(res => {
        if(res.data) {
            if(res.data.error) {
                toast.error(res.data.error)
            } else {
                dispatch({type: DELETE_PROJECT_STATUS, payload: res.data.success })
            }
        }
    })
}

export const resetDeleteProjectStatus = () => dispatch => {
    dispatch({ type: RESET_DELETE_PROJECT_STATUS })
}
