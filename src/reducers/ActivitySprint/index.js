import * as C from '../../constants/types/activitySprint'
import {combineReducers} from 'redux'

const searchValue = (state = '', action) => {
  const {type, payload} = action
  switch (type) {
    case C.CHANGE_SEARCH_VALUE:
      return payload;
    default:
      return state;
  }
}

const ActivitySprintState = combineReducers({
  searchValue,
})

export default (state, action) => {
  const { type } = action;
  if (type === C.RESET_DATA) {
    return {};
  }
  return ActivitySprintState(state, action);
};