import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Order from './Order';
import Closed from './Closed';
import Completed from './Completed';
import Confirmed from './Confirmed';
import Examine from './Examine';
import Examineing from './Examineing';
import Payed from './Payed';
import Received from './Received';
import Shipped from './Shipped';

function Allorder(props) {
    return <Switch>
        <Route path='/allorder' component={Order} exact />
        <Route path='/allorder/closed' component={Closed} />
        <Route path='/allorder/completed' component={Completed} />
        <Route path='/allorder/confirmed' component={Confirmed} />
        <Route path='/allorder/examine' component={Examine} />
        <Route path='/allorder/examineing' component={Examineing} />
        <Route path='/allorder/payed' component={Payed} />
        <Route path='/allorder/received' component={Received} />
        <Route path='/allorder/shipped' component={Shipped} />
        <Redirect to='/allorder' />
    </Switch>
}

export default Allorder;