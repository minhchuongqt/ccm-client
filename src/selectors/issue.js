import _ from 'lodash'
import moment from 'moment'
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
    if(_.isEmpty(IssueState.issueInfo)) return {}

    return  {...IssueState.issueInfo,
        createdDate: moment(IssueState.issueInfo.createdAt).format('MMM DD, YYYY'),
        updatedDate: moment(IssueState.issueInfo.updatedAt).format('MMM DD, YYYY')
    }
}

export const getSelectedIssue = () => JSON.parse(localStorage.getItem('selectedIssue')) || {}

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
    console.log(IssueState.addIssueFormValue)
    return IssueState.addIssueFormValue
}

export const generateDataForAddIssue = ({IssueState}) => {
     const {sprint, description, summary} = IssueState.addIssueFormValue
     const result = {
         sprint: (sprint || {}).value || null,
         description: description,
         summary: summary,
        }
        // console.log(IssueState)
    return result
}