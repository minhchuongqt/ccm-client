import _ from 'lodash'
//params
export const getListWorkflow = ({WorkflowState}) => {
    if(_.isEmpty(WorkflowState.listVersion)) return []
    return WorkflowState.listVersion
}

