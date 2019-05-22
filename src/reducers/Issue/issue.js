import {
  GET_ISSUE_LIST,
  GET_ISSUE_TYPE,
  CHANGE_ADD_ISSUE_VALUE,
  RESET_ADD_ISSUE_VALUE,
  GET_ISSUE_INFO,
  SELECT_ISSUE,
  REMOVE_FILE_IN_ADD_FORM_VALUE,
  GET_LIST_USER,
} from "../../constants/types/issue";
import { combineReducers } from "redux";
import _ from 'lodash'
const listIssue = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ISSUE_LIST:
      return payload;
    default:
      return state;
  }
};

const issueInfo = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ISSUE_INFO:
      return payload;
    default:
      return state;
  }
};

const issueType = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ISSUE_TYPE:
      return payload;
    default:
      return state;
  }
};

const listUser = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST_USER:
      return payload;
    default:
      return state;
  }
};

const addIssueFormValue = (state = { attachs: [] }, action) => {
  const { type, payload } = action;
  let copyState = _.cloneDeep(state)
  switch (type) {
    case CHANGE_ADD_ISSUE_VALUE:
      const { key, value } = payload;
      if (key === "attachs") {
          copyState[key].push(payload.file)
      } else {
         copyState[key] = value
      }
      return copyState
    case REMOVE_FILE_IN_ADD_FORM_VALUE:
      return state.attach.filter(file => file.id !== payload.id);
    case RESET_ADD_ISSUE_VALUE:
      return {};
    default:
      return state;
  }
};

const selectedIssue = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_ISSUE:
      return payload;
    default:
      return state;
  }
};

const IssueState = combineReducers({
  listIssue,
  issueType,
  addIssueFormValue,
  issueInfo,
  selectedIssue,
  listUser
});

export default IssueState;
