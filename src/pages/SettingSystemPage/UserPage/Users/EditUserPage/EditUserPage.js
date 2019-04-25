import React from "react";
const EditUserPage = props => {
  return (
    <div >
      <div className="modal fade" id="modal-edituser">
        <div className="modal-dialog modal-top">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Edit User</h4>
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

              </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-success pull-right" >Update</button>
            <button type="button" className="btn btn-default pull-right m-r-5" data-dismiss="modal">Cancel</button>
          </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-deleteuser">
        <div className="modal-dialog modal-top">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Delete User</h4>
            </div>
            <div className="form-horizontal">
              <div className="modal-body">
              <p>Are you sure you want to delete user <strong>ABC</strong>?</p>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-danger">Confirm Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default EditUserPage;
