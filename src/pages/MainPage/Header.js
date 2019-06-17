import React from "react";
import { Link } from "react-router-dom";
import userImg from "../../assets/img/avatar5.png";
import { API } from "../../config";
const Header = props => {
  const { isShow, userInfo } = props;
  return (
    <header className="main-header bg-steelblue">
      <a href="/" className="logo color-white">
        <span className="logo-lg">
          <b>CC</b>Management
        </span>
      </a>
      <nav className="navbar navbar-static-top">
       { isShow && <a
          id="sidebar-action"
          className="sidebar-toggle"
          data-toggle="push-menu"
          role="button"
        >
          <span className="sr-only">Toggle navigation</span>
        </a>}
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">

          <li className="dropdown">
              {/* <a className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-bell-o" />
              </a> */}
              {/* <ul className="dropdown-menu dropdown-menu-custom" role="menu">
              <li className="header">You have 10 notifications</li>
              </ul> */}
            </li>

            {/* <li className="dropdown notifications-menu">
              <a className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-bell-o" />
                <span className="label label-warning">10</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-custom" >
                
                
              </ul>
            </li> */}
            
            <li className="dropdown user user-menu">
              <a className="dropdown-toggle" data-toggle="dropdown">
                <img src={API + userInfo.avatarUrl} className="user-image" alt="User Image" />
                <span className="hidden-xs">{userInfo.fullName || userInfo.displayName || "Unknown"}</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-custom">
                <li className="user-header">
                  <img
                    src={API + userInfo.avatarUrl}
                    className="img-circle"
                    alt="User Image"
                  />

                  <p>
                    {userInfo.fullName || userInfo.displayName} - Web Developer
                  </p>
                </li>
                {/* <li className="user-footer">
                  <div className="pull-left">
                    <button className="btn bg-navy btn-flat">
                      Profile
                    </button>
                  </div>
                </li> */}
              </ul>
            </li>

            <li className="dropdown">
            <Link to="/login"><i className="fa fa-power-off" /></Link>
              {/* <a className="dropdown-toggle" data-toggle="dropdown">
                
              </a>
              <ul className="dropdown-menu dropdown-menu-custom" role="menu">
                <li>
                  
                </li>
              </ul> */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
