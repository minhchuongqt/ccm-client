import _ from 'lodash'
//params
export const generateDataActiveBoard = ({WorkflowState,BacklogState}) => {
  // if(_.isEmpty(BacklogState.sprintActive)) return []
    const boardData = {
        lanes: [
            {
              id: "1111111",
              
              title: "TO DO",
              "label": "3 issues",
              "style": {
                "width": 300
              },
              "cards": [
                {
                  "id": "Frontend",
                  "title": "Code login page",
                  "label": "15 mins",
                  "description": "Code login page in client side"
                },
                {
                  "id": "Plan2",
                  "title": "Code register page",
                  "label": "10 mins",
                  "description": "Design regiter page in client sidde"
                },
                {
                  "id": "Plan3",
                  "title": "Implement API auth",
                  "label": "30 mins",
                  "description": "Implement API for authenticate"
                }
              ]
            },
            {
              "id": "22222222",
              "title": "IN PROGRESS",
              "label": "1 issue",
              "style": {
                "width": 300
              },
              "cards": [
                {
                  "id": "Wip1",
                  "title": "CRUD Group UI",
                  "label": "30 mins",
                  "description": "Design Group UI CRUD"
                }
              ]
            },
            {
              "id": "33333333",
              "title": "DONE",
              "style": {
                "width": 300
              },
              "label": "2 issues",
              "cards": [
                {
                  "id": "Completed1",
                  "title": "Get requirements",
                  "label": "15 mins",
                  "description": "Get requirements from customer"
                },
                {
                  "id": "Completed2",
                  "title": "Requirements analysis",
                  "label": "15 mins",
                  "description": "Determining the conditions to meet for a new project"
                }
              ]
            }
          ]
    }
    // if(_.isEmpty(WorkflowState.listWorkflow)) return []
    // const result =  WorkflowState.listWorkflow.map(item => item)
    // return result.map(item => (
    //     {...item
       
    // }))
    const temp = {
      lanes: WorkflowState.listWorkflow.map(item => ({
        id: item._id,
        title: item.name,
        label: "3 issues",
        cards: [
          {
            "id": "Frontend",
            "title": "Code login page",
            "label": "15 mins",
            "description": "Code login page in client side"
          }
        ]
      }))
    }
    return temp
}

