import _ from 'lodash'
import moment from 'moment'
import {API} from '../config'
import { createSelector } from 'reselect';
//params
export const getListIssue = ({IssueState}) => {
    if(_.isEmpty(IssueState.listIssue)) return []
    return IssueState.listIssue
    // const result =  IssueState.listIssue.map(item => item)
    // return result.map(item => (
    //     {...item
       
    // }))
}

// export const getIssueInfo = ({IssueState}) => {
//     if(_.isEmpty(IssueState.issueInfo)) return {}

//     return  {...IssueState.issueInfo,
//         createdDate: moment(IssueState.issueInfo.createdAt).format('MMM DD, YYYY'),
//         updatedDate: moment(IssueState.issueInfo.updatedAt).format('MMM DD, YYYY')
//     }
// }

// export const getSelectedIssue = () => JSON.parse(localStorage.getItem('selectedIssue')) || {}

export const getIssueInfo = createSelector(
    [
        ({IssueState}) => IssueState.issueInfo,
        getListIssue
    ], (selectedIssue, listIssue) => {
        console.log(listIssue)
        console.log(selectedIssue)
        let result = {}
        if(_.isEmpty(selectedIssue)) {
            result = (listIssue[0]) || {}
        } else {
            result = selectedIssue || {}
        }
        return {...result,
            attachs: (result.attachs || []).map(item => item && API + item),
            createdDate: moment(result.createdAt).format('MMM DD, YYYY'),
            updatedDate: moment(result.updatedAt).format('MMM DD, YYYY')
        }
    }
)

export const getListIssueType = ({IssueState}) => {
    if(_.isEmpty(IssueState.issueType)) return []
    return IssueState.issueType
}

export const getListPriority = ({IssueState}) => {
    if(_.isEmpty(IssueState.priority)) return []
    return IssueState.priority
}

export const getCreateIssueStatus = ({IssueState}) => {
    // if(_.isEmpty(IssueState.createIssueStatus)) return null
    return IssueState.createIssueStatus
}

export const getIssueTypeSelectable = ({IssueState}) => {
    if(_.isEmpty(IssueState.issueType)) return []
    const { issueType } = IssueState.addIssueFormValue
    let result =  IssueState.issueType.map(item => (
        {
            label: item.type,
            value: item._id,
            iconUrl: API + item.iconUrl,
        }
        )
    )
    result = issueType ? result.filter(item => item.value !== issueType.value) : result
    return result
}

export const getPrioritySelectable = ({IssueState}) => {
    if(_.isEmpty(IssueState.priority)) return []
    const { priority } = IssueState.addIssueFormValue
    let result =  IssueState.priority.map(item => (
        {
            label: item.name,
            value: item._id,
            iconUrl: API + item.iconUrl,
        }
        ))
    result = priority ?  result.filter(item => (item.value !== priority.value) && item ) : result
    return result
}

export const getAddIssueFormValue = ({IssueState}) => IssueState.addIssueFormValue

export const generateDataForAddIssue = ({IssueState}) => {
     const {sprint, description, summary, issueType, attachs, assignee, priority} = IssueState.addIssueFormValue
    const project = JSON.parse(localStorage.getItem('selectedProject')) || {}
     const result = {
         project: project._id,
         sprint: (sprint || {}).value || null,
         description: description,
         summary: summary,
         issueType: (issueType || {}).value || null,
         attachs,
         assignee: (assignee || []).map(item => item.value),
         priority: (priority || {}).value || null,
        }
    return result
}

export const getAssigneeSelectable = ({IssueState}) => {
    if(_.isEmpty(IssueState.listUser)) return []
    const result =  IssueState.listUser.map(item => (
        {
            label: item.member.displayName,
            value: item.member._id,
            iconUrl: API + item.member.iconUrl,
        }
    ))
    return result
}
