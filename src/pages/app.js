import React, { Component } from 'react';
import API from '../api/base';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from '../pages/MainPage/HeaderContainer';
import SideBar from '../pages/MainPage/SideBarContainer';
import ProjectPage from '../pages/ProjectPage';
import * as PATH from "../constants/data/routeConstants";
import './App.css';
import './custom.css'
import BacklogPage from './BacklogPage/index';
import UserPage from './SettingSystemPage/UserPage/index';
import WorkflowContainer from './SettingSystemPage/Workflow';
import ActiveSprintPage from './ActiveSprintPage/index';
import IssuePage from './IssuePage/index';
import ReleasePage from './ReleasePage/index';
import ReportPage from './ReportPage/index';
import * as actions from '../actions/user'
class App extends Component {
    
    componentWillMount() {
        const token = sessionStorage.getItem('access-token');
        if (!token) {
            this.props.history.push('/login')
        }
        this.getUserInfo()
    }

    componentWillReceiveProps() {
        const token = sessionStorage.getItem('access-token');
        if (!token) {
            this.props.history.push('/login')
        }
    }

    getUserInfo = () => {
        this.props.getUserInfo()
    }

    render() {
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
                            <Route path={PATH.ISSUE_URL} component={IssuePage} />
                            <Route path={PATH.RELEASE_URL} render={() => <ReleasePage />} />
                            <Route path={PATH.REPORT_URL} render={() => <ReportPage />} />
                            <Route path={PATH.SPRINT_URL} render={() => <ActiveSprintPage />} />
                            <Route path={PATH.USER_URL} render={() => <UserPage />} />
                            <Route path={PATH.WORKFLOW_URL} render={() => <WorkflowContainer />} />
                        </Switch>

                    </section>

                </div>
            </div>

        );
    }
}

const mapStateToProps = state => ({
   
})
const mapDispatchToProps = dispatch => ({
    getUserInfo() {
        dispatch(actions.getUserInfo())
    }
})
export default connect(mapStateToProps, mapDispatchToProps) (withRouter(App));