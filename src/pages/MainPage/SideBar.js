import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import cx from "classnames";
import * as PATH from "../../constants/data/routeConstants"
import projectImg from'../../assets/img/project.png';

const SideBar = props => {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img src={projectImg} className="img-circle" alt="User Image" />
          </div>
          <div className="pull-left info color-white">
            <p>Delphinus</p>
          </div>
        </div>
        <ul className="sidebar-menu" data-widget="tree">
          <li >
              <Link to={PATH.BACKLOG_URL}><i className="fa fa-cubes"></i> Backlog</Link>
          </li>
          <li >
            <a>
              <i className="fa fa-archive"></i> <span> Active sprints</span>
            </a>
          </li>
          <li >
            <a>
              <Link to={PATH.ISSUE_URL}><i className="fa fa-suitcase"></i> <span> Issue</span></Link>
            </a>
          </li>
          <li >
            <a>
              <i className="fa fa-line-chart"></i> <span> Report</span>
            </a>
          </li>

          <li class="treeview">
              <a href="#"><i class="fa fa-gears"></i> Setting
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu">
                <li class="treeview">
                  <a href="#"><i class="fa fa-circle-o"></i> User Management
                    <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul class="treeview-menu">
                    <li><Link to={PATH.USER_URL}><i class="fa fa-circle-o"></i> Users</Link></li>
                    <li><Link to={PATH.GROUP_URL}><i class="fa fa-circle-o"></i> Groups</Link></li>
                  </ul>
                  <a ><i class="fa fa-circle-o"></i> Project Setting</a>
                </li>
              </ul>
            </li>
        </ul>
      </section>
    </aside>
  );
};

export default SideBar;
