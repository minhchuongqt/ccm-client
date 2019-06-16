import React from "react";
import Modal from "../../../../../components/modal";
import DatePicker from "react-datepicker";
import SearchSelect from "../../../../../components/singleSelect"

const AddUserModal = props => {
  const { openModal, closeModal, onChangeValue, data, emailSelectable, isGetEmailFetching, inviteUser } = props;
  return (
    <Modal
      isOpen={openModal}
      title="Invite User"
      closeModal={closeModal}
    >
      <div className="form-horizontal">
        <div className="modal-body">

        <div className="form-group">
            <label className="col-sm-3 control-label">Email</label>
            <div className="col-sm-6">
            <SearchSelect
                value={data.email || ''}
                options={emailSelectable}
                onInputChange={e => onChangeValue("emailText", e)}
                onChange={e => onChangeValue('email', e) }
                isLoading={isGetEmailFetching}
                // asyncOptions={getOptions}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-3 control-label">Display Name</label>
            <div className="col-sm-6">
            <input
                type="text"
                className="form-control"
                disabled
                value={(data.email || {}).displayName || ''}
                // onChange={e => onChangeValue("name", e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-3 control-label">Full Name</label>
            <div className="col-sm-6">
            <input
                type="text"
                className="form-control"
                disabled
                value={(data.email || {}).fullName || ''}
                // onChange={e => onChangeValue("name", e.target.value)}
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
          onClick={() => inviteUser((data.email || {}).value)}
        >
          Invite
        </button>
      </div>
    </Modal>
  );
};

export default AddUserModal;
