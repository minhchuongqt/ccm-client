import _ from 'lodash'
//params
export const getListWorkflow = ({WorkflowState}) => {
    if(_.isEmpty(WorkflowState.listWorkflow)) return []
    return WorkflowState.listWorkflow
}

export const getLengthListWorkflow = ({WorkflowState}) => {
    if(_.isEmpty(WorkflowState.listWorkflow)) return []
    return WorkflowState.listWorkflow.length
}
export const addStepStatus = ({WorkflowState}) => {
    return WorkflowState.addStepStatus
}

export const createStepSelectable = () => {
    let result =  [
        {
            label: "TO DO",
            value: "TODO"
        },
        {
            label: "IN PROGRESS",
            value: "INPROGRESS"
        },
        {
            label: "DONE",
            value: "DONE"
        }
    ]
    console.log(result)
    return result
}