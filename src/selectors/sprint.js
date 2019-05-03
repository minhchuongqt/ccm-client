
import moment from 'moment'
import _ from 'lodash'
//params

export const listSprint = ({SprintState}) => {
    const result =  SprintState.listSprint.map(item => item)
    return result.map(item => (
        {...item,
            createdDate: moment(item.createdAt).format('DD/MMM/YY h:mm A'),
            updatedDate: moment(item.updatedAt).format('DD/MMM/YY h:mm A')
    }))
}


export const createSprintStatus = ({SprintState}) => {
    // if(_.isEmpty(SprintState.createSprintStatus)) return null
    return SprintState.createSprintStatus
}