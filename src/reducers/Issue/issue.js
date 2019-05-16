import {GET_ISSUE_LIST, GET_ISSUE_TYPE, CHANGE_ADD_ISSUE_VALUE, RESET_ADD_ISSUE_VALUE} from '../../constants/types/issue'
import { combineReducers } from 'redux';

const listIssue = (state = [], action) => {
    const {type, payload} = action
    switch(type) {
        case GET_ISSUE_LIST:
            return payload
        default:
            return state
    }
}

const issueType = (state = [], action) => {
    const {type, payload} = action
    switch(type) {
        case GET_ISSUE_TYPE:
            return payload
        default:
            return state
    }
}

const addIssueFormValue = (state = {}, action) => {
    const {type, payload} = action
    console.log(payload)
    switch (type) {
        case CHANGE_ADD_ISSUE_VALUE:
             const {key, value} = payload
            state[key] = value
            return state
        case RESET_ADD_ISSUE_VALUE:
            return {}
        default:
            return state
    }
}

const IssueState = combineReducers({
    listIssue,
    issueType,
    addIssueFormValue
})


export default IssueState