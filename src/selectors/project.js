import {createSelector} from 'reselect'
import moment from 'moment'
//params
export const listProject = ({ProjectState}) => {
    const result =  ProjectState.listProject.map(item => item.project)
    return result.map(item => (
        {...item, 
        createdDate: moment(item.createdAt).format('MMM DD, YYYY'),
        updatedDate: moment(item.updatedAt).format('MMM DD, YYYY')
    }))
}

//func
export const fnCountProject = ({ProjectState}) => id => {
    return {}
}