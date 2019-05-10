
import moment from 'moment'
import _ from 'lodash'
//params

export const listSprint = ({BacklogState}) => {
    const {listSprint} = BacklogState
    if(_.isEmpty(listSprint)) return []
    const result =  listSprint.map(item => item)
    return result.map(item => (
        {...item,
            createdDate: moment(item.createdAt).format('DD/MMM/YY h:mm A'),
            updatedDate: moment(item.updatedAt).format('DD/MMM/YY h:mm A')
    }))
}


export const createSprintStatus = ({BacklogState}) => {
    // if(_.isEmpty(BacklogState.createSprintStatus)) return null
    return BacklogState.createSprintStatus
}

export const listBacklogIssue = ({BacklogState}) => {
    // if(_.isEmpty(BacklogState.createSprintStatus)) return null
    return BacklogState.listBacklogIssue || []
}