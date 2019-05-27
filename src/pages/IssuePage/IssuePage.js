import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../../styleSheets/sass/components/Issue/IssueView.scss";
import imgUser from "../../assets/img/avatar5.png";
import AddIssueView from "./AddIssuePage/index";
import EditIssueView from "./EditIssuePage/index";
import MultiSelect from "../../components/multiSelect";
import _ from "lodash";
import { API } from "../../config";
import SearchSelect from "../../components/singleSelect";
// class ContentEditable extends React {
//   render() {
//       return <div
//           onInput={this.emitChange}
//           onBlur={this.emitChange}
//           contentEditable
//           dangerouslySetInnerHTML={{__html: this.props.html}}></div>;
//   }

//   shouldComponentUpdate(nextProps) {
//       return nextProps.html !== this.getDOMNode().innerHTML;
//   }

//   emitChange() {
//       var html = this.getDOMNode().innerHTML;
//       if (this.props.onChange && html !== this.lastHtml) {

//           this.props.onChange({
//               target: {
//                   value: html
//               }
//           });
//       }
//       this.lastHtml = html;
//   }
// };

const generateClassForIssueStatus = status => {
  switch (status) {
    case "TODO":
      return "label-default";
    case "INPROGRESS":
      return "label-primary";
    case "DONE":
      return "label-success";
    default:
      return "";
  }
};

const IssuePage = props => {
  const {
    listIssue,
    openAddIssueModal,
    selectIssue,
    issueInfo,
    closeIssueDetail,
    assigneeSelectable,
    prioritySelectable,
    onFocus
  } = props;
  // console.log(listIssue)
  let selectableAssignee = assigneeSelectable.map(item => !(issueInfo.assignee || []).find(i => i.value == item.value) && item ) || []
  let selectablePriority = issueInfo.priority ?  prioritySelectable.filter(item => (item.value !== issueInfo.priority.value) && item ) : prioritySelectable

  console.log(issueInfo);
  return (
    <div id="issue-view">
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Issue</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <EditIssueView />
      <AddIssueView />
      <div className="row">
        <div id="open-issues" className="col-md-4 p-r-0">
          <div className="box box-success ">
            <div className="box-header with-border">
              <h4 className="box-title">Open Issues</h4>
            </div>
            <div className="box-body scroll-detail">
              <div className="list-group">
                {listIssue.map((issue, index) => {
                  return (
                    <a
                      href="#"
                      className="list-group-item list-group-item-action"
                      key={index}
                      onClick={() => {
                        selectIssue(issue);
                      }}
                    >
                      <div>
                        <div>
                          <div>
                            <span>{issue.summary}</span>
                          </div>
                          {(issue.issueType || {}).iconUrl && (
                            <img src={API + (issue.issueType || {}).iconUrl} />
                          )}
                          &nbsp;<span className="com">{issue.issueKey}</span>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="box-footer">
              <button
                type="button"
                className="btn btn-default"
                onClick={() => openAddIssueModal()}
              >
                <i
                  className="fa fa-plus"
                  title="Edit"
                  style={{ fontSize: "11px" }}
                />{" "}
                &nbsp;Create issue
              </button>
            </div>
          </div>
        </div>
        {!_.isEmpty(issueInfo) && (
          <div id="issue-detail-collapse" className="col-md-8 ">
            <div className="box box-success">
              <div className="box-header with-border">
                <h3 className="box-title">Issue Details</h3>
                <div className="box-tools pull-right">
                  {/* <button
                    type="button"
                    className="btn btn-box-tool"
                    onClick={() => closeIssueDetail()}
                  >
                    <i className="fa fa-times" />
                  </button> */}
                </div>
              </div>
              {issueInfo.summary && (
                <div className="box-body">
                  <div>
                    <div>
                      <i className="fa fa-trello" /> {issueInfo.issueKey}
                    </div>
                  </div>
                  <div id="edit">
                    <h3>{issueInfo.summary}</h3>
                  </div>
                  <div className="btn-group m-b-5">
                    <button
                      type="button"
                      className="btn btn-default btn-sm"
                      data-toggle="modal"
                      data-target="#modal-editissue"
                    >
                      <i className="fa fa-edit" title="Edit" /> Edit
                    </button>
                  </div>
                  <div className="btn-group m-b-5">
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="fa fa-commenting-o" title="Comment" />{" "}
                      Comment
                    </button>
                  </div>
                  <div className="btn-group m-b-5">
                    {/* <button
                    type="button"
                    htmlFor="assignFocus"
                    className="btn btn-default btn-sm m-b-1"
                    // onClick={() => onFocus('assignFocus')}
                  >
                    {" "}
                    Assign
                  </button> */}
                    <button
                      type="button"
                      className="btn btn-default btn-sm m-b-1 dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      More &nbsp;
                      <i className="fa fa-angle-down" />
                    </button>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a href="#">Log work</a>
                      </li>
                      <li className="divider" />
                      <li>
                        <a href="#">Create a sub-task</a>
                      </li>
                      <li className="divider" />
                      <li>
                        <a href="#">Delete</a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-group m-b-5">
                    <button
                      type="button"
                      className="btn btn-default btn-sm m-b-1"
                    >
                      {" "}
                      To Do
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm m-b-1"
                    >
                      {" "}
                      In Progress
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-sm m-b-1"
                    >
                      {" "}
                      Done
                    </button>
                  </div>
                  <div className="col-md-8 p-l-0">
                    <div className="box-body">
                      <div className="box-group" id="accordion">
                        <div className="panel m-b-0">
                          <div className="box-header with-border pd-0">
                            <h4 className="box-title">
                              <a data-toggle="collapse" href="#collapseDetail">
                                <h5>
                                  <b>Details</b>
                                </h5>
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseDetail"
                            className="panel-collapse collapse in"
                          >
                            <div className="box-body">
                              <div className="col-md-4">
                                <ul className="list-unstyled">
                                  <li>Type:</li>
                                  <li>Status:</li>
                                  <li>Priority:</li>
                                  <li>Fix Version/s:</li>
                                  <li>Labels:</li>
                                  <li>Sprint:</li>
                                </ul>
                              </div>
                              <div className="col-md-8">
                                <ul className="list-unstyled">
                                  <li>{(issueInfo.issueType || {}).type}</li>
                                  <li>
                                    <span
                                      className={
                                        "label " +
                                        generateClassForIssueStatus(
                                          (issueInfo.workflow || {}).type || ""
                                        )
                                      }
                                    >
                                      {(issueInfo.workflow || {}).name || ""}
                                    </span>
                                  </li>
                                  <li>
                                  <SearchSelect
                                        id="issue-page-multi-select"
                                        
                                        value={issueInfo.priority || {}}
                                        options={selectablePriority || []}
                                        onBlur={() => console.log("bur")}
                                      />
                                  </li>
                                  <li>Version 2.0</li>
                                  <li>None</li>
                                  <li>{(issueInfo.sprint || {}).name}</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="panel m-b-0">
                          <div className="box-header with-border pd-0">
                            <h4 className="box-title">
                              <a data-toggle="collapse" href="#collapseDes">
                                <h5>
                                  <b>Description</b>
                                </h5>
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseDes"
                            className="panel-collapse collapse in"
                          >
                            <div
                              className="box-body"
                              dangerouslySetInnerHTML={{
                                __html: `${issueInfo.description || ""}`
                              }}
                            />
                            {/* {parser.parseFromString(issueInfo.description, 'text/html')}
                          </div> */}
                          </div>
                        </div>

                        {issueInfo.attachs.length > 0 && (
                          <div className="panel m-b-0">
                            <div className="box-header with-border pd-0">
                              <h4 className="box-title">
                                <a data-toggle="collapse" href="#collapseDes">
                                  <h5>
                                    <b>Attachments</b>
                                  </h5>
                                </a>
                              </h4>
                            </div>
                            <div
                              id="collapseDes"
                              className="panel-collapse collapse in"
                            >
                              <div className="box-body">
                                {issueInfo.attachs.map((item, aIdx) => {
                                  return (
                                    <img
                                      key={aIdx}
                                      src={item}
                                      alt="Image"
                                      className="dnd-item"
                                      style={{ maxWidth: "150px" }}
                                    />
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="panel m-b-0">
                          <div className="box-header with-border pd-0">
                            <h4 className="box-title">
                              <a data-toggle="collapse" href="#collapseSub">
                                <h5>
                                  <b>Sub-Tasks</b>
                                </h5>
                              </a>
                            </h4>
                            <a className="right cursor-pointer">
                              <i className="fa fa-plus" />
                            </a>
                          </div>
                          {!_.isEmpty(issueInfo.subtasks) && (
                            <div
                              id="collapseSub"
                              className="panel-collapse collapse in"
                            >
                              <div className="box-body">
                                <table
                                  id="issuetable"
                                  className="table table-bordered table-hover"
                                >
                                  <tbody>
                                    <tr>
                                      <td>1. </td>
                                      <td>
                                        <div className="summary">
                                          Update task status by dragging and
                                          dropping from column to column >> Try
                                          dragging this task to "Done"
                                        </div>
                                      </td>
                                      <td>
                                        <i
                                          className="fa fa-clone"
                                          title="The sub-task of the issue"
                                        />
                                      </td>
                                      <td>
                                        <span className="label label-default">
                                          TO DO
                                        </span>
                                      </td>
                                      <td>
                                        <div className="summary">
                                          minhchuongqt@gmail.com
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>1. </td>
                                      <td>
                                        <div className="summary">
                                          Update task status by dragging and
                                          dropping from column to column >> Try
                                          dragging this task to "Done"
                                        </div>
                                      </td>
                                      <td>
                                        <i
                                          className="fa fa-clone"
                                          title="The sub-task of the issue"
                                        />
                                      </td>
                                      <td>
                                        <span className="label label-default">
                                          TO DO
                                        </span>
                                      </td>
                                      <td>
                                        <div className="summary">
                                          minhchuongqt@gmail.com
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="panel m-b-0">
                          <div className="box-header with-border pd-0">
                            <h4 className="box-title">
                              <a
                                data-toggle="collapse"
                                href="#collapseActivity"
                              >
                                <h5>
                                  <b>Activity</b>
                                </h5>
                              </a>
                            </h4>
                          </div>
                          {!_.isEmpty(issueInfo.subtasks) && (
                            <div
                              id="collapseActivity"
                              className="panel-collapse collapse in"
                            >
                              <div className="box-body box-comments comments-conf">
                                <div className="box-comment">
                                  <div className="col-md-8">
                                    <img
                                      className="img-circle img-activity"
                                      src={imgUser}
                                      alt="User Image"
                                    />
                                    <div className="comment-text">
                                      <a className="email">
                                        &nbsp; phamhongcang.qng@gmail.com &nbsp;
                                      </a>
                                      created issue acbsdsdsse sdskdj
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <span className="text-muted pull-right">
                                      07/Mar/19 10:12 AM
                                    </span>
                                  </div>
                                </div>

                                <div className="box-comment">
                                  <div className="col-md-8">
                                    <img
                                      className="img-circle img-activity"
                                      src={imgUser}
                                      alt="User Image"
                                    />
                                    <div className="comment-text">
                                      <a className="email">
                                        &nbsp;
                                        phamhongcSDSSDDSDSDSDSDSang.qng@gmail.com
                                        &nbsp;
                                      </a>
                                      created issue acbsdsdsse sdskdj
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <span className="text-muted pull-right">
                                      07/Mar/19 10:12 AM
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 p-l-0">
                    <div className="box-body">
                      <div className="box-group">
                        <div className="panel m-b-0">
                          <div className="box-header with-border pd-0">
                            <h4 className="box-title">
                              <a data-toggle="collapse" href="#collapsePeople">
                                <h5>
                                  <b>People</b>
                                </h5>
                              </a>
                            </h4>
                          </div>

                          <div
                            id="collapsePeople"
                            className="panel-collapse collapse in"
                          >
                            <div className="box-body">
                              {/* {!_.isEmpty(issueInfo.assignees) && */}
                              <ul className="list-unstyled">
                                <li>Assignee:</li>
                                <li>
                                  {issueInfo.assignee.map(a => {
                                    return (
                                      <SearchSelect
                                        id="issue-page-multi-select"
                                        value={a}
                                        isClearable = {true}
                                        options={selectableAssignee || []}
                                        onBlur={() => console.log("bur")}
                                      />
                                    );
                                  })}
                                  <SearchSelect
                                        id="issue-page-multi-select"
                                        // value={a}
                                        placeholder="Add another"
                                        isClearable = {true}
                                        options={selectableAssignee || []}
                                        onBlur={() => console.log("bur")}
                                      />
                                </li>
                              </ul>
                              {/* } */}
                              <ul className="list-unstyled">
                                <li>Creator:</li>
                                <li>{issueInfo.creator}</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="panel m-b-0">
                          <div className="box-header with-border pd-0">
                            <h4 className="box-title">
                              <a data-toggle="collapse" href="#collapseDate">
                                <h5>
                                  <b>Dates</b>
                                </h5>
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseDate"
                            className="panel-collapse collapse in"
                          >
                            <div className="box-body">
                              <ul className="list-unstyled">
                                <li>Created:</li>
                                <li>{issueInfo.createdDate}</li>
                              </ul>
                              <ul className="list-unstyled">
                                <li>Updated:</li>
                                <li>{issueInfo.updatedDate}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IssuePage;
