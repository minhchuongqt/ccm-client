import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import imgProject from '../../assets/img/project.png'
import TableView from '../../components/table/index'
import * as PATH from '../../constants/data/routeConstants'
import {Link} from 'react-router-dom'
const ProjectPage = props => {
  const {userInfo} = props
  return (
    <div id="project-view">
      <div>
      <Breadcrumb>
            <BreadcrumbItem active>System Dashboard</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        
        <div className="col-md-4">
          <div className="box box-widget widget-user-2">
          <Link to={PATH.BACKLOG_URL}><div className="widget-user-header bg-yellow">
              <div className="widget-user-image">
                <img className="img-circle" src={imgProject} alt="Project Avatar" />
              </div>
              <h3 className="widget-user-username">Delphinus</h3>
              <h5 className="widget-user-desc">ReactJS, NodeJS</h5>
            </div>
        </Link>
            <div className="box-footer no-padding">
              <ul className="nav nav-stacked">
                <li><a href="#">To Do <span className="pull-right badge bg-blue">22</span></a></li>
                <li><a href="#">In Progress <span className="pull-right badge bg-aqua">5</span></a></li>
                <li><a href="#">Done <span className="pull-right badge bg-green">15</span></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="box box-widget widget-user-2">
            <div className="widget-user-header bg-green">
              <div className="widget-user-image">
                <img className="img-circle" src={imgProject} alt="User Avatar" />
              </div>
              <h3 className="widget-user-username">Smart Buddy</h3>
              <h5 className="widget-user-desc">AngularJS, Golang</h5>
            </div>
            <div className="box-footer no-padding">
              <ul className="nav nav-stacked">
                <li><a href="#">To Do <span className="pull-right badge bg-blue">22</span></a></li>
                <li><a href="#">In Progress <span className="pull-right badge bg-aqua">5</span></a></li>
                <li><a href="#">Done <span className="pull-right badge bg-green">15</span></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="box box-widget widget-user-2">
            <div className="widget-user-header bg-red">
              <div className="widget-user-image">
                <img className="img-circle" src={imgProject} alt="User Avatar" />
              </div>
              <h3 className="widget-user-username">Sodexo</h3>
              <h5 className="widget-user-desc">VueJS, NodeJS</h5>
            </div>
            <div className="box-footer no-padding">
              <ul className="nav nav-stacked">
                <li><a href="#">To Do <span className="pull-right badge bg-blue">28</span></a></li>
                <li><a href="#">In Progress <span className="pull-right badge bg-aqua">7</span></a></li>
                <li><a href="#">Done <span className="pull-right badge bg-green">16</span></a></li>
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
