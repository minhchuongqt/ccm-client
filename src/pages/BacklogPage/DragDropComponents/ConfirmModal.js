import React from "react";

import Modal from "../../../components/modal";
import "../../../styleSheets/sass/components/Issue/IssueView.scss";
// import { createSprint } from "../../../actions/sprint";
import WarningIcon from '../../../assets/img/warning.svg'
const ConfirmModal = props => {
  const { openModal, closeModal, confirmMessage, moveIssue } = props;
  return (
    <Modal isOpen={openModal} title="Move issue" closeModal={closeModal}>
      <div id="issue-view" className="form-horizontal">
        <div className="modal-body">
          <div className="flex-center">
            <img src={WarningIcon} /> Sprint scope will be affected by this action.

          </div>
          <div
            className="flex-center"
            dangerouslySetInnerHTML={{
              __html: `${confirmMessage || ""}`
            }}
          />
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
          onClick={() => {moveIssue(); closeModal()}}
        >
          OK
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmModal