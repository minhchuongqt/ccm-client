import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import cx from "classnames";
import * as PATH from "../../constants/data/routeConstants"
import projectImg from'../../assets/img/project.png';

const SideBar = props => {
  const {selectedProject} = props
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img src={projectImg} className="img-circle" alt="User Image" />
          </div>
          <div className="pull-left info color-white">
            <p>{selectedProject.name}</p>
          </div>
        </div>
        <ul className="sidebar-menu" data-widget="tree">
          <li >
              <Link to={PATH.BACKLOG_URL}><i className="fa fa-cubes"></i> Backlog</Link>
          </li>
          <li >
            <Link to={PATH.SPRINT_URL}><i className="fa fa-archive"></i><span> Active sprints</span></Link>
          </li>
          <li >
              <Link to ={PATH.ISSUE_URL}><i className="fa fa-suitcase"></i> <span> Issues</span></Link>
          </li>
          <li >
              <Link to ={PATH.COMPONENT_URL}><i className="fa fa-th-large"></i> <span> Component</span></Link>
          </li>
          <li >
              <Link to ={PATH.RELEASE_URL}><i className="fa fa-cube"></i> <span> Releases</span></Link>
          </li>
          <li >
          <Link to ={PATH.REPORT_URL}><i className="fa fa-line-chart"></i> <span> Reports</span></Link>
          </li>

          <li className="treeview">
              <a className="cursor-pointer"><i className="fa fa-gear"></i> Setting
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
              <li><Link to={PATH.USER_URL}><i className="fa fa-circle-o"></i> User Management</Link></li>
              <li><Link to={PATH.WORKFLOW_URL}><i className="fa fa-circle-o"></i> Workflow</Link></li>
              <li><Link to={PATH.PROJECT_SETTING_URL}><i className="fa fa-circle-o"></i> System Setting</Link></li>
              </ul>
            </li>
        </ul>
      </section>
      <div className="sidebar-background"></div>
    </aside>
  );
};

export default SideBar;
