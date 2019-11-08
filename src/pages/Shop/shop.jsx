import React from 'react';
import { connect } from 'react-redux';
import './shop.less';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';

export default class Shop extends React.Component {
    state = {
        value: '',
    };
    onChange= (value) => {
        this.setState({ value });
      };
      clear = () => {
        this.setState({ value: '' });
      };
    render() {
        return <div>
            
        </div>
    }
}