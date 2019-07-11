import _ from "lodash";
import { createSelector } from "reselect";
//params
import { API } from "../config";
import ReactHtmlParser from "react-html-parser";
function unescapeHTML(html) {
  var escapeEl = document.createElement("textarea");
  escapeEl.innerHTML = html;
  return escapeEl.textContent;
}

export const getSearchValue = ({ ActivitySprintState }) =>
  ActivitySprintState.searchValue;



export const generateDataActiveBoard = createSelector(
  [
    ({ WorkflowState }) => WorkflowState,
    ({ BacklogState }) => BacklogState,
    getSearchValue
  ],
  (WorkflowState, BacklogState, searchValue) => {
    if (_.isEmpty(BacklogState.sprintActive)) return [];
    if (_.isEmpty(WorkflowState.listWorkflow)) return [];
    const sprintActive = BacklogState.sprintActive.map(item =>
      item.issues.map(i => (i.summary.indexOf(searchValue) > -1 ? i : null))
    );
    // console.log(BacklogState.sprintActive);
    // let a = 1074 / WorkflowState.listWorkflow.length;
    const temp = {
      lanes:
        WorkflowState.listWorkflow &&
        WorkflowState.listWorkflow.map(item => ({
          id: item._id,
          title: item.name,
          label:
            BacklogState.sprintActive.find(i => i.workflow._id === item._id) &&
            BacklogState.sprintActive.find(i => i.workflow._id === item._id)
              .issues.length + " issues",
          style: {
            // width: a,
            backgroundColor: "#f4f5f7",
            color: "#172b4d",
            boxShadow: "2px 2px 4px 0px rgba(0,0,0,0.75)"
          },
          // disabled: true,
          cards:
            (BacklogState.sprintActive.find(i => i.workflow._id === item._id) &&
              BacklogState.sprintActive
                .find(i => i.workflow._id === item._id)
                .issues.filter(
                  issue => issue.summary.indexOf(searchValue) > -1 && issue
                )
                .map(item => ({
                  id: item._id,
                  title: ReactHtmlParser(
                    unescapeHTML(`<span style="font-size: 14px; font-weight: normal">${item.summary}</span>`)
                  ),
                  description: ReactHtmlParser(
                    unescapeHTML(`
                    <img src="${API +(item.issueType || {}).iconUrl}"></img>&nbsp;&nbsp;
                    <img src="${API + ((item.priority || {}).iconUrl || '/media/medium.svg')}" width="17"></img>&nbsp;&nbsp;
                    &nbsp;&nbsp;<div style="float: right">${item.issueKey}</div>
                    ${item.assignee.map(a => {
                      return (
                        `<img style="float: right; border-radius: 50%; margin-right: 10px" src="${API + (a.avatarUrl)}" width="28" height="28"></img>&nbsp;&nbsp;`
                      )
                    })}
                    `
                    )
                  ),
                  tags: item.label.map(i => ({
                    title: i,
                    color: "white",
                    bgcolor: "#61BD4F"
                  }))
                }))) ||
            []
        }))
    };
    // console.log(temp);
    return temp;
  }
);

export const getDoneAllStatus = ({BacklogState}) => {
  let done = true;
  BacklogState.sprintActive.map(item => {
    if(item.workflow.type == "TODO" || item.workflow.type == "INPROGRESS") {
      if (item.issues.length > 0) done = false
      return done
    }
  })
  // console.log(done)
  return done
}

export const getSprintActiveInfo = ({ BacklogState }) => {
  if (_.isEmpty(BacklogState.sprintActiveInfo)) return [];
  return BacklogState.sprintActiveInfo;
};

export const getIssueCompleteInfo = ({ BacklogState }) => {
  if (_.isEmpty(BacklogState.sprintActive)) return [];
  return BacklogState.sprintActive;
};
