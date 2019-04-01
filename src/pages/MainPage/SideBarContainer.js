import React, { Component } from 'react';
import SideBarComponent from '../components/SideBar';
import{Router,Link} from 'react-router-dom';

class SideBar extends Component {

    render() {
        return (
            <SideBarComponent />
        );
    }
}

export default SideBar;