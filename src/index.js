import React from 'react';
import ReactDOM from 'react-dom';
import {
    Provider
} from 'react-redux';
import store from './store/index';
import api from './api/index';
import App from './pages/App';


React.Component.prototype.$api = api;
React.PureComponent.prototype.$api = api;

ReactDOM.render(<Provider store={store}>
   <App/>
</Provider>,document.getElementById('root'))