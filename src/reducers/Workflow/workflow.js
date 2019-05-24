import { GET_LIST_WORKFLOW } from "../../constants/types/workflow";
  import { combineReducers } from "redux";
  import _ from 'lodash'
  const listWorkflow = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_LIST_WORKFLOW:
        return payload;
      default:
        return state;
    }
  };
  const WorkflowState = combineReducers({
    listWorkflow
  });
  
  export default WorkflowState;
  