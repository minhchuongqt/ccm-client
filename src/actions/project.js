import { GET_LIST_PROJECT_SUCCESS } from '../constants/types/project';
import ProjectApi from '../api/projectApi';

export const getListProject = (data) => async dispatch => {
    await ProjectApi.getListProject(data).then(res => {
        if(res.data) {
            dispatch({type: GET_LIST_PROJECT_SUCCESS, payload: res.data.data})
        }
    })
}