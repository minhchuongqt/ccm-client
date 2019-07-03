import React from 'react';

const ListGroupPage = props => {
  return (
              <div>
                <div className="box-header">
                  <h3 className="box-title">Groups</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-addgroup">Create group</button>
                  </div>
                </div>
                <div className="box-body">
                  <table id="example1" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Group name</th>
                        <th>Description</th>
                        <th>Access to product</th>
                        <th>Product administration</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr>
                        <td>administrators</td>
                        <td>Grants access to all applications (excluding Site administration)</td>
                        <td className="text-align-center"><i className="fa fa-check-circle"></i></td>
                        <td className="text-align-center"><i className="fa fa-check-circle"></i></td>
                        <td>
                          <div className="btn-group">
                            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-editgroup"><i className="fa fa-user-plus" title="Add Members"></i></button>
                            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modal-deletegroup"><i className="fa fa-trash-o" title="Delete Group"></i></button>
                          </div>
                        </td>
                      </tr> */}

                      <tr>
                        <td>Manager</td>
                        <td>Grant access to the administration features of CCM</td>
                        <td className="text-align-center"><i className="fa fa-times-circle"></i></td>
                        <td className="text-align-center"><i className="fa fa-check-circle"></i></td>
                        <td>
                          <div className="btn-group">
                            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-editgroup"><i className="fa fa-user-plus" title="Add Members"></i></button>
                            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modal-deletegroup"><i className="fa fa-trash-o" title="Delete Group"></i></button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Member</td>
                        <td>Grants access to CCM Application</td>
                        <td className="text-align-center"><i className="fa fa-check-circle"></i></td>
                        <td className="text-align-center"><i className="fa fa-times-circle"></i></td>
                        <td>
                          <div className="btn-group">
                            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-editgroup"><i className="fa fa-user-plus" title="Add Members"></i></button>
                            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modal-deletegroup"><i className="fa fa-trash-o" title="Delete Group"></i></button>
                          </div>
                        </td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
              </div>
  )
};

export default ListGroupPage;
