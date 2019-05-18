import React, { Component } from 'react';
import RegisterPageView from './RegisterPage';
import RegisterActions from '../../actions/register';
import {connect} from 'react-redux';
import { dispatch } from 'rxjs/internal/observable/pairs';

class RegisterPageContainer extends Component {
    constructor() {
        super()
        this.state = {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        }
    }

    changeValue  = async (key, value) => {
        await this.setState({[key]:value});
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

})

const mapDispatchToProps = dispatch => ({
    register(data) {
        dispatch(RegisterActions.register(data));
    }
})


export default connect(mapStateToProps, mapDispatchToProps) (RegisterPageContainer);