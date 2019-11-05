import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

// 引入css样式
import 'antd-mobile/dist/antd-mobile.css';

// 组件
import Home from './Home/Home';
import Beff from './Home/Beff';
import Pig from './Home/Pig';
import Poultry from './Home/Poultry';
import Processing from './Home/Processing';
import Search from './Home/Search';
import login from './Login/login';
import Set from './My/Set/Set';
import Customer from './My/Customer';
import Enterprise from './My/Enterprise';
import My from './My/My';
import Myself from './My/Myself';
import TakeOver from './My/TakeOver';
import Allorder from './Myorder/Allorder';
import Allshop from './Shop/Allshop';

// 公共样式
import '../assets/css/reset.min.css';
import Tab from '../components/Tab';

export default class App extends React.Component {
  render() {
    return <HashRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/beff' component={Beff} />
        <Route path='/pig' component={Pig} />
        <Route path='/poultry' component={Poultry} />
        <Route path='/processing' component={Processing} />
        <Route path='/my' component={My} />
        <Route path='/allshop' component={Allshop} />
        <Route path='/login' component={login} />
        <Route path='/search' component={Search} />
        <Route path='/set' component={Set} />
        <Route path='/customer' component={Customer} />
        <Route path='/enterprise' component={Enterprise} />
        <Route path='/myself' component={Myself} />
        <Route path='/takeover' component={TakeOver} />
        <Route path='/allorder' component={Allorder} />
        <Redirect to='/' />
      </Switch>
      <Tab/>
    </HashRouter>
  }
};
