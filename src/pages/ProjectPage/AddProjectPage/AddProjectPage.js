import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../../../styleSheets/sass/components/Issue/IssueView.scss"
const AddProjectPage = props => {
  return (
    <div id="issue-view">
      <div className="modal fade" id="modal-addproject">
        <div className="modal-dialog modal-top">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Create Project</h4>
            </div>
            <div className="form-horizontal">
              <div className="modal-body">

                <div className="form-group">
                  <label for="inputSum" className="col-sm-3 control-label">Project name<span style={{ color: 'red' }}>*</span></label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="inputSum" />
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputSum" className="col-sm-3 control-label">Project key<span style={{ color: 'red' }}>*</span></label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="inputSum" />
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputSum" className="col-sm-3 control-label">Project type</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="inputSum" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Description</label>
                  <div className="col-sm-9">
                    <textarea className="form-control" name="textDescription" id="Des" rows="3"></textarea>
                  </div>
                </div>


              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
};

export default AddProjectPage;
