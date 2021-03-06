import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../../../styleSheets/sass/components/Issue/IssueView.scss"
import imgUser from '../../../assets/img/avatar5.png'
const EditIssuePage = props => {
  return (
    <div id="issue-view">
      <div className="modal fade" id="modal-editissue">
        <div className="modal-dialog modal-top">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Edit Issue</h4>
            </div>
            <div className="form-horizontal">
              <div className="modal-body">

                <div className="form-group">
                  <label  className="col-sm-3 control-label">Issue Type<span style={{ color: 'red' }}>*</span></label>
                  <div className="col-sm-9">
                    <select className="form-control select2" style = {{width: '100%'}}>
                      <option defaultValue="selected">Story</option>
                      <option>Task</option>
                      <option>Bug</option>
                      <option>Epic</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label  className="col-sm-3 control-label">Summary<span style={{ color: 'red' }}>*</span></label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="inputSum" placeholder="Summary" />
                  </div>
                </div>

               
                <div className="form-group">
                  <label  className="col-sm-3 control-label">Description</label>
                  <div className="col-sm-9">
                      <textarea className="form-control" name="textDescription" id="Des" rows="3"></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Priority</label>
                  <div className="col-sm-9">
                    <select className="form-control select2" style = {{width: '100%'}}>
                      <option defaultValue="selected">Medium</option>
                      <option>Highest</option>
                      <option>High</option>
                      <option>Low</option>
                      <option>Lowest</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Labels</label>
                  <div className="col-sm-9">
                    <select className="form-control select2" style = {{width: '100%'}}>
                      <option defaultValue="selected"></option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Assignee</label>
                  <div className="col-sm-9">
                    <select className="form-control select2" style = {{width: '100%'}}>
                      <option defaultValue="selected">Automatic</option>
                    </select>
                    <a className="pointer">Assign to me</a>
                  </div>
                </div>
                <div className="form-group">
                  <label  className="col-sm-3 control-label">Sprint</label>
                  <div className="col-sm-9">
                  <select className="form-control select2" style = {{width: '100%'}}>
                      <option defaultValue="selected"></option>
                    </select>
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

export default EditIssuePage;
