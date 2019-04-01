import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import imgProject from '../../assets/img/project.png'
import TableView from '../../components/table/index'
const ProjectPage = props => {
  return (
    <div id="project-view">
      <div>
      <Breadcrumb>
            <BreadcrumbItem active>System Dashboard</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="row">

        <div class="col-md-4">
          <div class="box box-widget widget-user-2">
            <div class="widget-user-header bg-yellow">
              <div class="widget-user-image">
                <img class="img-circle" src={imgProject} alt="User Avatar" />
              </div>
              <h3 class="widget-user-username">Delphinus</h3>
              <h5 class="widget-user-desc">ReactJS, NodeJS</h5>
            </div>
            <div class="box-footer no-padding">
              <ul class="nav nav-stacked">
                <li><a href="#">To Do <span class="pull-right badge bg-blue">31</span></a></li>
                <li><a href="#">In Progress <span class="pull-right badge bg-aqua">5</span></a></li>
                <li><a href="#">Done <span class="pull-right badge bg-green">12</span></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="box box-widget widget-user-2">
            <div class="widget-user-header bg-green">
              <div class="widget-user-image">
                <img class="img-circle" src={imgProject} alt="User Avatar" />
              </div>
              <h3 class="widget-user-username">Smart Buddy</h3>
              <h5 class="widget-user-desc">AngularJS, Golang</h5>
            </div>
            <div class="box-footer no-padding">
              <ul class="nav nav-stacked">
                <li><a href="#">To Do <span class="pull-right badge bg-blue">22</span></a></li>
                <li><a href="#">In Progress <span class="pull-right badge bg-aqua">5</span></a></li>
                <li><a href="#">Done <span class="pull-right badge bg-green">15</span></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="box box-widget widget-user-2">
            <div class="widget-user-header bg-red">
              <div class="widget-user-image">
                <img class="img-circle" src={imgProject} alt="User Avatar" />
              </div>
              <h3 class="widget-user-username">Sodexo</h3>
              <h5 class="widget-user-desc">VueJS, NodeJS</h5>
            </div>
            <div class="box-footer no-padding">
              <ul class="nav nav-stacked">
                <li><a href="#">To Do <span class="pull-right badge bg-blue">28</span></a></li>
                <li><a href="#">In Progress <span class="pull-right badge bg-aqua">7</span></a></li>
                <li><a href="#">Done <span class="pull-right badge bg-green">16</span></a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <TableView />
    </div>
  )
};

export default ProjectPage;
