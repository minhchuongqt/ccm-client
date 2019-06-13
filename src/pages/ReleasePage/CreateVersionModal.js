import React from "react";
import Modal from "../../components/modal";
import DatePicker from "react-datepicker";

const AddVersionModal = props => {
  const { openModal, closeModal, onChangeValue, addVersionFormValue, createVersion } = props;
  return (
    <Modal
      isOpen={openModal}
      title="Create New Version"
      closeModal={closeModal}
    >
      <div className="form-horizontal">
        <div className="modal-body">
          <div className="form-group">
            <label className="col-sm-3 control-label">Name</label>
            <div className="col-sm-6">
            <input
                type="text"
                className="form-control"
                value={addVersionFormValue.name || ''}
                onChange={e => onChangeValue("name", e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">Start Date</label>
            <div className="col-sm-6">
              <DatePicker 
                  // showTimeSelect
                  // placeholderText="20/12/2018"
                  selected={addVersionFormValue.startDate}
                  onChange={e => onChangeValue('startDate', e)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">Release Date</label>
            <div className="col-sm-6">
              <DatePicker 
                // showTimeSelect
                // placeholderText="20/12/2018"
                selected={addVersionFormValue.releaseDate}
                onChange={e => onChangeValue('releaseDate', e)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">Description</label>
            <div className="col-sm-6">
            <input
                type="text"
                className="form-control"
                value={addVersionFormValue.description || ''}
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
          onClick={() => createVersion()}
        >
          Create
        </button>
      </div>
    </Modal>
  );
};

export default AddVersionModal;
