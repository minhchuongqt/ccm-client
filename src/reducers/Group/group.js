import {GET_GROUP_LIST_SUCCESS} from '../../constants/types/group'
import { combineReducers } from 'redux';

export const listGroup = (state = null, action) => {
    const {type, payload} = action
    switch(type) {
        case GET_GROUP_LIST_SUCCESS:
            return payload
        default:
            return state
    }
}

const GroupState = combineReducers({
    listGroup
})

export default GroupState