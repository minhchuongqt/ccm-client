import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log(this.props)
        return (
            <header className="main-header bg-steelblue" >
                <a href="#" className="logo color-white">
                        <span>
                            <span className="logo-mini"><b>Admin asdd</b></span>
                            <span className="logo-lg"><b>Admin</b> Management</span>
                        </span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                <a className="dropdown-toggle cursor-pointer" data-toggle="dropdown"
                                    onClick={() => this.props.logout()}
                                >
                                    <span style={{ color: 'white' }} >Log out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;