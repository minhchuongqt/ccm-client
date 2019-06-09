import {CREATE_VERSION, GET_LIST_VERSION, RESET_DATA,
  CHANGE_ADD_VERSION_FORM_VALUE,
  RESET_CREATE_VERSION_STATUS, CHANGE_SEARCH_VALUE, SELECT_VERSION } from '../constants/types/release';
import ReleaseApi from '../api/release';
import {toast} from 'react-toastify'


export const getListVersion = (data) => dispatch => {
  ReleaseApi.getListVersion(data).then(res => {
    if(res.data) {
      dispatch({type: GET_LIST_VERSION, payload: res.data.data})
    } else if (res.data.error) {
      toast.error(res.data.error)
    }
  })
}
export const selectVersion = (data) => dispatch => {
  dispatch({type: SELECT_VERSION, payload: data})
}

export const createVersion = (data) => dispatch => {
  ReleaseApi.createVersion(data).then(res => {
    if(res.data) {
      dispatch({type: CREATE_VERSION, payload: true})
    } else if (res.data.error) {
      toast.error(res.data.error)
    }
  })
}

export const changeAddVersionFormValue = (key, value) => dispatch => {
      dispatch({type: CHANGE_ADD_VERSION_FORM_VALUE, payload: {key, value}})
}

export const changeSearchValue = (value) => dispatch => {
      dispatch({type: CHANGE_SEARCH_VALUE, payload: value})
}

export const resetCreateVersionStatus = () => dispatch => {
      dispatch({type: RESET_CREATE_VERSION_STATUS})
}

