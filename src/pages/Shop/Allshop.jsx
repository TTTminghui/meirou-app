import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import shop from './Shop';
import Confirm from './Confirm';
import Details from './Details';
import Pay from './Pay';


function Allshop(props) {
    return <Switch>
        <Route path='/allshop' component={shop} exact />
        <Route path='/allshop/confirm' component={Confirm} />
        <Route path='/allshop/details' component={Details} />
        <Route path='/allshop/pay' component={Pay} />
        <Redirect to='/allshop' />

    </Switch>
}

export default Allshop;