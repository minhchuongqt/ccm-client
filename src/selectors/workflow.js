import _ from 'lodash'
//params
export const getListWorkflow = ({WorkflowState}) => {
    if(_.isEmpty(WorkflowState.listWorkflow)) return []
    return WorkflowState.listWorkflow
}

