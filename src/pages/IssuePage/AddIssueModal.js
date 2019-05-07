import React from "react";
import Modal from "../../components/modal";
import "../../styleSheets/sass/components/Issue/IssueView.scss";
import SearchSelect from "../../components/singleSelect";
const AddIssueModal = props => {
  // Modal.setAppElement('body')
  const {
    onChangeValue,
    closeModal,
    createIssue,
    openModal,
    data,
  } = props;
  return (
    <Modal isOpen={openModal} title="Create Issue" closeModal={closeModal} >

      <div id="issue-view" className="form-horizontal">
        <div className="modal-body">
          <div className="form-group">
            <label className="col-sm-3 control-label">
              Summary<span style={{ color: "red" }}>*</span>
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                value={data.summary}
                onChange={e => onChangeValue("summary", e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">
              Issue Key<i class="fas fa-key    "></i><span style={{ color: "red" }}>*</span>
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                value={data.issueKey}
                onChange={e => onChangeValue("issueKey", e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">
              Project type
                </label>
            <div className="col-sm-9">
              <SearchSelect
                value={data.projectType}
                onChange={e => onChangeValue("projectType", e)}
              />
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
            onClick={() => createIssue()}
          >
            OK
            </button>
        </div>
        </div>
    </Modal>
      );
    };
    
    export default AddIssueModal;
