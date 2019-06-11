import {
    GET_LIST_SPRINT, CREATE_SPRINT, GET_LIST_BACKLOG_ISSUE,
    RESET_DATA, GET_SPRINT_ACTIVE, GET_SPRINT_ACTIVE_INFO,
    START_SPRINT, COMPLETE_SPRINT, CHANGE_SEARCH_VALUE
} from '../../constants/types/backlog'
import { combineReducers } from 'redux';
import { CHANGE_ISSUE_WORKFLOW } from '../../constants/types/issue';

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
const sprintActiveInfo = (state = [], action) => {
    const {type, payload} = action
    switch(type) {
        case GET_SPRINT_ACTIVE_INFO:
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

const startSprintStatus = (state = null, action) => {
    const {type, payload} = action
    switch(type) {
        case START_SPRINT:
            if(payload) {
                return true
            } else {
                return false
            }
        default:
            return null
    }
}
const completeSprintStatus = (state = null, action) => {
    const {type, payload} = action
    switch(type) {
        case COMPLETE_SPRINT:
            if(payload) {
                return false
            } else {
                return true
            }
        default:
            return null
    }
}

const changeIssueWorkflowStatus = (state = null, action) => {
    const {type, payload} = action
    switch(type) {
        case CHANGE_ISSUE_WORKFLOW:
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

const searchValue = (state = '', action) => {
    const {type, payload} = action
    switch (type) {
      case CHANGE_SEARCH_VALUE:
        return payload;
      default:
        return state;
    }
  }


const BacklogState = combineReducers({
    listSprint,
    createSprintStatus,
    startSprintStatus,
    listBacklogIssue,
    sprintActive,
    sprintActiveInfo,
    completeSprintStatus,
    changeIssueWorkflowStatus,
    searchValue
})

export default (state, action) => {
    const { type } = action;
    if (type === RESET_DATA) {
      return {};
    }
    return BacklogState(state, action);
};