
import moment from 'moment'
import _ from 'lodash'
import { createSelector } from 'reselect'
import {API} from '../config'
//params

export const listSprint = ({BacklogState}) => {
    const {listSprint} = BacklogState
    if(_.isEmpty(listSprint)) return []
    const result =  listSprint.map(item => item)
    return result.map(item => (
        {...item,
            createdDate: moment(item.createdAt).calendar(null, {
                sameDay: 'hh:mm:ss a, [Today]',
                nextDay: 'hh:mm:ss a, [Tomorrow]',
                nextWeek: 'hh:mm:ss a, dddd',
                lastDay: 'hh:mm:ss a, [Yesterday]',
                lastWeek: 'hh:mm:ss a, [Last] dddd',
                sameElse: 'hh:mm:ss a, MMM DD YYYY'
              }),
            updatedDate: moment(item.updatedAt).calendar(null, {
                sameDay: 'hh:mm:ss a, [Today]',
                nextDay: 'hh:mm:ss a, [Tomorrow]',
                nextWeek: 'hh:mm:ss a, dddd',
                lastDay: 'hh:mm:ss a, [Yesterday]',
                lastWeek: 'hh:mm:ss a, [Last] dddd',
                sameElse: 'hh:mm:ss a, MMM DD YYYY'
              })
    }))
}
// export const getActiveSprint = ({BacklogState}) => {
//     if(_.isEmpty(BacklogState.sprintActive)) return []
//     return BacklogState.sprintActive
// }

export const getSprintTypeSelectable = ({BacklogState}) => {
    if(_.isEmpty(BacklogState.listSprint)) return []
    const result =  BacklogState.listSprint.map(item => (
        {
            label: item.name,
            value: item._id,
            active: item.active,
            completed: item.completed,
        }
        ))
    return result
}

export const createSprintStatus = ({BacklogState}) => {
    // if(_.isEmpty(BacklogState.createSprintStatus)) return null
    return BacklogState.createSprintStatus
}
export const startSprintStatus = ({BacklogState}) => {
    // if(_.isEmpty(BacklogState.createSprintStatus)) return null
    return BacklogState.startSprintStatus
}
export const completeSprintStatus = ({BacklogState}) => {
    // if(_.isEmpty(BacklogState.createSprintStatus)) return null
    return BacklogState.completeSprintStatus
}
export const changeIssueWorkflowStatus = ({BacklogState}) => {
    // if(_.isEmpty(BacklogState.createSprintStatus)) return null
    return BacklogState.changeIssueWorkflowStatus
}
export const listBacklogIssue = ({BacklogState}) => {
    // if(_.isEmpty(BacklogState.createSprintStatus)) return null
    return BacklogState.listBacklogIssue || []
}

export const getSearchValue = ({ BacklogState }) => BacklogState.searchValue;

export const getInitalData = createSelector (
    [
        listSprint,
        listBacklogIssue,
        getSearchValue
    ],
    (sprints, issues, searchValue) => {
        const result = {
            tasks: {},
            columns: {
                'backlog-column': {
                    id: 'backlog-column',
                    title: 'Backlog',
                    taskIds: []
                }
            },
            columnOrder: [],
        }
        sprints.map(sprint => {
            result.columns[sprint._id] = {
            ...sprint,
            id: sprint._id,
            title: sprint.name,
            taskIds: []
            }
            result.columnOrder.push(sprint._id)
        })
        result.columnOrder.push('backlog-column');
        issues.filter(issue => issue.summary.indexOf(searchValue) > -1 && issue).map(issue => {
            result.tasks[issue._id] = {
            ...issue,
            completed: (issue.workflow || {}).type == 'DONE' ? true : false,
            id: issue._id,
            content: issue.summary,
            iconUrl: issue.issueType && issue.issueType.iconUrl ? (API + issue.issueType.iconUrl) : null
            }
            if(sprints && issue.sprint && issue.sprint._id) {
                result.columns[issue.sprint._id] && result.columns[issue.sprint._id].taskIds.push(issue._id)
            }
            else {
                result.columns['backlog-column'].taskIds.push(issue._id)
            }
        })
        return  result
    }
)