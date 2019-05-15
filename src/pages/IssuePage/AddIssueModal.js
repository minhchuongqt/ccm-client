import React from "react";
import Modal from "../../components/modal";
import "../../styleSheets/sass/components/Issue/IssueView.scss";
import SearchSelect from "../../components/singleSelect";
import MultiSelect from '../../components/multiSelect'
import PropTypes from 'prop-types';
const AddIssueModal = props => {
  // Modal.setAppElement('body')
  const {
    listMembers,
    onChangeValue,
    issueTypeSelectable,
    closeModal,
    createIssue,
    openModal,
    sprintTypeSelectable,
    addIssueFormValue
  } = props;
  return (
    <Modal isOpen={openModal} title="Create Issue" closeModal={closeModal} >

      <div className="form-horizontal">
        <div className="modal-body">
          <div className="form-group">
            <label className="col-sm-3 control-label">
              Issue type
                </label>
            <div className="col-sm-9">
              <SearchSelect
                options={issueTypeSelectable}
                value={addIssueFormValue.issueType}
                onChange={e => onChangeValue("issueType", e)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">
              Summary<span style={{ color: "red" }}>*</span>
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                value={addIssueFormValue.summary}
                onChange={e => onChangeValue("summary", e.target.value)}
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
                value={addIssueFormValue.description}
                onChange={e => onChangeValue("description", e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">Assignee</label>
            <div className="col-sm-9">
              <MultiSelect options={listMembers} />
              <a className="pointer">Assign to me</a>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">
              Sprint
                </label>
            <div className="col-sm-9">
              <SearchSelect
                options={sprintTypeSelectable}
                value={addIssueFormValue.sprint}
                onChange={e => onChangeValue("sprint", e)}
              />
            </div>
          </div>
          {/* <div className="form-group">
            <label className="col-sm-3 control-label">
              Sprint
                </label>
            <div className="col-sm-9">
              <SearchSelect
                options={issueTypeSelectable}
                value={addIssueFormValue.projectType}
                onChange={e => onChangeValue("sprint", e)}
              />
            </div>
          </div> */}
          
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
    </Modal >
  );
};


AddIssueModal.propTypes = {
  listMembers: PropTypes.array,
};

AddIssueModal.defaultProps = {
  listMembers: [
    { label: 'Minh Chuong', value: 'dhfjfasajasdd' },
    { label: 'Bao Dai', value: 'dhfjfjayuyuasdd' },
    { label: 'Cang Pham', value: 'dhfjfjajasdd' },
  ],
};

export default AddIssueModal;
