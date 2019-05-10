import {GET_ISSUE_LIST, GET_ISSUE_TYPE} from '../../constants/types/issue'
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

const IssueState = combineReducers({
    listIssue,
    issueType
})


export default IssueState