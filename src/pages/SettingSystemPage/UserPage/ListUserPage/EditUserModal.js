import React, { Component } from "react";
import Modal from 'react-modal'
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zindex: '1999'
    }
};

const EditUserModal = props => {
    return (
        <Modal
            isOpen={props.isOpen}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="col-md-12">
                <div class="box box-primary ">
                    <div class="box-header with-border">
                        <h3 class="box-title">Edit user profile</h3>
                    </div>


                    <form class="form-horizontal">
                        <div class="box-body">
                            <div class="form-group">
                                <label class="col-sm-2 control-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" placeholder="User's email" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">Display name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" placeholder="Display name" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">Fullname</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" placeholder="User's fullname" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">Group</label>
                                <div class="col-sm-10">
                                    <select name="SelectGroup" id="inputSelectGroup" class="form-control" required="required">
                                        <option value="">CC Admin</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div class="box-footer">
                            <button type="submit" class="btn btn-success pull-right">Update</button>
                            <button type="submit" class="btn btn-default pull-right m-r-5">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    )
};

export default EditUserModal;
