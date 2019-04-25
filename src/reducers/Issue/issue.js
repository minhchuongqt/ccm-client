import {GET_ISSUE_LIST} from '../../constants/types/issue'
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


const IssueState = combineReducers({
    listIssue,
})


export default IssueState