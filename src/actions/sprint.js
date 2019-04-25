import { GET_LIST_SPRINT, CREATE_SPRINT } from '../constants/types/sprint';
import SprintApi from '../api/sprintApi';

export const getListSprint = (data) => async dispatch => {
    await SprintApi.getListSprint(data).then(res => {
        if(res.data) {
            dispatch({type: GET_LIST_SPRINT, payload: res.data.data})
        }
    })
}

export const createSprint = (data) => async dispatch => {
    await SprintApi.createSprint(data).then(res => {
        if(res.data) {
            dispatch({type: CREATE_SPRINT, payload: res.data.data})
        }
    })
}