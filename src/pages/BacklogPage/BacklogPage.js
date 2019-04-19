import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import SortableView from '../../components/sortable/SortableComponent'
import "../../styleSheets/sass/components/Backlog/BacklogView.scss"
import AddIssueView from '../IssuePage/AddIssuePage/index'
import AddSprintPageView from './AddSprintPage/index';
import EditSprintPageView from './EditSprintPage/index';
const BacklogPage = props => {
  return (
    <div id="backlog-view">
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Backlog</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <AddSprintPageView/>
      <EditSprintPageView/>
      <AddIssueView />
      <div class="row height-fill">
        <div class="col-md-7 p-r-0 scroll-detail">
          <div class="box box-success ">
            <div class="box-header with-border">
              <h4 class="box-title">Sprint 1</h4>&nbsp;
                <button type="button" class="btn btn-success btn-xs m-l-10"><strong>ACTIVE</strong></button>
              <div class="box-tools pull-right">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><i class="fa fa-ellipsis-h"></i></button>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="" data-toggle="modal" data-target="#modal-editsprint">Edit sprint</a></li>
                  <li><a href="" data-toggle="modal" data-target="#modal-deletesprint">Delete sprint</a></li>
                </ul>
              </div>
              <div className="p-bt">14/Mar/19 7:22 PM<i class="fa fa-angle-double-right p-lr"></i>19/Mar/19 7:22 PM</div>
            </div>
            <div class="box-body">
              <SortableView />
            </div>
            <div class="box-footer">
              <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default">
                <i class="fa fa-plus" title="Edit" style={{ fontSize: '11px' }}></i> &nbsp;Create issue</button>
            </div>
          </div>

          {/* <div class="box box-success ">
            <div class="box-header with-border">
              <h4 class="box-title">Sprint 2</h4>
            <div class="box-tools pull-right">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><i class="fa fa-ellipsis-h"></i></button>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="#">Edit sprint</a></li>
                  <li><a href="#">Delete sprint</a></li>
                </ul>
              </div>
            </div>
            <div class="box-body ">
              <SortableView />
            </div>
            <div class="box-footer">
              <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default">
                <i class="fa fa-plus" title="Edit" style={{ fontSize: '11px' }}></i> &nbsp;Create issue</button>
            </div>
          </div> */}

          <div class="btn-group pull-right">
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modal-addsprint">
              Create sprint</button>
          </div>

        </div>



        <div class="col-md-5 ">
          <div class="box box-success ">
            <div class="box-header with-border">
              <h4 class="box-title">Issue Details</h4>
            </div>
            <div class="box-body">
              <div class="box-body">
                <div id="edit" contenteditable="true">
                  <h3>As a developer, I can update story and task status</h3>
                </div>
                <div class="col-md-12 p-l-0">
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
      </div>


    </div >
  )
};

export default BacklogPage;
