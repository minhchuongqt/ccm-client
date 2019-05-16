import _ from 'lodash'
//params
export const getListIssue = ({IssueState}) => {
    if(_.isEmpty(IssueState.listIssue)) return []
    return IssueState.listIssue
    // const result =  IssueState.listIssue.map(item => item)
    // return result.map(item => (
    //     {...item
       
    // }))
}


export const getIssueInfo = ({IssueState}) => {
    if(_.isEmpty(IssueState.issueInfo)) return []
    return IssueState.issueInfo
}

export const getListIssueType = ({IssueState}) => {
    if(_.isEmpty(IssueState.issueType)) return []
    return IssueState.issueType
}

export const getCreateIssueStatus = ({IssueState}) => {
    // if(_.isEmpty(IssueState.createIssueStatus)) return null
    return IssueState.createIssueStatus
}

export const getIssueTypeSelectable = ({IssueState}) => {
    if(_.isEmpty(IssueState.issueType)) return []
    const result =  IssueState.issueType.map(item => (
        {
            label: item.type, value: item._id
        }
        ))
    return result
}

export const getAddIssueFormValue = ({IssueState}) => {
    return IssueState.addIssueFormValue
}