
import moment from 'moment'
import _ from 'lodash'
//params
export const listSprint = ({SprintState}) => {
    const result =  SprintState
    return result
}


export const createSprintStatus = ({SprintState}) => {
    if(_.isEmpty(SprintState.createSprintStatus)) return null
    return SprintState.createSprintStatus
}