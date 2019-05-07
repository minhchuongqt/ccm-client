import React, { Component } from 'react';
import LoginPageView from './LoginPage';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions/login'
class LoginPageContainer extends Component {

    constructor(props) {
        super(props)
        this.state={
            email: 'cnlimousine@gmail.com',
            password: '123456',
        }
    }

    componentWillReceiveProps(newProps) {
        const {token} = newProps
        console.log('render home page')
        if(token) {
            this.props.history.push('/');
        }
    }

    async onChange(key, value) {
        await this.setState({[key]: value})
    }

    handleLogin ()   {
        console.log('cacacac')
        const {email, password} = this.state
        if(this.state.email && this.state.password) {
        this.props.Login({email, password})
        // localStorage.setItem('accessToken', '123123123123123123123123');
        }
    }

    render() {
        const {email, password} = this.state
        return (
            <div>
                <LoginPageView 
                    {...this.props}
                    email={email}
                    password={password}
                    login = {(email, password) => this.handleLogin(email, password)}
                    onChange =  {(key, value) => this.onChange(key, value)}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    token: state.LoginState.loginState.token
})

const mapDispatchToProps = dispatch => ({
    Login(data) {
        dispatch(actions.login(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(LoginPageContainer));