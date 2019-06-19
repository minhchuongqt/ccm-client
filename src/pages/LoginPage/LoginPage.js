import React from "react";
import Logo from '../../assets/img/ccm-logo.png'
import "../../styleSheets/sass/components/Login/loginView.scss";

const LoginPage = props => {
  return (
    <div id="login-view">
      <div className="login-box">
        <div class="login-main">
          <div className="login-box-body box box-primary box-login-custom">
            <p class="login-box-title p-login">LOGIN</p>
            <p className="login-box-msg p-login">Sign in to start your session</p>
            {/* <form> */}
            <p className="p-login">Email Adress</p>
            <div className="form-group has-feedback">
            <span className="fa fa-user form-control-feedback login-icon-custom" />
              <input type="email" className="form-control login-custom login-input" 
                placeholder="abc@gmail.com"
                onChange={e => props.onChange('email', e.target.value)}
                value={props.email}
              />
              {/* <img class="form-control-feedback login-icon-custom" src={require('../../assets/img/man-user.svg')} alt=""></img> */}
            </div>
            <p className="p-login">Password</p>
            <div className="form-group has-feedback">
            <span className="fa fa-lock form-control-feedback login-icon-custom" />
              <input type="password" className="form-control login-custom login-input password" 
                placeholder="qwerty123"
                onChange={e => props.onChange('password', e.target.value)}
                onKeyDown={e => { e.key == 'Enter' && props.login() }}
                value={props.password}
              />
              {/* <img class="form-control-feedback login-icon-custom" src={require('../../assets/img/password.svg')} alt=""></img> */}
            </div>
            <div class="row">
              <div class="col-xs-12 pad-bottom">
                <button type="submit" id="btnSubmit" onClick={() => props.login()} class="btn btn-login btn-success" >LOGIN</button>
              </div>
              <div class="col-xs-12 forgot">
                <a class="forgot-pass pointer-login" onClick={() => props.history.push('/register')}>Register a new CCM member</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default LoginPage;
