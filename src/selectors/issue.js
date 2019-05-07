import _ from 'lodash'
//params
export const listIssue = ({IssueState}) => {
    if(_.isEmpty(IssueState.listIssue)) return []
    return IssueState.listIssue
    // const result =  IssueState.listIssue.map(item => item)
    // return result.map(item => (
    //     {...item
       
    // }))
}

export const createIssueStatus = ({IssueState}) => {
    // if(_.isEmpty(IssueState.createIssueStatus)) return null
    return IssueState.createIssueStatus
}