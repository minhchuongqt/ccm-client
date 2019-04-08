import React, { Component } from 'react';
import API from '../api/base';
import { Switch, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from '../pages/MainPage/HeaderContainer';
import SideBar from '../pages/MainPage/SideBar';
import ProjectPage from '../pages/ProjectPage';
import Base from '../pages/Base/Base'
import Board from '../pages/Board/Board';
import * as PATH from "../constants/data/routeConstants";
import { IndexRoute } from 'react-router';
import './App.css';
import './custom.css'
import BacklogPage from './BacklogPage/BacklogPage';
import UserPage from './UserPage/index';
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
        console.log('reder app')
        return (
            <div>
                <Header />
                <SideBar />
                <div className="content-wrapper"
                    style={{ overflow: "auto", maxHeight: "607px" }}>
                    <section className="content-header">
                        <Switch>
                            {/* <Route path={PATH.PROJECT_URL} component = {ProjectPage}/> */}
                            <Route path={PATH.ISSUE_URL} component={Base}>
                                <Route component={Board} />
                            </Route>
                            <Route path={PATH.HOME_URL} exact render={() => <ProjectPage />} />
                            <Route path={PATH.BACKLOG_URL} render={() => <BacklogPage />} />
                            <Route path={PATH.USER_URL} render={() => <UserPage />} />
                        </Switch>

                    </section>

                </div>
            </div>

        );
    }
}

export default withRouter(App);