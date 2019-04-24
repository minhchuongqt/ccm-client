import {GET_PROJECT_TYPE} from '../../constants/types/project'
import {GET_LIST_PROJECT} from '../../constants/types/project'
import { combineReducers } from 'redux';

const listProject = (state = [], action) => {
    const {type, payload} = action
    switch(type) {
        case GET_LIST_PROJECT:
            return payload
        default:
            return state
    }
}

const projectType = (state = [], action) => {
    const {type, payload} = action
    switch(type) {
        case GET_PROJECT_TYPE:
            return payload
        default:
            return state
    }
}


const ProjectState = combineReducers({
    listProject,
    projectType
})


export default ProjectState