import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Router  from './router/router'
import 'antd/dist/antd.css';
import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProvider} from 'antd';
ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <Router />
    </ConfigProvider>
    ,
    document.getElementById('root')
)
serviceWorker.unregister();
