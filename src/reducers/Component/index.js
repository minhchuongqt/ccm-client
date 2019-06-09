import * as types from '../../constants/types/component'
import { combineReducers } from 'redux';

const createComponentStatus = (state = false, action) => {
    const {type, payload} = action
    switch(type) {
        case types.CREATE_COMPONENT:
            return payload
        case types.RESET_CREATE_COMPONENT_STATUS:
            return false
        default:
            return state
    }
}

const listComponent = (state = [], action) => {
    const {type, payload} = action
    switch(type) {
        case types.GET_LIST_COMPONENT:
            return payload
        default:
            return state
    }
}

const addComponentFormValue = (state = {}, action) => {
    const {type, payload} = action
    switch(type) {
        case types.CHANGE_ADD_COMPONENT_FORM_VALUE:
            return {...state, [payload.key]: payload.value}
        case types.RESET_CREATE_COMPONENT_STATUS:
            return {}
        default:
            return state
    }
}

const searchValue = (state = '', action) => {
    const {type, payload} = action
    switch(type) {
        case types.CHANGE_SEARCH_VALUE:
            return payload
        default:
            return state
    }
}
const selectedVersion = (state = {}, action) => {
    const {type, payload} = action
    switch(type) {
        case types.SELECT_COMPONENT:
            return payload
        default:
            return state
    }
}

const ComponentState = combineReducers({
  createComponentStatus,
  listComponent,
  addComponentFormValue,
  searchValue,
  selectedVersion
})

export default (state, action) => {
  const { type } = action;
  if (type === types.RESET_DATA) {
    return {};
  }
  return ComponentState(state, action);
};