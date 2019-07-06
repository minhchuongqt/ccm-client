import * as types from "../constants/types/component";
import ComponentApi from "../api/componentApi";
import { toast } from "react-toastify";

export const getListComponent = data => dispatch => {
  ComponentApi.getListComponent(data).then(res => {
    if (res.data.error) {
      toast.error(res.data.error);
    } else {
      dispatch({ type: types.GET_LIST_COMPONENT, payload: res.data.data });
    }
  });
};
export const selectComponent = data => dispatch => {
  dispatch({ type: types.SELECT_COMPONENT, payload: data });
};

export const createComponent = data => dispatch => {
  ComponentApi.createComponent(data).then(res => {
    if (res.data.error) {
      toast.error(res.data.error);
    } else {
      dispatch({ type: types.CREATE_COMPONENT, payload: true });
    }
  });
};

export const changeAddComponentFormValue = (key, value) => dispatch => {
  dispatch({
    type: types.CHANGE_ADD_COMPONENT_FORM_VALUE,
    payload: { key, value }
  });
};

export const changeSearchValue = value => dispatch => {
  dispatch({ type: types.CHANGE_SEARCH_VALUE, payload: value });
};

export const resetCreateComponentStatus = () => dispatch => {
  dispatch({ type: types.RESET_CREATE_COMPONENT_STATUS });
};
