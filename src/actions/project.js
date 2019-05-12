import { GET_LIST_PROJECT, GET_PROJECT_TYPE, CREATE_PROJECT, SELECT_PROJECT } from '../constants/types/project';
import ProjectApi from '../api/projectApi';

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
    // console.log(data)
    ProjectApi.createProject(data).then(res => {
        if(res.data) {
            dispatch({type: CREATE_PROJECT, payload: res.data.data})
        }
    })
}

export const selectProject = (data) => dispatch => {
    // console.log(data)
    localStorage.setItem('selectedProject', JSON.stringify(data))
    dispatch({type: SELECT_PROJECT, payload: data})
}