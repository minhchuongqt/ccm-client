import React, { Component } from 'react';
import RegisterPageView from './RegisterPage';
import RegisterActions from '../../actions/register';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as selectors from '../../selectors/register'
import {toast} from 'react-toastify'
class RegisterPageContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        }
    }
    componentWillReceiveProps(newProps) {
       const {registerStatus} = newProps
       if(registerStatus) {
           toast.success("Register successful !")
           this.props.history.push('/login')
           this.props.resetRegisterStatus()
       }
    }
    changeValue  = (key, value) => {
      this.setState({[key]:value});
    }

    register = () => {
        const data = this.state;
        this.props.register(data);
    }

    render() {
        
        return (
            <div>
                <RegisterPageView 
                    {...this.state}
                   changeValue = {(key, value) => this.changeValue(key, value)}
                   register = {this.register}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    registerStatus: selectors.getRegisterStatus(state)
})

const mapDispatchToProps = dispatch => ({
    register(data) {
        dispatch(RegisterActions.register(data));
    },
    resetRegisterStatus() {
        dispatch(RegisterActions.resetRegisterStatus())
    }
})


export default connect(mapStateToProps, mapDispatchToProps) (withRouter(RegisterPageContainer));