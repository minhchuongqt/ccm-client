import {GET_LIST_VERSION} from '../../constants/types/version'
import { combineReducers } from 'redux';


export const listVersion = (state = null, action) => {
    const {type, payload} = action
    switch(type) {
        case GET_LIST_VERSION:
            return payload
        default:
            return state
    }
}

const VersionState = combineReducers({
    listVersion
})

export default VersionState