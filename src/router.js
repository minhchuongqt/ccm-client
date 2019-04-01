import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import App from './pages/app';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import ProjectPage from './pages/ProjectPage';
// import ResetPassword from './pages/auth/ResetPassword';
// import ForgotPassword from './pages/auth/ForgotPassword';
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