import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../../styleSheets/sass/components/Issue/IssueView.scss";
// import AddIssueView from "./AddIssuePage/index";
// import EditIssueView from "./EditIssuePage/index";
import _ from "lodash";
import { API } from "../../config";
import SearchSelect from "../../components/singleSelect";
import MultiSelect from "../../components/multiSelect";
import moment from "moment";
import Creatable from "react-select/lib/Creatable";
import TextEditor from "../../components/textEditor";
import { postComment } from "../../actions/issue";

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
    issueTypeSelectable,
    labelSelectable,
    storyPointSelectable,
    userInfo,
    filterableForUserIssue,
    filterableForDetailIssue,
    selectedFilterForUserIssueValue,
    selectedFilterForDetailIssueValue,
    onChangeFilterForUserIssue,
    onChangeFilterForDetailIssue,
    onChangeSearchValue,
    searchValue,
    sortType,
    changeSortType,
    updateIssueDetail,
    changeDisplayDescriptionEditor,
    displayDescriptionEditor,
    saveDescription,
    descriptionState,
    displayAddSubtask,
    subTaskSummary,
    changeDisplayCreateSubtask,
    createSubtask,
    issueSummary,
    saveSummary,
    removeIssue,
    refeshListIssue,
    listIssueIsFetching,
    versionSelectable,
    sprintTypeSelectable,
    componentSelectable,
    onChangeCommentValue,
    moveToComment,
    handleKeyPress
  } = props;
  // console.log(issueInfo);
  // console.log(sprintTypeSelectable)
  let selectableIssueType = issueInfo.issueType ? issueTypeSelectable.filter(item => item.label != 'Sub Task') : issueTypeSelectable

  let selectableStoryPoint = issueInfo.storyPoints
    ? storyPointSelectable.filter(
      item => item.value != issueInfo.storyPoints.value && item
    )
    : storyPointSelectable;

  let selectableAssignee = assigneeSelectable
  // assigneeSelectable.map(
  //   item =>
  //     !(issueInfo.assignee || []).find(i => i.value == item.value) && item
  // ) || [];

  let selectableLabel = labelSelectable
    ? labelSelectable.map(
      item =>
        !(issueInfo.label || []).find(i => i.value == item.value) && item
    ) || []
    : [];

  let selectablePriority = issueInfo.priority
    ? prioritySelectable.filter(
      item => item.value !== issueInfo.priority.value && item
    )
    : prioritySelectable;
    
    const disabled = issueInfo.released || issueInfo.closed || false;

    // console.log()
  return (
    <div id="issue-view">
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Issue</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="row">
        <div id="open-issues" className="col-md-4 p-r-0">
          <div style={{ display: "flex" }}>
            <div style={{ width: "40%", marginBottom: "10px" }}>
              <SearchSelect
                // id="issue-page-multi-select-label"
                value={selectedFilterForUserIssueValue || {}}
                options={filterableForUserIssue}
                onChange={e => onChangeFilterForUserIssue(e)}
              />
            </div>
            <div style={{ width: "50%", marginBottom: "10px", float: "right", marginLeft: 'auto' }}>
              <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input style={{ height: 38 }} type="text" className="form-control" placeholder="Search"
                  onChange={e => onChangeSearchValue(e.target.value)}
                  value={searchValue}
                />
              </div>
            </div>
          </div>
          <div className="box box-success ">
            <div className="box-header with-border display-flex">
              <h4 className="box-title" style={{ marginTop: "10px" }}>
                {selectedFilterForUserIssueValue.label || ''}
              </h4>
              {(sortType == -1) &&
                <i
                  className="fa fa-chevron-down cursor-pointer"
                  style={{ float: "right", marginTop: "10px", paddingLeft: 5 }}
                  onClick={() => changeSortType(1)}
                />
                ||
                <i
                  className="fa fa-chevron-up cursor-pointer"
                  style={{ float: "right", marginTop: "10px", paddingLeft: 5 }}
                  onClick={() => changeSortType(-1)}
                />
              }
              <div style={{ width: "100px", float: "right" }}>
                <SearchSelect
                  id="issue-page-multi-select"
                  options={filterableForDetailIssue}
                  value={selectedFilterForDetailIssueValue}
                  onChange={e => onChangeFilterForDetailIssue(e)}
                />
              </div>
            </div>
            <div className="box-body scroll-detail">
              {!listIssueIsFetching && <div className="list-group fade">
                {listIssue.map((issue, index) => {
                  const assignee = issue.assignee.map(i => assigneeSelectable.find(a => i == a.value))
                  // console.log(assignee)
                  return (
                    <a
                      className="list-group-item list-group-item-action"
                      key={index}
                      onClick={() => {
                        selectIssue(issue);
                      }}
                    >
                      <div style={{ height: '50px' }}>
                        <div>
                          <div>
                            <span>{issue.summary}</span>
                          </div>
                          {/* <div>
                            <div></div>
                            <div></div>
                          </div> */}
                          {(issue.issueType || {}).iconUrl && (
                            <img src={API + (issue.issueType || {}).iconUrl} />
                          )}
                          {(issue.priority || {}).iconUrl && (
                            <img src={API + (issue.priority || {}).iconUrl} width="18"/>
                          )}
                          &nbsp;<span className="com" style={{textDecorationLine: `${issue.workflow.type == "DONE" && "line-through" || ""}`}}>{issue.issueKey}</span>
                          {assignee && assignee.map((a, aIdx) => {
                            if (a) {
                              return (
                                <img key={aIdx} src={a.iconUrl} width="25px" height="25px" style={{ borderRadius: "50%", float: "right", marginBottom: 10 }} />
                              )
                            }
                          })}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
                ||
                <div className="loader fade">
                  <div />

                </div>}
            </div>
            <div className="box-footer">
              <i className="fa fa-retweet cursor-pointer"
                title="Refesh"
                style={{
                  fontSize: '16px',
                  color: '#5f6c84',
                  marginTop: '8px',
                  marginLeft: '10px'
                }}
                onClick={() => refeshListIssue()}
              />
              <button
                type="button"
                className="btn btn-default"
                onClick={() => openAddIssueModal()}
                style={{ float: 'right' }}
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
                      <i className="fa fa-trello" /> <span style={{ color: "#6d7074" }}>{issueInfo.issueKey}</span>
                    </div>
                  </div>
                  <div id="edit">
                    <input
                      id="edit-summary"
                      value={issueSummary}
                      disabled = {disabled}
                      className="form-control hover-background"
                      style={{ height: "38px", fontSize: "20px", border: 'unset' }}
                      onBlur={() => saveSummary()}
                      onChange={e => updateIssueDetail('summary', e.target.value)}
                      onKeyDown={e => { e.key == 'Enter' && saveSummary() }}
                    />
                  </div>
                  <div className="btn-group m-b-5">
                    <button onClick={() => moveToComment()} type="button" className="btn btn-default btn-sm">
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
                      disabled = {disabled}
                    >
                      More &nbsp;
                      <i className="fa fa-angle-down" />
                    </button>
                    <ul className="dropdown-menu" role="menu">
                      <li onClick={() => removeIssue(issueInfo._id)}>
                        <a>Delete</a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-group m-b-5">
                    <button
                      type="button"
                      className="btn btn-default btn-sm m-b-1"
                      disabled={disabled || ((issueInfo.workflow || {}).type == 'TODO' || issueInfo.closed == true)}
                      onClick={() => updateIssueDetail('workflow', 'TODO')}
                      
                    >
                      {" "}
                      To Do
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm m-b-1"
                      disabled={disabled || ((issueInfo.workflow || {}).type == 'INPROGRESS' || issueInfo.closed == true)}
                      onClick={() => updateIssueDetail('workflow', 'INPROGRESS')}
                    >
                      {" "}
                      In Progress
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-sm m-b-1"
                      disabled={disabled || ((issueInfo.workflow || {}).type == 'DONE' || issueInfo.closed == true)}
                      onClick={() => updateIssueDetail('workflow', 'DONE')}
                    >
                      {" "}
                      Done
                    </button>

                    {!issueInfo.closed &&
                      <button
                        type="button"
                        className="btn btn-danger btn-sm m-b-1"
                        disabled={disabled || (issueInfo.workflow || {}).type != 'DONE'}
                        onClick={() => updateIssueDetail('closed', true)}
                      >
                        {" "}
                        Close Issue
                    </button>
                    }
                    {issueInfo.closed &&
                      <button
                        type="button"
                        className="btn btn-default btn-sm m-b-1"
                        onClick={() => updateIssueDetail('closed', false)}
                      >
                        {" "}
                        Reopen Issue
                    </button>
                    }
                  </div>
                  <div className="col-md-8 p-l-0">
                    <div className="box-body">
                      <div className="box-group" id="accordion">
                        <div className="panel m-b-0">
                          <div className="box-header with-border pd-0">
                            <h4 className="box-title">
                              <a data-toggle="collapse" href="#collapseDetail">
                                <h5>
                                  <span>Details</span>
                                </h5>
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseDetail"
                            className="panel-collapse collapse in"
                          >
                            <div className="box-body flex-center">
                              <div className="col-md-4">
                                <ul className="list-unstyled">
                                  <li>Type:</li>
                                </ul>
                              </div>
                              <div className="col-md-8">
                                <ul className="list-unstyled">
                                  <li>
                                    <SearchSelect
                                      id="issue-page-multi-select"
                                      isDisabled={disabled || (issueInfo.issueType || {}).label == 'Sub Task'}
                                      value={issueInfo.issueType || {}}
                                      options={selectableIssueType || []}
                                      onChange={e => updateIssueDetail('issueType', e)}
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="box-body flex-center" style={{ height: "40px" }}>
                              <div className="col-md-4">
                                <ul className="list-unstyled">
                                  <li>Status:</li>
                                </ul>
                              </div>
                              <div className="col-md-8">
                                <ul className="list-unstyled">
                                  <li style={{ padding: "0 10px" }}>
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
                                </ul>
                              </div>
                            </div>

                            <div className="box-body flex-center">
                              <div className="col-md-4">
                                <ul className="list-unstyled">
                                  <li>Priority:</li>
                                </ul>
                              </div>
                              <div className="col-md-8">
                                <ul className="list-unstyled">
                                  <li>
                                    <SearchSelect
                                      id="issue-page-multi-select"
                                      value={issueInfo.priority || {}}
                                      options={selectablePriority || []}
                                      isDisabled={disabled}
                                      onChange={e => updateIssueDetail('priority', e)}
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="box-body flex-center">
                              <div className="col-md-4">
                                <ul className="list-unstyled">
                                  <li>Labels:</li>
                                </ul>
                              </div>
                              <div className="col-md-8">
                                <ul className="list-unstyled">
                                  <li>
                                    <Creatable
                                      isMulti={true}
                                      id="issue-page-multi-select-label"
                                      isClearable={false}
                                      isDisabled={disabled}
                                      value={issueInfo.label || []}
                                      options={selectableLabel || []}
                                      onChange={e => updateIssueDetail('label', e)}
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="box-body flex-center">
                              <div className="col-md-4">
                                <ul className="list-unstyled">
                                  <li>Story Points:</li>
                                </ul>
                              </div>
                              <div className="col-md-8">
                                <ul className="list-unstyled">
                                  <li>
                                    <Creatable
                                      id="issue-page-multi-select-label"
                                      value={
                                        issueInfo.storyPoints || {}
                                      }
                                      isDisabled={disabled}
                                      options={selectableStoryPoint || []}
                                      onBlur={() => console.log("bur")}
                                      onChange={e => updateIssueDetail('storyPoints', e)}
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="box-body flex-center" style={{ height: "40px" }}>
                              <div className="col-md-4">
                                <ul className="list-unstyled">
                                  <li>Fix Version/s:</li>
                                </ul>
                              </div>
                              <div className="col-md-8">
                                <ul className="list-unstyled">
                                  <li>
                                    <SearchSelect
                                      id="issue-page-multi-select"
                                      options={versionSelectable}
                                      value={issueInfo.version}
                                      isDisabled={disabled}
                                      onChange={e => updateIssueDetail('version', e)}
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="box-body flex-center" style={{ height: "40px" }}>
                              <div className="col-md-4">
                                <ul className="list-unstyled">
                                  <li>Component:</li>
                                </ul>
                              </div>
                              <div className="col-md-8">
                                <ul className="list-unstyled">
                                  <li>
                                    <MultiSelect
                                      id="issue-page-multi-select"
                                      options={componentSelectable}
                                      value={issueInfo.component}
                                      isDisabled={disabled}
                                      onChange={e => updateIssueDetail('component', e)}
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="box-body flex-center" style={{ height: "40px" }}>
                              <div className="col-md-4">
                                <ul className="list-unstyled">
                                  <li>Sprint:</li>
                                </ul>
                              </div>
                              <div className="col-md-8">
                                <ul className="list-unstyled">
                                  <li >
                                    <SearchSelect
                                      id="issue-page-multi-select"
                                      isDisabled={disabled}
                                      options={sprintTypeSelectable.filter(item => item.active == false)}
                                      value={issueInfo.sprint}
                                      onChange={e => updateIssueDetail('sprint', e)}
                                    />
                                  </li>
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
                                  <span>Description</span>
                                </h5>
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseDes"
                            className="box-body panel-collapse collapse in"
                          >
                            {!displayDescriptionEditor &&
                              <div
                                className="box-body fade fade-in cursor-pointer description-text-box"
                                style={{ display: 'block' }}
                                dangerouslySetInnerHTML={{
                                  __html: `${issueInfo.description || ""}`
                                }}
                                onClick={() => !disabled && changeDisplayDescriptionEditor(true, issueInfo.description)}
                              /> ||
                              <div style={{ display: 'block', animation: 'flipInX 0.7s both' }}>
                                <TextEditor
                                  // className="form-control"
                                  name="textDescription"
                                  id="Des"
                                  rows="5"

                                  value={descriptionState || ""}
                                  onChange={value => updateIssueDetail("description", value)}
                                />

                                <div style={{ textAlign: 'right' }}>
                                  <button style={{ margin: '10px' }} className="btn btn-default pd-5"
                                    onClick={() => changeDisplayDescriptionEditor(false)}
                                  >Cancel</button>
                                  <button className="btn btn-primary"
                                    onClick={() => saveDescription()}
                                  >Save</button>
                                </div>
                              </div>

                            }
                            {/* {parser.parseFromString(issueInfo.description, 'text/html')}
                          </div> */}
                          </div>
                        </div>

                        {issueInfo.attachs.length > 0 && (
                          <div className="panel m-b-0">
                            <div className="box-header with-border pd-0">
                              <h4 className="box-title">
                                <a data-toggle="collapse" href="#collapseAtt">
                                  <h5>
                                    <span>Attachments</span>
                                  </h5>
                                </a>
                              </h4>
                            </div>
                            <div
                              id="collapseAtt"
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

                        {(issueInfo.issueType || {}).label != "Sub Task" &&
                          <div className="panel m-b-0" style={{ paddingBottom: 10 }}>
                            <div className="box-header with-border pd-0">
                              <h4 className="box-title">
                                <a data-toggle="collapse" href="#collapseSub">
                                  <h5>
                                    <span>Sub-Tasks</span>
                                  </h5>
                                </a>
                              </h4>
                              <a className="right cursor-pointer">
                                <i className="fa fa-plus"
                                  onClick={() => !disabled && changeDisplayCreateSubtask(true)}
                                />
                              </a>
                            </div>
                            {!_.isEmpty((issueInfo.subtasks || [])[0]) &&
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
                                      {issueInfo.subtasks.map((item, index) => {
                                        return (
                                          <tr key={index} className="cursor-pointer" onClick={(item) => selectIssue(item)}>
                                            <td><img src={API + item.issueType.iconUrl} width="16px" />  {item.issueKey}</td>
                                            <td>
                                              <div className="summary">
                                                {item.summary}
                                              </div>
                                            </td>
                                            <td>
                                              {item.priority && <img width="16px" src={API + item.priority.iconUrl || ''} />}
                                            </td>
                                            <td>
                                              <span className={"label " + generateClassForIssueStatus(item.workflow.type)}>
                                                {item.workflow.name}
                                              </span>
                                            </td>
                                            {/* <td>
                                            <div className="summary">
                                              minhchuongqt@gmail.com
                                            </div>
                                          </td> */}
                                          </tr>

                                        )
                                      })}

                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            }
                            {displayAddSubtask &&
                              <div className="box-body">
                                <input
                                  type="text"
                                  className="form-control"
                                  value={subTaskSummary || ''}
                                  onChange={e => updateIssueDetail("subTaskSummary", e.target.value)}
                                />
                                <div style={{ textAlign: 'right' }}>
                                  <button style={{ margin: '10px' }} className="btn btn-default pd-5"
                                    onClick={() => changeDisplayCreateSubtask(false)}
                                  >Cancel</button>
                                  <button className="btn btn-primary"
                                    onClick={() => createSubtask()}
                                  >Create</button>
                                </div>
                              </div>
                            }
                          </div>}

                        <div className="panel m-b-0">
                          <div className="box-header with-border pd-0">
                            <h4 className="box-title">
                              <a
                                data-toggle="collapse"
                                href="#collapseActivity"
                              >
                                <h5>
                                  <span>Activity</span>
                                </h5>
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseActivity"
                            className="panel-collapse"
                          >
                            <div className="box-body">
                              {issueInfo.activities &&
                                issueInfo.activities.map((item, index) => {
                                  return (
                                    <div
                                      key={index}
                                      className="box-comments comments-conf"
                                      style={{ borderBottom: "1px solid #f4f4f4", padding: '10px 0' }}
                                      dangerouslySetInnerHTML={{
                                        __html: `${item.content +
                                          "at " +
                                          moment(item.createdAt).calendar(null, {
                                            sameDay: 'hh:mm:ss a, [Today]',
                                            nextDay: 'hh:mm:ss a, [Tomorrow]',
                                            nextWeek: 'hh:mm:ss a, dddd',
                                            lastDay: 'hh:mm:ss a, [Yesterday]',
                                            lastWeek: 'hh:mm:ss a, [Last] dddd',
                                            sameElse: 'hh:mm:ss a, MMM DD YYYY'
                                          })}`
                                      }}
                                    />
                                  );
                                })}

                            </div>
                          </div>
                        </div>
                        <div className="panel m-b-0">
                          <div className="box-header with-border pd-0">
                            <h4 className="box-title">
                              <a
                                data-toggle="collapse"
                                href="#collapseComment"
                              >
                                <h5>
                                  <span>Comments</span>
                                </h5>
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseComment"
                            className="panel-collapse collapse in"
                          >
                            {issueInfo.comments &&
                              issueInfo.comments.map((item, index) => {
                                if (item.content)
                                  return (
                                    <div key={index} className="box-comments">
                                      <img
                                        className="img-circle img-sm avatar-comment-conf"
                                        src={API + userInfo.avatarUrl}
                                        alt="User Image"
                                        width="70px"
                                      />
                                      <div
                                        className="box-body box-comments comments-conf"
                                        dangerouslySetInnerHTML={{
                                          __html: `${ "<strong>" + userInfo.fullName + "</strong>" + 
                                          //  "&nbsp; &nbsp;&nbsp; &nbsp;" + 
                                           " at " + 
                                            moment(item.createdAt).calendar(null, {
                                              sameDay: 'hh:mm:ss a, [Today]',
                                              nextDay: 'hh:mm:ss a, [Tomorrow]',
                                              nextWeek: 'hh:mm:ss a, dddd',
                                              lastDay: 'hh:mm:ss a, [Yesterday]',
                                              lastWeek: 'hh:mm:ss a, [Last] dddd',
                                              sameElse: 'hh:mm:ss a, MMM DD YYYY'
                                            })}` + "<br/>" + item.content
                                        }}
                                      />
                                    </div>
                                  );
                              })}
                            <div
                              className="box box-widget"
                            // style={{ margin: "10px 0" }}
                            >
                              <div className="box-footer box-comments">
                                <img
                                  className="img-circle img-sm"
                                  src={API + userInfo.avatarUrl}
                                  alt="User Image"
                                  width="70px"
                                />
                                <div className="comment-text">

                                  <div className="input-group input-group-config">
                                    <input
                                      disabled = {disabled}
                                      id="commentInputIS" className="form-control input-sm"
                                      onKeyPress={e => !disabled && handleKeyPress(e)}
                                      placeholder="Press enter to post comment"
                                      onChange={e =>!disabled && onChangeCommentValue(e.target.value)} />

                                    {/* <div className="input-group-btn">
                                      <button onClick = {() => postComment()} className="btn btn-primary btn-sm"><i className="fa fa-comment"></i></button>
                                    </div> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                                  <span>People</span>
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
                                  {issueInfo.assignee.map((a, aIdx) => {
                                    return (
                                      <SearchSelect
                                        key={aIdx}
                                        id="issue-page-multi-select"
                                        value={a}
                                        isDisabled={disabled}
                                        isClearable={true}
                                        options={selectableAssignee || []}
                                        onChange={value => updateIssueDetail("assignee", value)}
                                      />
                                    );
                                  })}
                                  <SearchSelect
                                    id="issue-page-multi-select"
                                    value={{ label: 'Add another' }}
                                    placeholder="Add another"
                                    isClearable={false}
                                    isDisabled={disabled}
                                    options={selectableAssignee || []}
                                    onChange={value => updateIssueDetail("assignee", value)}
                                  />
                                </li>
                              </ul>
                              {/* } */}
                              <ul className="list-unstyled">
                                <li>Creator:</li>
                                <li>
                                  <div className="box-body">
                                    {issueInfo.creator && issueInfo.creator.avatarUrl &&
                                      <img src={API + issueInfo.creator.avatarUrl} width="35px" height="35px" style={{ borderRadius: "50%" }} />
                                    }&nbsp;&nbsp;
                                    {(issueInfo.creator || {}).displayName || (issueInfo.creator || {}).fullName}
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="panel m-b-0">
                          <div className="box-header with-border pd-0">
                            <h4 className="box-title">
                              <a data-toggle="collapse" href="#collapseDate">
                                <h5>
                                  <span>Dates</span>
                                </h5>
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseDate"
                            className="panel-collapse collapse in"
                          >
                            <div className="box-body" style={{ color: "#6d7074" }}>
                              <ul className="list-unstyled">
                                <li>Created: {issueInfo.createdDate}</li>
                              </ul>
                              <ul className="list-unstyled">
                                <li>Updated: {issueInfo.updatedDate}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="panel m-b-0">
                        <div className="box-header with-border pd-0">
                          <h4 className="box-title">
                            <a data-toggle="collapse" href="#collapseDate">
                              <h5>
                                <span>Sprint History</span>
                              </h5>
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseDate"
                          className="panel-collapse collapse in"
                        >
                          <div className="box-body" style={{ color: "#6d7074" }}>
                            {issueInfo.sprintHistory && issueInfo.sprintHistory.map((item, idx) => {
                              if (idx > 0) {
                                return (
                                  <ul key={idx} className="list-unstyled">
                                    <li>{issueInfo.sprintHistory[idx - 1].label} &nbsp;&nbsp;<i className="fa fa-arrow-right"></i>&nbsp;&nbsp; {item && item.label}</li>
                                  </ul>
                                )
                              }
                            })}

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
