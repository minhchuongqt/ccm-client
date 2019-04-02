import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import ListUserContainer from './ListUserPage/index';
import AddUserContainer from './AddUserPage/index';

class index extends Component {
    render() {
        return (
            <Switch>
                <Route path='/user' exact component={ListUserContainer} />
                <Route path='/user/add' component={AddUserContainer} />
            </Switch>
        );
    }
}

export default index;