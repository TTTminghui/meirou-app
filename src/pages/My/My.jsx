import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd-mobile';
import './my.less';


export default class My extends React.Component {
    render() {
        return <div className="box">
            <div className="header">
                <Icon className="icon" type="left" onClick={ev=>{
                    this.props.history.push('/home')
                }}/>
                <span className="text">个人中心</span>
            </div>
            <div className="conner">
                <div className="headSculpture">微信头像</div>
                <span className="text1">注册/登录</span>
                <div className="icon1"><a href="javascript:;"></a></div>
            </div>
            <div className="curret">
                <p className="text2"><span>我的订单</span>
                </p>
                <p className="text3"><span>查看全部</span><Icon className="icon2" type="right" /></p>
                <ul className="liList">
                    <li>待审核</li>
                    <li>待确认</li>
                    <li>待付款</li>
                    <li>待发货</li>
                    <li>待收货</li>
                    <li>售后</li>
                </ul>
            </div>
            <div className="classify">
                <ul className="classifyList">
                    <li>收货地址 <Icon className="icon3" type="right" /></li>
                    <li onClick={ev => {
                        this.props.history.push('/myself')
                    }}>个人认证
                       <span className="goAttestation"> 去认证</span>
                        <Icon className="icon3" type="right" /></li>
                    <li onClick={ev => { this.props.history.push('/')}}>企业认证
                  <span className="goAttestation">去认证</span><Icon className="icon3" type="right" /></li>
                    <li>联系客服 <Icon className="icon3" type="right" /></li>
                    <li>设置 <Icon className="icon3" type="right" /></li>
                </ul>
            </div>
        </div>
    }
};