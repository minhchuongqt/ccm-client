import React, { Component } from 'react';

const ListUserPage = props => {
  return (
              <div>
                <div className="box-header">
                  <h3 className="box-title">Users</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-adduser">Create user</button>
                  </div>
                </div>
                <div className="box-body">
                  <table id="example1" className="table table-bordered table-hover">
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
                        <td><span className="label label-success">Active</span></td>
                        <td>Jira Software</td>
                        <td>
                          <div className="btn-group">
                            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-edituser"><i className="fa fa-edit" title="Edit User"></i></button>
                            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modal-deleteuser"><i className="fa fa-trash-o" title="Remove User"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>cangphamqng</td>
                        <td>Pham Hong Cang</td>
                        <td>Jira Admin</td>
                        <td><span className="label label-danger">Deactive</span></td>
                        <td>Jira Software</td>
                        <td>
                          <div className="btn-group">
                            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-edituser"><i className="fa fa-edit" title="Edit User"></i></button>
                            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modal-deleteuser"><i className="fa fa-trash-o" title="Remove User"></i></button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
  )
};

export default ListUserPage;
