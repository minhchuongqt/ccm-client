import {
    GET_LIST_SPRINT, CREATE_SPRINT, GET_LIST_BACKLOG_ISSUE, RESET_DATA, GET_SPRINT_ACTIVE
} from '../../constants/types/backlog'
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
const sprintActive = (state = [], action) => {
    const {type, payload} = action
    switch(type) {
        case GET_SPRINT_ACTIVE:
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

const listBacklogIssue = (state = [], action) => {
    const {type, payload} = action
    switch(type) {
        case GET_LIST_BACKLOG_ISSUE:
            return payload
        default:
            return state
    }
}


const BacklogState = combineReducers({
    listSprint,
    createSprintStatus,
    listBacklogIssue,
    sprintActive
})

export default (state, action) => {
    const { type } = action;
    if (type === RESET_DATA) {
      return {};
    }
    return BacklogState(state, action);
};