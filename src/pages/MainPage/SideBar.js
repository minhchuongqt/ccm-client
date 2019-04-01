import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import cx from "classnames";

const SideBar = props => {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
          </div>
          <div className="pull-left info color-white">
            <p>Delphinus</p>
          </div>
        </div>
        <Router>
          <ul className="sidebar-menu" data-widget="tree">
            <li className="active treeview">
              <a href="#">
              <i className="fa fa-cubes"></i> <span>Backlog</span>
              </a>
            </li>
            <li className="active treeview">
              <a href="#">
                <i className="fa fa-archive"></i> <span>Active sprints</span>
              </a>
            </li>
            <li className="active treeview">
              <a href="#">
                <i className="fa fa-suitcase"></i> <span>Issue</span>
              </a>
            </li>
            <li className="active treeview">
              <a href="#">
                <i className="fa fa-line-chart"></i> <span>Report</span>
              </a>
            </li>
          </ul>
        </Router>
      </section>
    </aside>
  );
};

export default SideBar;
