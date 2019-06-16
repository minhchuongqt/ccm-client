import React from 'react';

const ListUserPage = props => {
  const {listUser, openInviteUserModal} = props;
  console.log(listUser)
  return (
              <div>
                <div className="box-header">
                  <h3 className="box-title">Users</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-success" 
                      onClick={() => openInviteUserModal()}
                    >Invite user</button> 
                    {/* data-toggle="modal" data-target="#modal-adduser" */}
                  </div>
                </div>
                <div className="box-body">
                  <table id="example1" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Email</th>
                        <th>Display name</th>
                        <th>Group</th>
                        <th>Status</th>
                        <th>Applications</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listUser && listUser.map(({member}, index) => {
                        return (
                          <tr key={index}>
                            <td>{member.email}</td>
                            <td>{member.fullName}</td>
                            <td>{''}</td>
                            <td><span className="label label-success">{member.active? "Active": "Deactive"}</span></td>
                            <td>CCM Application</td>
                            <td>
                              <div className="btn-group">
                                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-edituser"><i className="fa fa-edit" title="Edit User"></i></button>
                                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modal-deleteuser"><i className="fa fa-trash-o" title="Remove User"></i></button>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                      
                     
                    </tbody>
                  </table>
                </div>
              </div>
  )
};

export default ListUserPage;
