import React from "react";
import { Link } from "react-router-dom";
import userImg from "../../assets/img/avatar5.png";
import { API } from "../../config";
const Header = props => {
  const { isShow, userInfo, updateAvatar, changeToLoginPage } = props;
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
                <img src={API +( userInfo.avatarUrl || '/media/avatar5.png')} className="user-image" alt="User Image" />
                <span className="hidden-xs">{userInfo.fullName || userInfo.displayName || "Unknown"}</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-custom">
                <li className="user-header">
                  <div className="profile-img-container">
                    <img
                      src={API + userInfo.avatarUrl}
                      className="img-circle"
                      alt="User Image"
                    />
                    <label  htmlFor="file-upload">
                      <a className="cursor-pointer"><span class="fa fa-upload fa-3x"></span></a>
                    </label>
                    <input
                      onChange={e => {
                        e.preventDefault();
                        let file = e.dataTransfer
                          ? e.dataTransfer.files[0]
                          : e.target.files[0];
                        if (!file) return;
                        updateAvatar('attachs', file);
                      }}

                      type="file"
                      id="file-upload"
                      className="inputfile"
                      style={{display: 'none'}}
                    />
                  </div>
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
            <a onClick={() => changeToLoginPage()}><i className="fa fa-power-off" /></a>
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
