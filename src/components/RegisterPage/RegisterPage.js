import React from "react";
// import Propstype from 
const RegisterPage = props => {
  return (
    <div>
      <div className="register-box">
        <div className="register-logo">
          <a ><b>CCM</b>Application</a>
        </div>

        <div className="register-box-body">
          <p className="login-box-msg">Register a new membership</p>

            <div className="form-group has-feedback">
              <input type="text" className="form-control" placeholder="Full name"
                value = {props.fullName}
                onChange={e => props.changeValue('fullName', e.target.value)}
              />
              <span className="glyphicon glyphicon-user form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="Email" 
              value = {props.email}
              onChange={e => props.changeValue('email', e.target.value)}
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Password" 
              value = {props.password}
              onChange={e => props.changeValue('password', e.target.value)}/>
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Retype password" 
              value = {props.retypePassword}
              onChange={e => props.changeValue('retypePassword', e.target.value)}
              />
              <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col-xs-8">
                <div className="checkbox icheck">
                  <label>
                    <input type="checkbox" /> I agree to the <a href="#">terms</a>
                  </label>
                </div>
              </div>
              <div className="col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat"
                  onClick={() => props.register()}
                >Register</button>
              </div>
            </div>
          <a href="login.html" className="text-center">I already have a membership</a>
        </div>
      </div>

    </div>
  )
};

export default RegisterPage;
