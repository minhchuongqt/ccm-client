import React from "react";
import SearchSelect from "../../components/singleSelect";
import Modal from "../../components/modal";
import "../../styleSheets/sass/components/Issue/IssueView.scss";
// import { createProject } from "../../../actions/project";

const AddProjectModal = props => {
  // Modal.setAppElement('body')
  const {
    projectTypeSelectable,
    onChangeValue,
    closeModal,
    createProject,
    openModal,
    data,
  } = props;
  return (
    <Modal isOpen={openModal} title="Create Project" closeModal={closeModal} >
      {/* <div className="modal fade" id="modal-addproject"> */}
      
          <div id="issue-view" className="form-horizontal">
            <div className="modal-body">
              <div className="form-group">
                <label className="col-sm-3 control-label">
                  Project name<span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="inputSum"
                    value={data.name}
                    onChange={e => onChangeValue("name", e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label">
                  Project key<span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control auto-uppercase"
                    id="inputSum"
                    value={data.key}
                    onChange={e => onChangeValue("key", e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label">
                  Project type
                </label>
                <div className="col-sm-9">
                  <SearchSelect
                    options={projectTypeSelectable}
                    value={data.projectType}
                    onChange={e => onChangeValue("projectType", e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label">Description</label>
                <div className="col-sm-9">
                  <textarea
                    className="form-control"
                    name="textDescription"
                    id="Des"
                    rows="3"
                    value={data.description}
                    onChange={e => onChangeValue("description", e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default-c pull-left"
              data-dismiss="modal"
              onClick={() => closeModal()}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-success-c"
              onClick={() => createProject()}
            >
              Create
            </button>
          </div>
        {/* </div> */}
    </Modal>
  );
};

export default AddProjectModal;
