import React from "react"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import SearchSelect from '../../../components/singleSelect'
import "../../../styleSheets/sass/components/Issue/IssueView.scss"
import { createProject } from "../../../actions/project";

const AddProjectPage = props => {
  const {projectTypeSelectable, onChangeValue, resetValue, createProject} = props
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
                    <input type="text" className="form-control" id="inputSum" 
                      onChange = {e => onChangeValue('name', e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputSum" className="col-sm-3 control-label">Project key<span style={{ color: 'red' }}>*</span></label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="inputSum" 
                      onChange = {e => onChangeValue('key', e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputSum" className="col-sm-3 control-label">Project type</label>
                  <div className="col-sm-9">
                    <SearchSelect
                        options={projectTypeSelectable} 
                        onChange = {e => onChangeValue('projectType', e.value)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Description</label>
                  <div className="col-sm-9">
                    <textarea className="form-control" name="textDescription" id="Des" rows="3"
                        onChange = {e => onChangeValue('description', e.target.value)}
                    />
                  </div>
                </div>


              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default pull-left" data-dismiss="modal"
                onClick={() => resetValue()}
              >Cancel</button>
              <button type="button" className="btn btn-primary" 
                onClick={() => createProject()}
              >Create</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
};

export default AddProjectPage;
