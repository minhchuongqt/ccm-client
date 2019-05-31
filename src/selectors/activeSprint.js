import _ from 'lodash'
//params
import { API } from "../config";
import ReactHtmlParser from "react-html-parser";
function unescapeHTML(html) {
  var escapeEl = document.createElement("textarea");
  escapeEl.innerHTML = html;
  return escapeEl.textContent;
}
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
            title:  item.issueKey,
            description: ReactHtmlParser(unescapeHTML('<img src='+ API + (item.issueType || {}).iconUrl + '/>&nbsp;&nbsp;' + item.summary )),
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

  export const getSprintActiveInfo = ({BacklogState}) => {
    if(_.isEmpty(BacklogState.sprintActiveInfo)) return []
    return BacklogState.sprintActiveInfo
}
