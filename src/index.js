import React from 'react';
import ReactDOM from 'react-dom';
import {
    Provider
} from 'react-redux';
import store from './store/index';
import api from './api/index';
import App from './pages/App';
<<<<<<< HEAD
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
=======
// 引入css样式
import 'antd-mobile/dist/antd-mobile.css';

>>>>>>> f45c9de3726b889469aed16bda9166611c7dad1b

React.Component.prototype.$api = api;
React.PureComponent.prototype.$api = api;

ReactDOM.render(<Provider store={store}>
   <App/>
</Provider>,document.getElementById('root'))