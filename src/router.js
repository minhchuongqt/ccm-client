import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import App from './components/app';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage'
import ProjectPage from './components/ProjectPage';
// import ResetPassword from './components/auth/ResetPassword';
// import ForgotPassword from './components/auth/ForgotPassword';
export default (
  <Router>
    <Switch>
      {/* <Route path="/forgotPassword" component={ForgotPassword} />
      <Route path="/resetPassword" component={ResetPassword} /> */}
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      {/* <Route path="/home" component={ProjectPage} /> */}
      <Route path="/" component={App} />
    </Switch>
    <ToastContainer
        position="top-center"
        autoClose={3000}
        style={{ zIndex: 19999 }}
    />
  </Router>
);