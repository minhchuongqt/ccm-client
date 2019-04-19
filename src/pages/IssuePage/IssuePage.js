import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../../styleSheets/sass/components/Issue/IssueView.scss"
import imgUser from '../../assets/img/avatar5.png'
import AddIssueView from './AddIssuePage/index'
import EditIssueView from './EditIssuePage/index'
const IssuePage = props => {
  return (
    <div id="issue-view">
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Issue</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <EditIssueView/>
      <AddIssueView/>
      <div class="row">
        <div class="col-md-4 p-r-0">
          <div class="box box-success ">
            <div class="box-header with-border">
              <h4 class="box-title">Open Issues</h4>
            </div>
            <div class="box-body scroll-detail">
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active">
                  <div>
                    <div><i class="fa fa-trello"></i> DEL-10</div>
                    <div>As a developer, I can update story and task status</div>
                  </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <div>
                    <div><i class="fa fa-trello"></i> DEL-11</div>
                    <div>Update task status by dragging and dropping from column to column</div>
                  </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <div>
                    <div><i class="fa fa-trello"></i> DEL-12</div>
                    <div>Code login page</div>
                  </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <div>
                    <div><i class="fa fa-trello"></i> DEL-10</div>
                    <div>As a developer, I can update story and task status</div>
                  </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <div>
                    <div><i class="fa fa-trello"></i> DEL-11</div>
                    <div>Update task status by dragging and dropping from column to column</div>
                  </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <div>
                    <div><i class="fa fa-trello"></i> DEL-12</div>
                    <div>Code login page</div>
                  </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <div>
                    <div><i class="fa fa-trello"></i> DEL-10</div>
                    <div>As a developer, I can update story and task status</div>
                  </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <div>
                    <div><i class="fa fa-trello"></i> DEL-11</div>
                    <div>Update task status by dragging and dropping from column to column</div>
                  </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <div>
                    <div><i class="fa fa-trello"></i> DEL-12</div>
                    <div>Code login page</div>
                  </div>
                </a>
              </div>
            </div>
            <div class="box-footer">
              <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default">
                <i class="fa fa-plus" title="Edit" style={{ fontSize: '11px' }}></i> &nbsp;Create issue</button>
            </div>
          </div>
        </div>

        <div class="col-md-8">
          <div class="box box-primary">
            <div class="box-header with-border">
              <h4 class="box-title">Issue Details</h4>
            </div>
            <div class="box-body">
              <div id="edit" contenteditable="true">
                <h3>As a developer, I can update story and task status</h3>
              </div>
              <div className="btn-group m-b-5">
                <button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#modal-editissue"><i class="fa fa-edit" title="Edit"></i> Edit</button>
              </div>
              <div className="btn-group m-b-5">
                <button type="button" class="btn btn-default btn-sm"><i class="fa fa-commenting-o" title="Comment"></i> Comment</button>
              </div>
              <div className="btn-group m-b-5">
                <button type="button" class="btn btn-default btn-sm m-b-1"> Assign</button>
                <button type="button" class="btn btn-default btn-sm m-b-1 dropdown-toggle" data-toggle="dropdown">More &nbsp;<i class="fa fa-angle-down"></i></button>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="#">Log work</a></li>
                  <li class="divider"></li>
                  <li><a href="#">Create a sub-task</a></li>
                  <li class="divider"></li>
                  <li><a href="#">Delete</a></li>
                </ul>
              </div>
              <div className="btn-group m-b-5">
                <button type="button" class="btn btn-primary btn-sm m-b-1"> To Do</button>
                <button type="button" class="btn btn-warning btn-sm m-b-1"> In Progress</button>
                <button type="button" class="btn btn-success btn-sm m-b-1"> Done</button>
              </div>
              <div class="col-md-8 p-l-0">
                <div class="box-body">
                  <div class="box-group" id="accordion">
                    <div class="panel m-b-0">
                      <div class="box-header with-border pd-0">
                        <h4 class="box-title">
                          <a data-toggle="collapse" href="#collapseDetail">
                            <h5><b>Details</b></h5>
                          </a>
                        </h4>
                      </div>
                      <div id="collapseDetail" class="panel-collapse collapse in">
                        <div class="box-body">
                          <div class="col-md-4">
                            <ul class="list-unstyled">
                              <li>Type:</li>
                              <li>Status:</li>
                              <li>Priority:</li>
                              <li>Fix Version/s:</li>
                              <li>Labels:</li>
                              <li>Sprint:</li>
                            </ul>
                          </div>
                          <div class="col-md-8">
                            <ul class="list-unstyled">
                              <li>Story</li>
                              <li><span class="label label-primary">IN PROGRESS</span></li>
                              <li>High</li>
                              <li>Version 2.0</li>
                              <li>None</li>
                              <li>Sprint 2</li>
                            </ul>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div class="panel m-b-0">
                      <div class="box-header with-border pd-0">
                        <h4 class="box-title">
                          <a data-toggle="collapse" href="#collapseDes">
                            <h5><b>Description</b></h5>
                          </a>
                        </h4>
                      </div>
                      <div id="collapseDes" class="panel-collapse collapse in">
                        <div class="box-body">
                          Click to add description
                        </div>
                      </div>
                    </div>

                    <div class="panel m-b-0">
                      <div class="box-header with-border pd-0">
                        <h4 class="box-title">
                          <a data-toggle="collapse" href="#collapseSub">
                            <h5><b>Sub-Tasks</b></h5>
                          </a>
                        </h4>
                      </div>
                      <div id="collapseSub" class="panel-collapse collapse in">
                        <div class="box-body">
                          <table id="issuetable" class="table table-bordered table-hover">
                            <tbody>
                              <tr>
                                <td>1. </td>
                                <td ><div className="summary">Update task status by dragging and dropping from column to column >>
                                  Try dragging this task to "Done"</div></td>
                                <td><i class="fa fa-clone" title="The sub-task of the issue"></i></td>
                                <td><span class="label label-default">TO DO</span></td>
                                <td><div className="summary">minhchuongqt@gmail.com</div></td>
                              </tr>
                              <tr>
                                <td>1. </td>
                                <td ><div className="summary">Update task status by dragging and dropping from column to column >>
                                  Try dragging this task to "Done"</div></td>
                                <td><i class="fa fa-clone" title="The sub-task of the issue"></i></td>
                                <td><span class="label label-default">TO DO</span></td>
                                <td><div className="summary">minhchuongqt@gmail.com</div></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div class="panel m-b-0">
                      <div class="box-header with-border pd-0">
                        <h4 class="box-title">
                          <a data-toggle="collapse" href="#collapseActivity">
                            <h5><b>Activity</b></h5>
                          </a>
                        </h4>
                      </div>
                      <div id="collapseActivity" class="panel-collapse collapse in">
                        <div class="box-body box-comments comments-conf">
                          <div class="box-comment">
                            <div className="col-md-8">
                              <img class="img-circle img-activity" src={imgUser} alt="User Image" />
                              <div class="comment-text">
                                <a class="email">
                                  &nbsp;
                                  phamhongcang.qng@gmail.com
                                  &nbsp;
                              </a>
                                created issue acbsdsdsse sdskdj
                            </div>
                            </div>
                            <div className="col-md-4">
                              <span class="text-muted pull-right">07/Mar/19 10:12 AM</span>
                            </div>
                          </div>

                          <div class="box-comment">
                            <div className="col-md-8">
                              <img class="img-circle img-activity" src={imgUser} alt="User Image" />
                              <div class="comment-text">
                                <a class="email">
                                  &nbsp;
                                  phamhongcSDSSDDSDSDSDSDSang.qng@gmail.com
                                  &nbsp;
                              </a>
                                created issue acbsdsdsse sdskdj
                            </div>
                            </div>
                            <div className="col-md-4">
                              <span class="text-muted pull-right">07/Mar/19 10:12 AM</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>

              <div class="col-md-4 p-l-0">
                <div class="box-body">
                  <div class="box-group" >
                    <div class="panel m-b-0">
                      <div class="box-header with-border pd-0">
                        <h4 class="box-title">
                          <a data-toggle="collapse" href="#collapsePeople">
                            <h5><b>People</b></h5>
                          </a>
                        </h4>
                      </div>
                      <div id="collapsePeople" class="panel-collapse collapse in">
                        <div class="box-body">
                          <ul class="list-unstyled">
                            <li>Assignee:</li>
                            <li>minhchuongqt@gmail.com</li>
                          </ul>
                          <ul class="list-unstyled">
                            <li>Reporter:</li>
                            <li>minhchuongqt@gmail.com</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="panel m-b-0">
                      <div class="box-header with-border pd-0">
                        <h4 class="box-title">
                          <a data-toggle="collapse" href="#collapseDate">
                            <h5><b>Dates</b></h5>
                          </a>
                        </h4>
                      </div>
                      <div id="collapseDate" class="panel-collapse collapse in">
                        <div class="box-body">
                          <ul class="list-unstyled">
                            <li>Created:</li>
                            <li>07/Mar/19 10:12 AM</li>
                          </ul>
                          <ul class="list-unstyled">
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
