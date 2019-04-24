import React, { Component } from "react";

const AddUserPage = props => {
  return (
    <div>
      <div className="modal fade" id="modal-adduser">
        <div className="modal-dialog modal-top">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Create User</h4>
            </div>
            <div className="form-horizontal">
              <div className="modal-body">
                <div className="form-group">
                  <label className="col-sm-2 control-label">Email</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="User's email" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">Display name</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="Display name" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">Fullname</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="User's fullname" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">Group</label>
                  <div className="col-sm-10">
                    <select name="SelectGroup" id="inputSelectGroup" className="form-control" required="required">
                      <option value="">CC Admin</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">Retype password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" placeholder="Retype password" />
                  </div>
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success pull-right" >Create user</button>
                <button type="button" className="btn btn-default pull-right m-r-5" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AddUserPage;
