import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Tab.less';

function Tab(props) {
    let pathName = props.location.pathname,
        flag =  !/^\/((home|allshop|my)|)$/i.test(pathName);
    return <>
        {flag ? null : <div className='tab'>

            <NavLink className="link" to='/' exact>
                <i className="icon"></i>
                <span>首页</span>
            </NavLink>
            <NavLink className="link" to='/allshop'>
                <i className="icon"></i>
                <span>商城</span>
            </NavLink>
            <NavLink className="link" to='/my'>
                <i className="icon"></i>
                <span>我的</span>
            </NavLink>
        </div>}
    </>;
}
export default withRouter(Tab);