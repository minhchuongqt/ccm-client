import React from "react";
import Modal from "../../components/modal";
import DatePicker from "react-datepicker";
import SearchSelect from "../../components/singleSelect";

const EditVersionModal = props => {
  const { openModal, closeModal, version, submit, versionSelectable, changeConfirmDeleleVersionFormValue } = props;
  console.log(version);
  return (
    <Modal
      isOpen={openModal}
      title={`Delete ${version.name}`}
      closeModal={closeModal}
    >
      <div className="form-horizontal">
        <div className="modal-body">
          <div className="form-group">
            <span style={{ marginLeft: 16 }}>
              Deleting this version will remove it from {version.issueTotal}{" "}issues.
            </span>
          </div>
          <div className="form-group" style={{ marginLeft: 16 }}>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="optionsRadios"
                  id="optionsRadios1"
                  value="option1"
                  checked={version.isMoveIssueToNextVersion}
                  onChange={() => changeConfirmDeleleVersionFormValue('isMoveIssueToNextVersion', true)}
                /> 
                Move issues to
              </label>
              <div style={{ width: "45%", margin: "10px 0" }}>
                <SearchSelect 
                  options={versionSelectable}
                  value={version.nextVersion}
                  isDisabled={!version.isMoveIssueToNextVersion}
                  onChange={e => changeConfirmDeleleVersionFormValue('nextVersion', e)}
                />

              </div>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="optionsRadios"
                  id="optionsRadios1"
                  value="option1"
                  checked={!version.isMoveIssueToNextVersion}
                  onChange={() => changeConfirmDeleleVersionFormValue('isMoveIssueToNextVersion', false)}
                /> 
                Remove the version
              </label>
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
          onClick={() => submit(version)}
        >
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default EditVersionModal;
