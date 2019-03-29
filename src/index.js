import React from 'react';
import ReactDOM from 'react-dom';
import router from './router.js';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
// import "bootstrap/dist/css/bootstrap.min.css";
import "./styleSheets/sass/main.scss";
import 'react-toastify/dist/ReactToastify.min.css'; 

const store = configureStore();
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <div>
            {router}
        </div>
    </Provider>, document.getElementById('root')
)