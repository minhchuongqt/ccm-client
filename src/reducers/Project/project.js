import {GET_PROJECT_TYPE, CREATE_PROJECT, SELECT_PROJECT} from '../../constants/types/project'
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

const createProjectStatus = (state = null, action) => {
    const {type, payload} = action
    switch(type) {
        case CREATE_PROJECT:
            if(payload) {
                return true
            } else {
                return false
            }
        default:
            return null
    }
}

const selectedProject = (state = {}, action) => {
    const {type, payload} = action
    switch(type) {
        case SELECT_PROJECT:
            return payload
        default:
            return state
    }
}

const ProjectState = combineReducers({
    listProject,
    projectType,
    createProjectStatus,
    selectedProject
})


export default ProjectState