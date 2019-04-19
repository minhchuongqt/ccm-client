import React from 'react';
import { Link } from 'react-router-dom'
import * as PATH from '../../constants/data/routeConstants'
import img from '../../assets/img/ccm-logo.png'
import userImg from '../../assets/img/avatar5.png';
class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log(this.props)
        return (
            <header className="main-header bg-steelblue" >
                <a href="/" className="logo color-white">
                    <span className="logo-lg"><b>CC</b>Management</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown notifications-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-bell-o"></i>
                                    <span className="label label-warning">10</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 10 notifications</li>
                                </ul>
                            </li>
                            <li className="dropdown user user-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <img src={userImg} className="user-image" alt="User Image" />
                                    <span className="hidden-xs">Pham Hong Cang</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="user-header">
                                        <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />

                                        <p>
                                            Pham Hong Cang - Web Developer
                                            <small>Member since Nov. 2018</small>
                                        </p>
                                    </li>
                                    <li className="user-footer">
                                        <div className="pull-left">
                                            <a href="#" className="btn btn-default btn-flat">Profile</a>
                                        </div>
                                        <div className="pull-right">
                                            <Link to="/login"><a href="#" className="btn btn-default btn-flat">Sign out</a> </Link>
                                        </div>
                                    </li>
                                </ul>
                            </li>


                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-gears"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Log work</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Create a sub-task</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Delete</a></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/user"></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;