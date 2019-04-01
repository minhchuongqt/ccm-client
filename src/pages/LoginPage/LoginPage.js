import React from "react";
import Logo from '../../assets/img/ccm-logo.png'

const LoginPage = props => {
  return (
    <div>
      <div className="login-box">
        <div className="login-logo">
          <a><b>CCM</b>Application</a>
          <img src={require('../../assets/img/ccm-logo.png')} width='50'/>
          
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          {/* <form> */}
            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="Email" onChange={e => props.onChange('email', e.target.value)}/>
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Password" onChange={e => props.onChange('password', e.target.value)} />
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col-xs-8">
                <div className="checkbox icheck">
                  <label>
                    <input type="checkbox" /> Remember Me
                  </label>
                </div>
              </div>
              <div className="col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={props.login}  >Sign In</button>
              </div>
            </div>
          {/* </form> */}
         
          <a href="#">I forgot my password</a><br />
          <a href="#" className="text-center" onClick = {() => props.history.push('/register')}>Register a new membership</a>
        </div>
      </div>
    </div>
  )
};

export default LoginPage;
