import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import EditUserView from './Users/EditUserPage/index';
import AddUserView from './Users/AddUserPage/index';
import ListUserView from './Users/ListUserPage/index';
import ListGroupView from './Groups/ListGroupPage/index';
import AddGroupView from './Groups/AddGroupPage/index';
import EditGroupView from './Groups/EditGroupPage/index';
const UserManagementPage = props => {
  return (
    <div>
      <div>
        <Breadcrumb>
          <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
          <BreadcrumbItem><a href="/">Settting</a></BreadcrumbItem>
          <BreadcrumbItem active>User Management</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <AddUserView />
      <EditUserView />
      <EditGroupView />
      <AddGroupView />
      <div>
        <div className="nav-tabs-custom">
          <ul className="nav nav-tabs">
            <li className="active"><a href="#tab_1" data-toggle="tab">Users</a></li>
            <li><a href="#tab_2" data-toggle="tab">Groups</a></li>
           
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="tab_1">
              <ListUserView />

            </div>
            <div className="tab-pane" id="tab_2">
              <ListGroupView/>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
};

export default UserManagementPage;
