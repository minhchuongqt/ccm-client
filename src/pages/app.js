import React, { Component } from 'react';
import API from '../api/base';
import { Switch, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from '../pages/MainPage/HeaderContainer';
import SideBar from '../pages/MainPage/SideBarContainer';
import ProjectPage from '../pages/ProjectPage';
import * as PATH from "../constants/data/routeConstants";
import './App.css';
import './custom.css'
import BacklogPage from './BacklogPage/BacklogPage';
import UserPage from './SettingSystemPage/UserPage/index';
import ActiveSprintPage from './ActiveSprintPage/ActiveSprintPage';
import IssuePage from './IssuePage/IssuePage';
import ReleasePage from './ReleasePage/ReleasePage';
import ReportPage from './ReportPage/ReportPage';
class App extends Component {
    
    componentWillMount() {
        const token = sessionStorage.getItem('access-token');
        if (!token) {
            this.props.history.push('/login')
        }
    }

    componentWillReceiveProps() {
        const token = sessionStorage.getItem('access-token');
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
                            <Route path={PATH.HOME_URL} exact render={() => <ProjectPage />} />
                            <Route path={PATH.BACKLOG_URL} render={() => <BacklogPage />} />
                            <Route path={PATH.ISSUE_URL} render={() => <IssuePage />} />
                            <Route path={PATH.RELEASE_URL} render={() => <ReleasePage />} />
                            <Route path={PATH.REPORT_URL} render={() => <ReportPage />} />
                            <Route path={PATH.SPRINT_URL} render={() => <ActiveSprintPage />} />
                            <Route path={PATH.USER_URL} render={() => <UserPage />} />
                        </Switch>

                    </section>

                </div>
            </div>

        );
    }
}

export default withRouter(App);