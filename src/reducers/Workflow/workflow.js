import { GET_LIST_WORKFLOW, CREATE_STEP } from "../../constants/types/workflow";
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
  const addStepStatus = (state = null, action) => {
    const {type, payload} = action
    switch(type) {
        case CREATE_STEP:
            if(payload) {
                return true
            } else {
                return false
            }
        default:
            return null
    }
}
  const WorkflowState = combineReducers({
    listWorkflow,
    addStepStatus
  });
  
  export default WorkflowState;
  