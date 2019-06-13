import {CREATE_VERSION, GET_LIST_VERSION, RESET_DATA,
  CHANGE_ADD_VERSION_FORM_VALUE,
  RESET_CREATE_VERSION_STATUS,
  CHANGE_SEARCH_VALUE, GET_VERSION_DETAIL
} from '../../constants/types/release'
import { SELECT_VERSION } from '../../constants/types/release';
import { combineReducers } from 'redux';

const createVersionStatus = (state = false, action) => {
    const {type, payload} = action
    switch(type) {
        case CREATE_VERSION:
            return payload
        case RESET_CREATE_VERSION_STATUS:
            return false
        default:
            return state
    }
}

const listVersion = (state = [], action) => {
    const {type, payload} = action
    switch(type) {
        case GET_LIST_VERSION:
            return payload
        default:
            return state
    }
}

const versionDetail = (state = [], action) => {
    const {type, payload} = action
    switch(type) {
        case GET_VERSION_DETAIL:
            return payload
        default:
            return state
    }
}

const addVersionFormValue = (state = {startDate: new Date(), releaseDate: new Date()}, action) => {
    const {type, payload} = action
    switch(type) {
        case CHANGE_ADD_VERSION_FORM_VALUE:
            return {...state, [payload.key]: payload.value}
        case RESET_CREATE_VERSION_STATUS:
            return {}
        default:
            return state
    }
}

const searchValue = (state = '', action) => {
    const {type, payload} = action
    switch(type) {
        case CHANGE_SEARCH_VALUE:
            return payload
        default:
            return state
    }
}
const selectedVersion = (state = {}, action) => {
    const {type, payload} = action
    switch(type) {
        case SELECT_VERSION:
            return payload
        default:
            return state
    }
}

const ReleaseState = combineReducers({
  createVersionStatus,
  listVersion,
  addVersionFormValue,
  searchValue,
  selectedVersion,
  versionDetail
})

export default (state, action) => {
  const { type } = action;
  if (type === RESET_DATA) {
    return {};
  }
  return ReleaseState(state, action);
};