import React from "react";

import Modal from "../../../components/modal";
import "../../../styleSheets/sass/components/Issue/IssueView.scss";
import DatePicker from "react-datepicker";

const AddStepModal = props => {
  // Modal.setAppElement('body')
  const {
    onChangeValue,
    closeModal,
    addStep,
    openModal,
    data
  } = props;
 
  return (
    <Modal isOpen={openModal} title="Create Step" closeModal={closeModal} >
      {/* <div className="modal fade" id="modal-addsprint"> */}

      <div id="issue-view" className="form-horizontal">
        <div className="modal-body">
          <div className="form-group">
            <label className="col-sm-3 control-label">
              Step name<span style={{ color: "red" }}>*</span>
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
              onClick={() => addStep()}
            >
              OK
            </button>
          </div>
      {/* </div> */}
    </Modal>
  );
};

export default AddStepModal;
