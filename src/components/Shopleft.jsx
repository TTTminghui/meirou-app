import React from 'react';
import './Shopleft.less';
import { NavLink } from 'react-router-dom';

function Shopleft(props) {
    return <>
        <div className="main-oo">
            <div className="r" className="active">
                <NavLink to='/allshop/dapai'>进口猪肉</NavLink>
            </div>
            <div className="r">
                <NavLink to='/allshop/dapai'>国产猪肉</NavLink>
            </div>
            <div className="r">
                <NavLink to='/allshop/dapai'>鸡产品</NavLink>
            </div>
            <div className="r">
                <NavLink to='/allshop/dapai'>鸭产品</NavLink>
            </div>
            <div className="r">
                <NavLink to='/allshop/dapai'>进口牛肉</NavLink>
            </div>
            <div className="r">
                <NavLink to='/allshop/dapai'>加工产品</NavLink>
            </div>
        </div>
    </>
}

export default Shopleft;