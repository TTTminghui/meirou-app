import React from 'react';
import { connect } from 'react-redux';
import { List, InputItem, Toast, Icon } from 'antd-mobile';
import { NavBar } from 'antd-mobile';
import { NavLink } from 'react-router-dom';
import './WrappedNormalLoginForm.less'

export default class ErrorInputExample extends React.Component {
    state = {
        hasError: false,
        value: '',
    }
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('请输入正确的手机号');
        }
    }
    onChange = (value) => {
        var telStr = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
        if (value.replace(/\s/g, '').length < 11) {
            this.setState({
                hasError: true,
            });
        } else if (!telStr.test(value.replace(/\s/g, ''))) {
            this.setState({
                hasError: true,
            });
        } else {
            this.setState({
                hasError: false,
            });
        }
        this.setState({
            value,
        });
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<NavLink to=""><Icon type="left" /></NavLink>}
                >登陆</NavBar>
                <div className="logoImg">
                    <img src={require("../../assets/img/logo.jpg")} alt="" />
                </div>
                <List>
                    <InputItem
                        type="phone"
                        placeholder="手机号"
                        error={this.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={this.onChange}
                        value={this.state.value}
                    >手机号码</InputItem>
                </List>
            </div>
        );
    }
}

