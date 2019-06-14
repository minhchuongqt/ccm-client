import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import {API} from '../../../config'
import moment from 'moment'
import { selectIssue } from "../../../actions/issue";
const generateStatus = type => {
  switch (type) {
    case 'DONE':
      return (
        <label className="label label-success">Done</label>
      )
    case 'INPROGRESS':
      return (
        <label className="label label-primary">In Progress</label>
      )
    case 'TODO':
      return (
        <label className="label label-default">To Do</label>
      )
  
    default:
      return '';
  }
}
const VersionDetailPage = props => {
  const { selectedVersion, listIssueOfVersion, issueCount, releaseVersion, unreleaseVersion, selectIssue } = props;
  const sumIssues = (issueCount.done || 0) + (issueCount.inProgress || 0) + (issueCount.toDo || 0) || 0
  const progressDone = (issueCount.done / sumIssues) * 100
  const progressInProgress = (issueCount.inProgress / sumIssues) * 100
  const progressToDo = 100 - progressDone - progressInProgress
  return (
    <div id="version-view">
      <div>
        <Breadcrumb>
          <BreadcrumbItem ><a href="/release">Release</a></BreadcrumbItem>
          <BreadcrumbItem active>Version Detail</BreadcrumbItem>
        </Breadcrumb>
      </div>
      {selectedVersion && (
        <div className="box">
          <div className="box-header">
            <div className="col-md-10">
              <span
                className="active breadcrumb-item sprint-name"
                aria-current="page"
              >
                {selectedVersion.name || 'tesst'}
              </span>
              &nbsp;&nbsp;
              <span className="label label-primary">
                {selectedVersion.status || 'UNRELEASED'}
              </span>
              <br/>
              <span>Start Date: {moment(selectedVersion.startDate).format("MMM DD, YYYY")}</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>Release Date: {moment(selectedVersion.releaseDate).format("MMM DD, YYYY")}</span>
              <br/>
              <span>Description: {selectedVersion.description || 'description'}</span>
            </div>
            <div className="group-btn col-md-2">
              { selectedVersion.released &&
              <button type="submit" className="btn btn-primary" style={{ float: "right" }}
                onClick={() => unreleaseVersion(selectedVersion._id)}
              >
                Unrelease
              </button>
              ||
              <button type="submit" className="btn btn-primary" style={{ float: "right" }}
                onClick={() => releaseVersion(selectedVersion._id)}
              >
                Release
              </button>}
            </div>
            
          </div>
          <div className="box-body">
            <div className="progress sm">
              <div
                className="progress-bar progress-bar-green"
                style={{ width: `${progressDone}%` }}
              />
              <div
                className="progress-bar progress-bar-blue"
                style={{ width: `${progressInProgress}%` }}
              />
              <div
                className="progress-bar progress-bar-default"
                style={{ width: `${progressToDo}%` }}
              />
            </div>
            <div>
              <nav className="release-report-tab-header">
                <ul>
                  <li className="release-report-tab">
                    <span className="tab-count">{sumIssues || 0}</span>
                    <span className="tab-label">Issues in<br/>version</span>
                  </li>
                  <li className="release-report-tab">
                    <span className="tab-count color-green">{issueCount.done || 0}</span>
                    <span className="tab-label">Issues<br/>done</span>
                  </li>
                  <li className="release-report-tab">
                    <span className="tab-count color-blue">{issueCount.inProgress || 0}</span>
                    <span className="tab-label">Issues<br/>in rogress</span>
                  </li>
                  <li className="release-report-tab">
                    <span className="tab-count color-grey">{issueCount.toDo || 0}</span>
                    <span className="tab-label">Issues<br/>to do</span>
                  </li>
                </ul>
              </nav>
            </div>
            <table id="example1" className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th style={{width: '5%'}}>Priority</th>
                  <th style={{width: '5%'}}>Type</th>
                  <th style={{width: '5%'}}>Key</th>
                  <th style={{width: '69%'}}>Summary</th>
                  <th style={{width: '10%'}}>Assignee</th>
                  <th style={{width: '6%'}}>Status</th>
                </tr>
              </thead>
              <tbody>
                {listIssueOfVersion && 
                listIssueOfVersion.map((issue, index) => {
                  return (
                    <tr className="cursor-pointer" key={index} onClick={() => selectIssue(issue._id)}>
                      <td><img src={API + ((issue.priority || {}).iconUrl || '/media/medium.svg')} width="18"/></td>
                      <td><img src={API + (issue.issueType || {}).iconUrl}/></td>
                      <td>{issue.issueKey}</td>
                      <td>{issue.summary}</td>
                      <td>{issue.assignee.map(item => {
                        return (
                          <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <img 
                              style={{borderRadius: "50%"}} 
                              width="28" 
                              height="28" 
                              src={API + (item.avatarUrl || '/media/emptyAvatar.png')}
                            />
                            &nbsp;&nbsp;
                            {item.displayName || item.fullName}
                          </span>
                        )
                      })}</td>
                      <td>{generateStatus((issue.workflow || {}).type || '')}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default VersionDetailPage;
