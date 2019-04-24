import { GET_LIST_PROJECT, GET_PROJECT_TYPE } from '../constants/types/project';
import ProjectApi from '../api/projectApi';

export const getListProject = (data) => async dispatch => {
    await ProjectApi.getListProject(data).then(res => {
        if(res.data) {
            dispatch({type: GET_LIST_PROJECT, payload: res.data.data})
        }
    })
}

export const getProjectType = (data) => async dispatch => {
    await ProjectApi.getProjectType(data).then(res => {
        if(res.data) {
            dispatch({type: GET_PROJECT_TYPE, payload: res.data.data})
        }
    })
}