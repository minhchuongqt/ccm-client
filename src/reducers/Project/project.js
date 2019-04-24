import {GET_LIST_PROJECT_SUCCESS} from '../../constants/types/project'
import { combineReducers } from 'redux';

export const listProject = (state = null, action) => {
    const {type, payload} = action
    switch(type) {
        case GET_LIST_PROJECT_SUCCESS:
            return payload
        default:
            return state
    }
}

const ProjectState = combineReducers({
    listProject
})

export default ProjectState