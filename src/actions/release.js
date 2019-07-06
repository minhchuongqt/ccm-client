import {CREATE_VERSION, GET_LIST_VERSION, RESET_DATA,
  CHANGE_ADD_VERSION_FORM_VALUE,
  RESET_CREATE_VERSION_STATUS, CHANGE_SEARCH_VALUE, SELECT_VERSION,
  GET_VERSION_DETAIL, RELEASE_VERSION_STATUS, UNRELEASE_VERSION_STATUS,
  RESET_RELEASE_STATUS, UPDATE_VERSION, DELETE_VERSION
 } from '../constants/types/release';
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
    if(res.data.success) {
      dispatch({type: CREATE_VERSION, payload: true})
    } else if (res.data.error) {
      toast.error(res.data.error)
    }
  })
}

export const updateVersion = (id, data) => dispatch => {
  const selectedProject = JSON.parse(localStorage.getItem('selectedProject')) || {}
  // const data = {
  //   project: selectedProject._id
  // }
  ReleaseApi.updateVersion(id, {...data, project: selectedProject._id}).then(res => {
    if(res.data.error) {
      toast.error(res.data.error)
    } else  {
      dispatch({type: UPDATE_VERSION, payload: true})
    }
  })
}

export const deleteVersion = (id, data) => dispatch => {
  const selectedProject = JSON.parse(localStorage.getItem('selectedProject')) || {}
  ReleaseApi.deleteVersion(id, {...data, project: selectedProject._id}).then(res => {
    if(res.data.error) {
      toast.error(res.data.error)
    } else {
      dispatch({type: DELETE_VERSION, payload: true})
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

export const getVersionDetail = (id) => dispatch => {
    ReleaseApi.getVersionDetail(id).then(res => {
      if(res.data.data) {
        dispatch({type: GET_VERSION_DETAIL, payload: res.data.data})
      } else {
        toast.error(res.data.error)
      }
    })
}

export const releaseVersion = id => dispatch => {
  const selectedProject = JSON.parse(localStorage.getItem('selectedProject')) || {}
  const data = {
    project: selectedProject._id
  }
  ReleaseApi.releaseVersion(id, data).then(res => {
    if(res.data.success) {
      dispatch({type: RELEASE_VERSION_STATUS, payload: res.data.success})
    } else {
      toast.error(res.data.error)
    }
  })
}

export const unreleaseVersion = id => dispatch => {
  const selectedProject = JSON.parse(localStorage.getItem('selectedProject')) || {}
  const data = {
    project: selectedProject._id
  }
  ReleaseApi.unreleaseVersion(id, data).then(res => {
    if(res.data.success) {
      dispatch({type: UNRELEASE_VERSION_STATUS, payload: res.data.success})
    } else {
      toast.error(res.data.error)
    }
  })
}

export const resetReleaseStatus = () => dispatch => {
  dispatch({type: RESET_RELEASE_STATUS})
}