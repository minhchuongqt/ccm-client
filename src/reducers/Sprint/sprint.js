import {GET_LIST_SPRINT, CREATE_SPRINT} from '../../constants/types/sprint'
import { combineReducers } from 'redux';

const listSprint = (state = [], action) => {
    const {type, payload} = action
    switch(type) {
        case GET_LIST_SPRINT:
            return payload
        default:
            return state
    }
}


const createSprintStatus = (state = null, action) => {
    const {type, payload} = action
    switch(type) {
        case CREATE_SPRINT:
            if(payload) {
                return true
            } else {
                return false
            }
        default:
            return null
    }
}


const SprintState = combineReducers({
    listSprint,
    createSprintStatus
})


export default SprintState