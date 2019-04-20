import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Link} from 'react-router-dom'
import EditUserView from '../EditUserPage/index'

const ListUserPage = props => {
  const {openEditModal} = props
  return (
     <div>
       <div>
        <Breadcrumb>
          <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
          <BreadcrumbItem><a href="/">Settting</a></BreadcrumbItem>
          <BreadcrumbItem active>User Management</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <EditUserView/>
      <div class = "btn-add-all">
          
          <Link to="/user/add"><button type="button" class="btn btn-success">Create user</button></Link>
          
      </div>
      <div className='delete-button' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.onCancel() } } />

       <div class="box">
            <div class="box-header">
              <h3 class="box-title">Users</h3>
            </div>
            <div class="box-body">
              <table id="example1" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>Username</th>
                  <th>Fullname</th>
                  <th>Group</th>
                  <th>Status</th>
                  <th>Applications</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>minhchuongqt</td>
                  <td>Le Minh Chuong</td>
                  <td>Jira Admin</td>
                  <td><span class="label label-success">Active</span></td>
                  <td>Jira Software</td>
                  <td>
                    <div class="btn-group">
                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modal-edituser"><i class="fa fa-edit" title="Edit User"></i></button>
                    <button type="button" class="btn btn-danger"><i class="fa fa-trash-o" title="Remove User" data-toggle="modal" data-target="#modal-edituser"></i></button>
                     </div>
                  </td>
                </tr>
                <tr>
                  <td>cangphamqng</td>
                  <td>Pham Hong Cang</td>
                  <td>Jira Admin</td>
                  <td><span class="label label-danger">Deactive</span></td>
                  <td>Jira Software</td>
                  <td>
                    <div class="btn-group">
                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modal-edituser"><i class="fa fa-edit" title="Edit User"></i></button>
                    <button type="button" class="btn btn-danger"><i class="fa fa-trash-o" title="Remove User"></i></button>
                     </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
     </div>
     
  )
};

export default ListUserPage;
