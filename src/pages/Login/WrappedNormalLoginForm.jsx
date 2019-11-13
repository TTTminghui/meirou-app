import React from 'react';
import { connect } from 'react-redux';
import { List, InputItem, Toast, Icon, Button, ActivityIndicator, WingBlank, WhiteSpace } from 'antd-mobile';
import { NavBar } from 'antd-mobile';
import { NavLink } from 'react-router-dom';
import './WrappedNormalLoginForm.less';
import login from '../../api/index'

export default class ErrorInputExample extends React.Component {
    state = {
        hasError: false,
        hasUser: false,
        numError: false,
        value: '',
        number: '',
        test: false,
        animating: true,
        autoTime: 30,
        textValue: '获取验证码',
        loginBoxInp: '请先获取验证码',
        loginBoxSty: true,
        loginInfo: null
    }
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('请输入正确的手机号');
        }
        if (this.state.hasUser) {

        }
    }
    onNumErrorClick = () => {
        if (this.state.numError) {
            Toast.info('请输入正确的验证码');
        }
    }
    onNumChang = (number) => {
        this.setState({
            number,
        });
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

    onButtonGo = () => {
        console.log(this.state.hasError);
        if (this.state.hasError === false) {
            login.login.queryLogin('phone', this.state.name).then(result => {
                this.state.textValue = '';
                this.showTime();
                if (result.code === 2) this.setState({
                    hasError: true
                });
                this.setState({
                    isTure: true
                });
                setTimeout(() => {
                    this.setState({
                        number: result.msg,
                        test: result.msg,
                        loginBoxSty: false,
                        loginBoxInp: '登陆',
                        loginInfo: "check-circle-o"
                    });
                }, 5000);
            }).catch().then(() => {
                login.login.queryLogin(this.state.name, this.test)
            });
        } else {
            return this.onErrorClick;
        }
    }

    onClickButton = (hasError, name) => {
        if (hasError === false) {
            return this.onButtonGo;
        } else {
            return this.onErrorClick;
        }
    }

    onClickLogin = (isTure) => {
        if (isTure === false) {
            return this.LoginTo;
        } else {
            return;
        }
    }

    LoginTo = () => {
        login.login.queryLogin(this.state.name, this.test);
        this.props.history.go(-1);
    }

    componentWillUnmount() {
        clearTimeout(this.closeTimer);
    }
    showToast = () => {
        this.setState({ animating: !this.state.animating });
        this.closeTimer = setTimeout(() => {
            this.setState({ animating: !this.state.animating });
        }, 1000);
    }
    showTime = () => {
        this.toTimer = setTimeout(() => {
            let time = this.state.autoTime;
            time--;
            console.log(time);
            if (time <= 0) {
                clearTimeout(this.showTime);
                this.setState({ textValue: '获取验证码', autoTime: 30 });
            } else {
                this.setState({ autoTime: time });
                this.showTime();
            }
        }, 1000);
    }
    render() {
        return (
            <div className="loginBox">
                <NavBar
                    mode="light"
                    icon={<NavLink to=""><Icon type="left" /></NavLink>}
                >登陆</NavBar>
                <div className="logoImg">
                    <img src={require("../../assets/img/logo.jpg")} alt="" />
                </div>
                <List>
                    <InputItem
                        className='input'
                        type="phone"
                        placeholder="手机号"
                        error={this.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={this.onChange}
                        value={this.state.value}
                    >手机号码</InputItem>
                </List>
                <List>
                    <InputItem
                        className='input'
                        type="number"
                        placeholder="验证码"
                        error={this.state.numError}
                        onErrorClick={this.onNumErrorClick}
                        onChange={this.onNumChange}
                        value={this.state.number}
                    >验证码</InputItem>
                </List>
                <Button className="buttonUi" type="primary" size="small" style={{ marginRight: '15px', marginTop: '-37px', float: 'right' }} onClick={this.onClickButton(this.state.hasError, this.state.value)} >
                    {this.state.textValue}
                    <WingBlank className='wingBlank'>
                        <div className="loading-container">
                            <div className="loading-example">
                                <ActivityIndicator
                                    text={this.state.autoTime}
                                />
                            </div>
                        </div>
                    </WingBlank>
                </Button>
                <Button className='loginButtonInto' loading={this.state.loginBoxSty} icon={this.state.loginInfo} style={{ marginTop: '10px', background: 'Rgba(0,0,0,0.2)', height: '35px', border: '1px solid #ccc' }} onClick={this.onClickLogin(this.state.loginBoxSty)}>{this.state.loginBoxInp}</Button>
                <WhiteSpace />
            </div >
        );
    }
}

