import React from "react";
import * as PATH from "../../constants/data/routeConstants"
import { HashRouter as Link } from "react-router-dom";
import "../../styleSheets/sass/components/Login/loginView.scss";
// import Propstype from 
const RegisterPage = props => {
  return (
    <div id="login-view">
      <div className="login-box">
        <div class="login-main">

          <div className="login-box-body box box-primary box-register-custom">
            <p class="login-box-title p-register register-title">REGISTER</p>
            {/* <p className="login-box-msg">Sign in to start your session</p> */}
            <p className="p-register">Full name</p>
            <div className="form-group has-feedback">
              <input type="text" className="form-control login-custom login-input" 
                value={props.fullName}
                onChange={e => props.changeValue('fullName', e.target.value)}
              />
              <img class="form-control-feedback login-icon-custom" src={require('../../assets/img/man-user.svg')} alt=""></img>
            </div>
            <p className="p-register">Email Adress</p>
            <div className="form-group has-feedback">
              <input type="email" className="form-control login-custom login-input" 
                value={props.email}
                onChange={e => props.changeValue('email', e.target.value)}
              />
              <img class="form-control-feedback login-icon-custom" src={require('../../assets/img/man-user.svg')} alt=""></img>
            </div>
            <p className="p-register">Password</p>
            <div className="form-group has-feedback">
              <input type="password" className="form-control login-custom login-input password" 
                value={props.password}
                onChange={e => props.changeValue('password', e.target.value)} />
                <img class="form-control-feedback login-icon-custom" src={require('../../assets/img/password.svg')} alt=""></img>
            </div>
            <p className="p-register">Retype password</p>
            <div className="form-group has-feedback">
              <input type="password" className="form-control login-custom login-input password" 
                value={props.retypePassword}
                onChange={e => props.changeValue('retypePassword', e.target.value)}
              />
              <img class="form-control-feedback login-icon-custom" src={require('../../assets/img/password.svg')} alt=""></img>
            </div>

            <div class="row">
              <div class="col-xs-12 pad-bottom">
                <button type="submit" id="btnSubmit" onClick={() => props.register()} class="btn btn-login btn-success" >REGISTER</button>
              </div>
              <div class="col-xs-12 forgot">
                <a class="forgot-pass pointer-login" href="/login">I already have a membership</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
};

export default RegisterPage;
