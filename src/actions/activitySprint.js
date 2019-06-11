import * as C from '../constants/types/activitySprint'


export const changeSearchValue = (value) => dispatch => {
  // console.log(value)
  dispatch({type: C.CHANGE_SEARCH_VALUE, payload: value})
}