import {
  GET_ISSUE_LIST,
  GET_ISSUE_TYPE,
  CHANGE_ADD_ISSUE_VALUE,
  GET_ISSUE_INFO,
  SELECT_ISSUE,
  REMOVE_FILE_IN_ADD_FORM_VALUE,
  GET_LIST_USER,
  CREATE_ISSUE,
  RESET_CREATE_ISSUE_STATUS,
  GET_PRIORITY,
  GET_LIST_LABEL,
  GET_LIST_STORY_POINT,
  CHANGE_SELECTED_FILTER_FOR_USER_ISSUE_VALUE,
  CHANGE_SEARCH_VALUE,
  CHANGE_SELECTED_FILTER_FOR_DETAIL_ISSUE_VALUE,
  CHANGE_SORT_TYPE,
  UPDATE_ISSUE_DETAIL_STATUS,
  RESET_UPDATE_ISSUE_DETAIL_STATUS,
  CREATE_SUBTASK_STATUS,
  RESET_CREATE_SUBTASK_STATUS,
  REMOVE_ISSUE_STATUS,
  RESET_REMOVE_ISSUE_STATUS,
  POST_COMMENT_STATUS,
  RESET_POST_COMMENT_STATUS
} from "../../constants/types/issue";
import { combineReducers } from "redux";
import _ from 'lodash'
const listIssue = (state = {isFetching: false, data: [], error: null}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ISSUE_LIST:
      return payload;
    default:
      return state;
  }
};

const listLabel = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST_LABEL:
      return payload;
    default:
      return state;
  }
};

const listStoryPoint = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST_STORY_POINT:
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
    case RESET_REMOVE_ISSUE_STATUS:
      return {};
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

const priority = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRIORITY:
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
          copyState.attachs.push(payload.file)
      } else {
         copyState[key] = value
      }
      return copyState
    case REMOVE_FILE_IN_ADD_FORM_VALUE:
       return {...copyState, attachs: copyState.attachs.filter(file => file.id !== payload.id)}
    //    return copyState
    case RESET_CREATE_ISSUE_STATUS:
      return {attachs:[]};
    default:
      return state;
  }
};


const createIssueStatus = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_ISSUE:
      return payload;
    case RESET_CREATE_ISSUE_STATUS:
      return false;
    default:
      return state;
  }
}

const createSubtaskStatus = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_SUBTASK_STATUS:
      return payload;
    case RESET_CREATE_SUBTASK_STATUS:
      return false;
    default:
      return state;
  }
}
const postCommentStatus = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_COMMENT_STATUS:
      return payload;
    case RESET_POST_COMMENT_STATUS:
      return false;
    default:
      return state;
  }
}

const updateIssueStatus = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_ISSUE_DETAIL_STATUS:
      return payload;
    case RESET_UPDATE_ISSUE_DETAIL_STATUS:
      return false;
    default:
      return state;
  }
}

const selectedIssue = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_ISSUE:
      return payload;
    default:
      return state;
  }
};

const selectedFilterForUserIssueValue = (state = {label: 'All Issue', key: 'all', value: 'all'}, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_SELECTED_FILTER_FOR_USER_ISSUE_VALUE:
      return payload;
    default:
      return state;
  }
}

const selectedFilterForDetailIssueValue = (state = {label: 'Created', value: 'createdAt'}, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_SELECTED_FILTER_FOR_DETAIL_ISSUE_VALUE:
      return payload;
    default:
      return state;
  }
}

const searchValue = (state = '', action) => {
  const {type, payload} = action;
  switch (type) {
    case CHANGE_SEARCH_VALUE:
      return payload
    default:
      return state
  }
}

const sortType = (state = -1, action) => {
  const {type, payload} = action;
  switch (type) {
    case CHANGE_SORT_TYPE:
      return payload
    default:
      return state
  }
}

const removeIssueStatus = (state = false, action) => {
  const {type, payload} = action;
  switch (type) {
    case REMOVE_ISSUE_STATUS:
      return payload
    case RESET_REMOVE_ISSUE_STATUS:
      return false
    default:
      return state
  }
}
const IssueState = combineReducers({
  listIssue,
  issueType,
  addIssueFormValue,
  issueInfo,
  selectedIssue,
  listUser,
  createIssueStatus,
  priority,
  listLabel,
  listStoryPoint,
  selectedFilterForUserIssueValue,
  selectedFilterForDetailIssueValue,
  searchValue,
  sortType,
  updateIssueStatus,
  createSubtaskStatus,
  removeIssueStatus,
  postCommentStatus
});

export default IssueState;
