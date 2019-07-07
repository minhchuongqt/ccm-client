import _ from 'lodash'
import {createSelector} from 'reselect'
//params

export const getLengthListWorkflow = ({WorkflowState}) => {
    if(_.isEmpty(WorkflowState.listWorkflow)) return []
    return WorkflowState.listWorkflow.length
}
export const addStepStatus = ({WorkflowState}) => {
    return WorkflowState.addStepStatus
}
export const updateWorkflowStatus = ({WorkflowState}) => {
    return WorkflowState.updateWorkflowStatus
}
export const swapWorkflowStatus = ({WorkflowState}) => {
    return WorkflowState.swapWorkflowStatus
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
    // console.log(result)
    return result
}

export const getWorkflowSelectable = ({WorkflowState}) => {
    if(_.isEmpty(WorkflowState.listWorkflow)) return []
    const result =  WorkflowState.listWorkflow.map(item => (
        {
            label: item.name,
            value: item._id,
        }
    ))
    return result
}

export const getListWorkflow = createSelector(
    [
        ({WorkflowState}) => WorkflowState.listWorkflow,
        getWorkflowSelectable
    ], (listWorkflow, workflowSelectable) => {
        if(_.isEmpty(listWorkflow)) return []
        listWorkflow.map(item => {
            item.to = item.to.map(i => workflowSelectable.find(w => w.value == i))
        })
        // console.log(listWorkflow)
        return listWorkflow
    }
)

export const getListTask = ({BacklogState}) => BacklogState.sprintActive || []