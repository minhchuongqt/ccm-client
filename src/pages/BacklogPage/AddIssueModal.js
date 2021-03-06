import React from "react";
import Modal from "../../components/modal";
import SearchSelect from "../../components/singleSelect";
import MultiSelect from "../../components/multiSelect";
import PropTypes from "prop-types";
import "../../styleSheets/sass/components/Issue/IssueView.scss";
import TextEditor from "../../components/textEditor";
import _ from 'lodash';
// const DropdownIndicator = (props) => {
//   return components.DropdownIndicator && (
//       <components.DropdownIndicator {...props}>
//           <i className="fa fa-search" aria-hidden="true" style={{ position: 'initial' }}></i>
//       </components.DropdownIndicator>
//   );
// };

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
    addIssueFormValue,
    addIssueValue,
    onAddFile,
    onRemoveFile
  } = props;
  // console.log(addIssueFormValue)
  return (
    <Modal isOpen={openModal} title="Create Issue" closeModal={closeModal}>
      <div className="form-horizontal">
        <div className="modal-body">
          <div className="form-group">
            <label className="col-sm-3 control-label">Issue type</label>
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
              <TextEditor
                className="form-control"
                name="textDescription"
                id="Des"
                rows="3"
                value={addIssueFormValue.description || ""}
                onChange={value => onChangeValue("description", value)}
              />
              {/* <textarea
                className="form-control"
                name="textDescription"
                id="Des"
                rows="3"
                value={addIssueFormValue.description}
                onChange={e => onChangeValue("description", e.target.value)}
              /> */}
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">Attach files</label>
            <div className="col-sm-9">
              <label htmlFor="file-upload" className="custom-file-upload">
                <ul
                  className="list-button cursor-pointer"
                  style={{ margin: 0 }}
                >
                  <li>
                    <a className="bt-orange">Upload</a>
                  </li>
                </ul>
              </label>
              <input
                // onChange={e => {
                //   e.preventDefault();
                //   let file = e.dataTransfer
                //     ? e.dataTransfer.files[0]
                //     : e.target.files[0];
                //   if (!file) return;
                //   props.onAddFile(file);
                // }}
                type="file"
                id="file-upload"
                className="inputfile"
              />
            </div>
            <div className="col-xs-12">
              <ul>
                {_.map(props.transferFiles || [], file => (
                  <li
                    key={file.url}
                    style={{
                      marginBottom: 30,
                      marginTop: 5,
                      borderTop: "1px dashed gray"
                    }}
                  >
                    <div className="mg-top-5 mg-bottom-5">
                      <div className="col-xs-10">
                        <span
                          className="size-12"
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            width: "100%",
                            display: "block"
                          }}
                        >
                          {file.id}
                        </span>
                      </div>
                      <div className="col-xs-2 right">
                        <span
                          className="color-red right"
                          style={{ cursor: "pointer" }}
                          onClick={e => {
                            e.stopPropagation();
                            // props.onRemoveFile(file.id);
                          }}
                        >
                          <img
                            src={require("../../assets/img/ic-x.svg")}
                            alt="Delete"
                            className="cursor-pointer"
                          />
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
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
            <label className="col-sm-3 control-label">Sprint</label>
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
          onClick={() => createIssue(addIssueValue)}
        >
          OK
        </button>
      </div>
    </Modal>
  );
};

AddIssueModal.propTypes = {
  listMembers: PropTypes.array
};

AddIssueModal.defaultProps = {
  listMembers: [
    { label: "Minh Chuong", value: "dhfjfasajasdd" },
    { label: "Bao Dai", value: "dhfjfjayuyuasdd" },
    { label: "Cang Pham", value: "dhfjfjajasdd" }
  ]
};

export default AddIssueModal;
