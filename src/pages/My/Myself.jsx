import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd-mobile'
export default class Myself extends React.Component {
    render() {
        return <div className="box">
            <div className="header"><Icon className="icon" type="left"
                onClick={ev => {
                    this.props.history.go(-1);
                }} />
            <span className="text">个人认证</span></div>
        </div>
    }
}