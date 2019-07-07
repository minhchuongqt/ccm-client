import React from "react";
import Modal from "../../components/modal";
import DatePicker from "react-datepicker";
import SearchSelect from "../../components/singleSelect";
const AddComponentModal = props => {
  const { openModal, closeModal, onChangeValue, addComponentFormValue, createComponent, selectableLead } = props;
  return (
    <Modal
      isOpen={openModal}
      title="Create New Component"
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
                value={addComponentFormValue.name || ''}
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
                value={addComponentFormValue.description || ''}
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
                value={addComponentFormValue.selectedLead}
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
          onClick={() => createComponent()}
        >
          Create
        </button>
      </div>
    </Modal>
  );
};

export default AddComponentModal;
