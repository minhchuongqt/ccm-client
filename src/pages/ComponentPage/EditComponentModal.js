import React from "react";
import Modal from "../../components/modal";
import DatePicker from "react-datepicker";
import SearchSelect from "../../components/singleSelect";
const EditComponentModal = props => {
  const { openModal, closeModal, onChangeValue, editComponentFormValue, updateComponent, selectableLead } = props;
  return (
    <Modal
      isOpen={openModal}
      title="Edit Component"
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
                value={editComponentFormValue.name || ''}
                onChange={e => onChangeValue("name", e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">Description</label>
            <div className="col-sm-6">
            <input
                type="text"
                className="form-control"
                value={editComponentFormValue.description || ''}
                onChange={e => onChangeValue("description", e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">Component Lead</label>
            <div className="col-sm-6">
            <SearchSelect
                // className="form-control"
                options={selectableLead}
                value={editComponentFormValue.lead}
                onChange={e => onChangeValue("lead", e)}
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
          onClick={() => updateComponent()}
        >
          Save
        </button>
      </div>
    </Modal>
  );
};

export default EditComponentModal;
