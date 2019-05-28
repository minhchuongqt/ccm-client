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
    // const { issueType } = IssueState.addIssueFormValue
    let result =  IssueState.issueType.map(item => (
        {
            label: item.type,
            value: item._id,
            iconUrl: API + item.iconUrl,
        }
        )
    ) 
    return result
}

export const getLabelSelectable = ({IssueState}) => {
    if(_.isEmpty(IssueState.listLabel)) return []
    // const { issueType } = IssueState.addIssueFormValue
    let result =  IssueState.listLabel.map(item => (
        {
            label: item.name,
            value: item._id,
        }
        )
    ) 
    return result
}

export const getStoryPointSelectable = ({IssueState}) => {
    if(_.isEmpty(IssueState.listStoryPoint)) return []
    // const { issueType } = IssueState.addIssueFormValue
    let result =  IssueState.listStoryPoint.map(item => (
        {
            label: item.point,
            value: item._id,
        }
        )
    ) 
    return result
}

export const getPrioritySelectable = ({IssueState}) => {
    if(_.isEmpty(IssueState.priority)) return []
    // const { priority } = IssueState.addIssueFormValue
    let result =  IssueState.priority.map(item => (
        {
            label: item.name,
            value: item._id,
            iconUrl: API + item.iconUrl,
        }
        ))
    
    return result
}

export const getAddIssueFormValue = ({IssueState}) => IssueState.addIssueFormValue

export const generateDataForAddIssue = ({IssueState}) => {
     const {
         sprint, description, summary,
         issueType, attachs, assignee,
         priority, label, storyPoints
        } = IssueState.addIssueFormValue
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
         label: (label || []).map(item => item.label),
         storyPoints: (storyPoints || {}).value || null,
        }
    return result
}

export const getAssigneeSelectable = ({IssueState}) => {
    if(_.isEmpty(IssueState.listUser)) return []
    const result =  IssueState.listUser.map(item => (
        {
            label: item.member.displayName,
            value: item.member._id,
            iconUrl: API + item.member.avatarUrl,
        }
    ))
    return result
}

export const getIssueInfo = createSelector(
    [
        ({IssueState}) => IssueState.issueInfo,
        getListIssue,
        getIssueTypeSelectable,
        getAssigneeSelectable,
        getPrioritySelectable,
        getLabelSelectable,
        getStoryPointSelectable
    ], (selectedIssue, listIssue, issueTypeSelectable, assigneeSelectable, prioritySelectable, labelSelectable, storyPointSelectable) => {
        // console.log(labelSelectable)
        let result = {}
        if(_.isEmpty(selectedIssue)) {
            result = (listIssue[0]) || {}
        } else {
            result = selectedIssue || {}
        }
        // console.log(result.label)
        const label = result.label ? result.label.map(item => labelSelectable.find(a => item == a.label) || {}) : [];
        const storyPoints = result.storyPoints ? storyPointSelectable.find(a => result.storyPoints == a.label) : {};
        // console.log(label)
        const issueType = result.issueType ? issueTypeSelectable.find(item => item.value === result.issueType._id) : {};
        const assignee = result.assignee ? result.assignee.map(item => assigneeSelectable.find(a => item === a.value)) : [];
        const priority = result.priority ?  prioritySelectable.find(a => a.value === result.priority._id || a.value === result.priority) : {};
        return {...result,
            assignee,
            priority,
            issueType,
            label,
            storyPoints,
            attachs: (result.attachs || []).map(item => item && API + item),
            createdDate: moment(result.createdAt).format('MMM DD, YYYY'),
            updatedDate: moment(result.updatedAt).format('MMM DD, YYYY')
        }
    }
)