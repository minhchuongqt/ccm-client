import React, { Component } from 'react';
import LoginPageView from './LoginPage';
import {withRouter} from 'react-router-dom'
class LoginPageContainer extends Component {

    constructor(props) {
        super(props)
        this.state={
            email: '',
            password: '',
        }
    }

    async onChange(key, value) {
        await this.setState({[key]: value})
    }

    handleLogin ()   {
        console.log('cacacac')
        if(this.state.email && this.state.password) {
        localStorage.setItem('accessToken', '123123123123123123123123');  
          this.props.history.push('/');
        }
    }

    render() {
        return (
            <div>
                <LoginPageView 
                {...this.props}
                    login = {(email, password) => this.handleLogin(email, password)}
                    onChange =  {(key, value) => this.onChange(key, value)}
                />
            </div>
        );
    }
}

export default withRouter(LoginPageContainer);