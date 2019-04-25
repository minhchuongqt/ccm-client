import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../../styleSheets/sass/components/Issue/IssueView.scss"
import imgUser from '../../assets/img/avatar5.png'
import AddIssueView from './AddIssuePage/index'
import EditIssueView from './EditIssuePage/index'
const IssuePage = props => {
  const {listIssue} =props
  return (
    <div id="issue-view">
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Issue</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <EditIssueView/>
      <AddIssueView/>
      <div className="row">
        <div className="col-md-4 p-r-0">
          <div className="box box-success ">
            <div className="box-header with-border">
              <h4 className="box-title">Open Issues</h4>
            </div>
            <div className="box-body scroll-detail">
              <div className="list-group">
                <a href="#" target="_blank" className="list-group-item list-group-item-action active">
                  <div>
                    <div><i className="fa fa-trello"></i> DEL-10</div>
                    <div>As a developer, I can update story and task status</div>
                  </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div>
                    <div><i className="fa fa-trello"></i> DEL-11</div>
                    <div>Update task status by dragging and dropping from column to column</div>
                  </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div>
                    <div><i className="fa fa-trello"></i> DEL-12</div>
                    <div>Code login page</div>
                  </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div>
                    <div><i className="fa fa-trello"></i> DEL-10</div>
                    <div>As a developer, I can update story and task status</div>
                  </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div>
                    <div><i className="fa fa-trello"></i> DEL-11</div>
                    <div>Update task status by dragging and dropping from column to column</div>
                  </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div>
                    <div><i className="fa fa-trello"></i> DEL-12</div>
                    <div>Code login page</div>
                  </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div>
                    <div><i className="fa fa-trello"></i> DEL-10</div>
                    <div>As a developer, I can update story and task status</div>
                  </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div>
                    <div><i className="fa fa-trello"></i> DEL-11</div>
                    <div>Update task status by dragging and dropping from column to column</div>
                  </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div>
                    <div><i className="fa fa-trello"></i> DEL-12</div>
                    <div>Code login page</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="box-footer">
              <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modal-default">
                <i className="fa fa-plus" title="Edit" style={{ fontSize: '11px' }}></i> &nbsp;Create issue</button>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="box box-primary">
            <div className="box-header with-border">
              <h4 className="box-title">Issue Details</h4>
            </div>
            <div className="box-body">
              <div id="edit">
                <h3>As a developer, I can update story and task status</h3>
              </div>
              <div className="btn-group m-b-5">
                <button type="button" className="btn btn-default btn-sm" data-toggle="modal" data-target="#modal-editissue"><i className="fa fa-edit" title="Edit"></i> Edit</button>
              </div>
              <div className="btn-group m-b-5">
                <button type="button" className="btn btn-default btn-sm"><i className="fa fa-commenting-o" title="Comment"></i> Comment</button>
              </div>
              <div className="btn-group m-b-5">
                <button type="button" className="btn btn-default btn-sm m-b-1"> Assign</button>
                <button type="button" className="btn btn-default btn-sm m-b-1 dropdown-toggle" data-toggle="dropdown">More &nbsp;<i className="fa fa-angle-down"></i></button>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">Log work</a></li>
                  <li className="divider"></li>
                  <li><a href="#">Create a sub-task</a></li>
                  <li className="divider"></li>
                  <li><a href="#">Delete</a></li>
                </ul>
              </div>
              <div className="btn-group m-b-5">
                <button type="button" className="btn btn-primary btn-sm m-b-1"> To Do</button>
                <button type="button" className="btn btn-warning btn-sm m-b-1"> In Progress</button>
                <button type="button" className="btn btn-success btn-sm m-b-1"> Done</button>
              </div>
              <div className="col-md-8 p-l-0">
                <div className="box-body">
                  <div className="box-group" id="accordion">
                    <div className="panel m-b-0">
                      <div className="box-header with-border pd-0">
                        <h4 className="box-title">
                          <a data-toggle="collapse" href="#collapseDetail">
                            <h5><b>Details</b></h5>
                          </a>
                        </h4>
                      </div>
                      <div id="collapseDetail" className="panel-collapse collapse in">
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
                              <li>Story</li>
                              <li><span className="label label-primary">IN PROGRESS</span></li>
                              <li>High</li>
                              <li>Version 2.0</li>
                              <li>None</li>
                              <li>Sprint 2</li>
                            </ul>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div className="panel m-b-0">
                      <div className="box-header with-border pd-0">
                        <h4 className="box-title">
                          <a data-toggle="collapse" href="#collapseDes">
                            <h5><b>Description</b></h5>
                          </a>
                        </h4>
                      </div>
                      <div id="collapseDes" className="panel-collapse collapse in">
                        <div className="box-body">
                          Click to add description
                        </div>
                      </div>
                    </div>

                    <div className="panel m-b-0">
                      <div className="box-header with-border pd-0">
                        <h4 className="box-title">
                          <a data-toggle="collapse" href="#collapseSub">
                            <h5><b>Sub-Tasks</b></h5>
                          </a>
                        </h4>
                      </div>
                      <div id="collapseSub" className="panel-collapse collapse in">
                        <div className="box-body">
                          <table id="issuetable" className="table table-bordered table-hover">
                            <tbody>
                              <tr>
                                <td>1. </td>
                                <td ><div className="summary">Update task status by dragging and dropping from column to column >>
                                  Try dragging this task to "Done"</div></td>
                                <td><i className="fa fa-clone" title="The sub-task of the issue"></i></td>
                                <td><span className="label label-default">TO DO</span></td>
                                <td><div className="summary">minhchuongqt@gmail.com</div></td>
                              </tr>
                              <tr>
                                <td>1. </td>
                                <td ><div className="summary">Update task status by dragging and dropping from column to column >>
                                  Try dragging this task to "Done"</div></td>
                                <td><i className="fa fa-clone" title="The sub-task of the issue"></i></td>
                                <td><span className="label label-default">TO DO</span></td>
                                <td><div className="summary">minhchuongqt@gmail.com</div></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div className="panel m-b-0">
                      <div className="box-header with-border pd-0">
                        <h4 className="box-title">
                          <a data-toggle="collapse" href="#collapseActivity">
                            <h5><b>Activity</b></h5>
                          </a>
                        </h4>
                      </div>
                      <div id="collapseActivity" className="panel-collapse collapse in">
                        <div className="box-body box-comments comments-conf">
                          <div className="box-comment">
                            <div className="col-md-8">
                              <img className="img-circle img-activity" src={imgUser} alt="User Image" />
                              <div className="comment-text">
                                <a className="email">
                                  &nbsp;
                                  phamhongcang.qng@gmail.com
                                  &nbsp;
                              </a>
                                created issue acbsdsdsse sdskdj
                            </div>
                            </div>
                            <div className="col-md-4">
                              <span className="text-muted pull-right">07/Mar/19 10:12 AM</span>
                            </div>
                          </div>

                          <div className="box-comment">
                            <div className="col-md-8">
                              <img className="img-circle img-activity" src={imgUser} alt="User Image" />
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
                              <span className="text-muted pull-right">07/Mar/19 10:12 AM</span>
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
                  <div className="box-group" >
                    <div className="panel m-b-0">
                      <div className="box-header with-border pd-0">
                        <h4 className="box-title">
                          <a data-toggle="collapse" href="#collapsePeople">
                            <h5><b>People</b></h5>
                          </a>
                        </h4>
                      </div>
                      <div id="collapsePeople" className="panel-collapse collapse in">
                        <div className="box-body">
                          <ul className="list-unstyled">
                            <li>Assignee:</li>
                            <li>minhchuongqt@gmail.com</li>
                          </ul>
                          <ul className="list-unstyled">
                            <li>Reporter:</li>
                            <li>minhchuongqt@gmail.com</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="panel m-b-0">
                      <div className="box-header with-border pd-0">
                        <h4 className="box-title">
                          <a data-toggle="collapse" href="#collapseDate">
                            <h5><b>Dates</b></h5>
                          </a>
                        </h4>
                      </div>
                      <div id="collapseDate" className="panel-collapse collapse in">
                        <div className="box-body">
                          <ul className="list-unstyled">
                            <li>Created:</li>
                            <li>07/Mar/19 10:12 AM</li>
                          </ul>
                          <ul className="list-unstyled">
                            <li>Updated:</li>
                            <li>5 days ago</li>
                          </ul>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>

              </div>
            </div>


          </div>
        </div>
      </div>

    </div >
  )
};

export default IssuePage;
