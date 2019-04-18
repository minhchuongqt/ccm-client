import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import EditUserPageContainer from './EditUserPage';
import ListUserPageContainer from './ListUserPage/index';
import AddUserPageContainer from './AddUserPage/index';

class index extends Component {
    render() {
        return (
            <Switch>
                <Route path='/user' exact component={ListUserPageContainer} />
                <Route path='/user/add' component={AddUserPageContainer} />
                <Route path='/user/edit' component={EditUserPageContainer} />
            </Switch>
        );
    }
}

export default index;