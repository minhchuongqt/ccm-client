import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import cx from "classnames";

const SideBar = props => {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img
              className="img-circle"
            // src= {require('../../assets/img/ccm-logo.png')}
            />
          </div>
          <div className="pull-left info">
            <p style={{ fontSize: "1.5em" }} className="color-white">
            </p>
          </div>
        </div>
        <Router>
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li className="active treeview">
              <a href="#">
                <i className="fa fa-envelope-o"></i> <span>Dashboard</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li className="active"><a href="index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                <li><a href="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
              </ul>
            </li>
          </ul>
        </Router>
      </section>
    </aside>
  );
};

export default SideBar;
