import React, { Component } from 'react';
import API from '../api/base';
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from '../components/MainPage/HeaderContainer';
import SideBar from '../components/MainPage/SideBar';
import ProjectPage from '../components/ProjectPage';
import * as PATH from "../constants/data/routeConstants";

import './App.css';

class App extends Component {
    componentWillMount() {
        API.get()
        const token = localStorage.getItem('accessToken');
        if (!token) {
            this.props.history.push('/login')
        }
    }

    componentWillReceiveProps() {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <div>
                <Header />
                    <Switch>
                      {/* <Route path={PATH.PROJECT_URL} component = {ProjectPage}/> */}
                      <Route path={PATH.PROJECT_URL} render = { () => <ProjectPage  /> }/>
                    </Switch>
                <SideBar />
            </div>
        );
    }
}

export default withRouter(App);