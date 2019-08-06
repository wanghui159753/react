import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Router  from './router/router'
import 'antd/dist/antd.css';
ReactDOM.render(
    <div>
        <Router />
    </div>
    ,
    document.getElementById('root')
)
serviceWorker.unregister();
