
import moment from 'moment'
import _ from 'lodash'
//params
export const listProject = ({ProjectState}) => {
    const result =  ProjectState.listProject.map(item => item.project)
    return result.map(item => (
        {...item, 
        createdDate: moment(item.createdAt).format('MMM DD, YYYY'),
        updatedDate: moment(item.updatedAt).format('MMM DD, YYYY')
    }))
}

export const listProjectType = ({ProjectState}) => {
    if(_.isEmpty(ProjectState.projectType)) return []
    return ProjectState.projectType
}

export const createProjectStatus = ({ProjectState}) => {
    // if(_.isEmpty(ProjectState.createProjectStatus)) return null
    return ProjectState.createProjectStatus
}

export const projectTypeSelectable = ({ProjectState}) => {
    if(_.isEmpty(ProjectState.projectType)) return []
    const result =  ProjectState.projectType.map(item => (
        {
            label: item.name, value: item._id
        }
        ))
    return result
}

export const selectedProject = ({ProjectState}) => ProjectState.selectedProject
//func
export const fnCountProject = ({ProjectState}) => id => {
    return {}
}
