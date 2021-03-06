import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Shop from './shop';
import Confirm from './Confirm';
import Details from './Details';
import Pay from './Pay';


function Allshop(props) {
    return <>
        <Switch>
            <Route path='/allshop' component={Shop} exact />
            <Route path='/allshop/confimr' component={Confirm} />
            <Route path='/allshop/details' component={Details} />
            <Route path='/allshop/pay' component={Pay} />
            <Redirect to='/allshop' />

        </Switch>
    </>
}

export default Allshop;