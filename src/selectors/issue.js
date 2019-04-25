import {createSelector} from 'reselect'
import moment from 'moment'
//params
export const listIssue = ({IssueState}) => {
    const result =  IssueState.listIssue.map(item => item.issue)
    return result
}

//func
export const fnCountProject = ({ProjectState}) => id => {
    return {}
}