import _ from 'lodash'
//params


export const generateDataActiveBoard = ({WorkflowState, BacklogState}) => {
  if(_.isEmpty(BacklogState.sprintActive)) return []
  if(_.isEmpty(WorkflowState.listWorkflow)) return []
  let a = 1074/(WorkflowState.listWorkflow.length)
      const temp = {
        lanes: WorkflowState.listWorkflow && WorkflowState.listWorkflow.map(item => ({
          id: item._id,
          title: item.name,
          label: BacklogState.sprintActive.find(i => i.workflow._id === item._id) && BacklogState.sprintActive.find(i => i.workflow._id === item._id).issues.length + " issues",
          style: {
            "width": a,
            backgroundColor: '#f4f5f7', color: '#172b4d', boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.75)'
          },
          cards: BacklogState.sprintActive.find(i => i.workflow._id === item._id) && BacklogState.sprintActive.find(i => i.workflow._id === item._id).issues.map(item => ({
            id: item._id,
            title: item.issueKey,
            description: item.summary || {},
            tags: item.label.map(i => ({
              title: i ,
              color: 'white',
              bgcolor: '#61BD4F'
            }))
          })) || []
        }))
      }
  return temp
  }
    // const boardData = {
    //     lanes: [
    //         {
    //           id: "1111111",
              
    //           title: "TO DO",
    //           "label": "3 issues",
    //           "style": {
    //             "width": 300
    //           },
    //           "cards": [
    //             {
    //               "id": "Frontend",
    //               "title": "Create Register Form",
    //               "label": "15 mins",
    //               "description": "Code register form in client side"
    //             },
    //             {
    //               "id": "Plan2",
    //               "title": "Create Register UI",
    //               "label": "10 mins",
    //               "description": "Design regiter page in client side"
    //             },
    //             {
    //               "id": "Plan3",
    //               "title": "Create Login UI",
    //               "label": "30 mins",
    //               "description": "Design login page in client sidde"
    //             }
    //           ]
    //         },
    //         {
    //           "id": "22222222",
    //           "title": "IN PROGRESS",
    //           "label": "0 issue",
    //           "style": {
    //             "width": 300
    //           },
    //           "cards": [
    //              {
    //               "id": "Frontend",
    //               "title": "Create auth API",
    //               "label": "15 mins",
    //               "description": "Code register form in client side"
    //             }
    //           ]
             
    //         },
    //         {
    //           "id": "33333333",
    //           "title": "DONE",
    //           "style": {
    //             "width": 300
    //           },
    //           "label": "0 issues",
    //           "cards": [
             
               
    //           ]
              
    //         }
    //       ]
    // }
      // console.log(BacklogState.sprintActive)
  //   const temp = {
  //     lanes: [
  //       {
  //         title: "TO DO",
  //         label: "3 issues",
  //         style: {
  //           "width": 300
  //         },
  //         card: BacklogState.sprintActive[0].issues.map(item => ({
  //           id: item._id,
  //           title: item.summary
  //         }))
  //       },
  //       {
  //         title: "IN PROGRESS",
  //       },
  //       {
  //         title: "DONE",
  //       }
  //     ]
    // if(_.isEmpty(WorkflowState.listWorkflow)) return []
    // const result =  WorkflowState.listWorkflow.map(item => item)
    // return result.map(item => (
    //     {...item
       
    // }))
    
    // const abc = ()=> {
    //   BacklogState.sprintActive.find(i => {
    //     return (
    //       console.log(i.workflow._id) 
    //     )
    //   })
      
    // }


