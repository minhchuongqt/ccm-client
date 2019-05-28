import React from "react";
import PropTypes from 'prop-types';
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../../styleSheets/sass/components/Issue/IssueView.scss"
// import imgUser from './../assets/img/avatar5.png'
import SearchSelect from '../multiSelect'
import Modal from 'react-modal'

 const styles = {
    overlay: {
        position: 'fixed',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: '3'
      },
    content : {
        zIndex                : 9,
        top                   : '53%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        maxHeight              : '90%',
        minHeight              : '50%',
        minWidth              :  '50%',
        maxWidth                : '50%'
      }
 }


const AddIssuePage = (props) => {



    // componentWillReceiveProps(newProps) {
    //     const {isOpen} = newProps 
    //     // console.log(isOpen)
    //     if(isOpen) {
    //         document.getElementById('main-body').classList += ' modal-open'
    //         document.getElementById('modal-container').classList = 'modal fade in display-block'
    //     } else {
    //         document.getElementById('main-body').classList += 'A'
    //         document.getElementById('modal-container').classList = 'modal fade'
    //     }
    // }

    // componentDidMount() {
       
    // }

    // componentWillUnmount() {
    //     // document.getElementById('main-body').classList = ''
    //     // document.getElementById('modal-container').classList = 'modal fade'
    // }

    // render() {
        // if(!this.props.isOpen) {
        //     return null;
        // }
        const { listMembers, closeModal, title, isOpen  } = props
        console.log(props)
        return  (
                <Modal isOpen={isOpen} style={styles}>
                        <div className="">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => closeModal()}>
                                    <span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">{title}</h4>
                            </div>
                                    {props.children}
                            {/* <div className="form-horizontal">
                                <div className="modal-body">
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default-c pull-left" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-success-c">Create</button>
                            </div> */}
                        </div>
                </Modal>
           
        )
    }



AddIssuePage.propTypes = {
    listMembers: PropTypes.array,
};

AddIssuePage.defaultProps = {
    listMembers: [
        { label: 'Minh Chuong', value: 'dhfjfasajasdd' },
        { label: 'Bao Dai', value: 'dhfjfjayuyuasdd' },
        { label: 'Cang Pham', value: 'dhfjfjajasdd' },
    ],
};

export default AddIssuePage;
