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
      <div className="row height-fill">
        <div className="col-md-7 p-r-0 scroll-detail">
          <div className="box box-success ">
            <div className="box-header with-border">
              <h4 className="box-title">Sprint 1</h4>&nbsp;
                <button type="button" className="btn btn-success btn-xs m-l-10"><strong>ACTIVE</strong></button>
              <div className="box-tools pull-right">
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></button>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="" data-toggle="modal" data-target="#modal-editsprint">Edit sprint</a></li>
                  <li><a href="" data-toggle="modal" data-target="#modal-deletesprint">Delete sprint</a></li>
                </ul>
              </div>
              <div className="p-bt">14/Mar/19 7:22 PM<i className="fa fa-angle-double-right p-lr"></i>19/Mar/19 7:22 PM</div>
            </div>
            <div className="box-body">
              <SortableView />
            </div>
            <div className="box-footer">
              <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modal-default">
                <i className="fa fa-plus" title="Edit" style={{ fontSize: '11px' }}></i> &nbsp;Create issue</button>
            </div>
          </div>

          {/* <div className="box box-success ">
            <div className="box-header with-border">
              <h4 className="box-title">Sprint 2</h4>
            <div className="box-tools pull-right">
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></button>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">Edit sprint</a></li>
                  <li><a href="#">Delete sprint</a></li>
                </ul>
              </div>
            </div>
            <div className="box-body ">
              <SortableView />
            </div>
            <div className="box-footer">
              <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modal-default">
                <i className="fa fa-plus" title="Edit" style={{ fontSize: '11px' }}></i> &nbsp;Create issue</button>
            </div>
          </div> */}

          <div className="btn-group pull-right">
            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-addsprint">
              Create sprint</button>
          </div>

        </div>



        <div className="col-md-5 ">
          <div className="box box-success ">
            <div className="box-header with-border">
              <h4 className="box-title">Issue Details</h4>
            </div>
            <div className="box-body">
              <div className="box-body">
                <div id="edit" contenteditable="true">
                  <h3>As a developer, I can update story and task status</h3>
                </div>
                <div className="col-md-12 p-l-0">
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
      </div>


    </div >
  )
};

export default BacklogPage;
