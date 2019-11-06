import React from 'react';
import { connect } from 'react-redux';
import './shop.less';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

export default class Shop extends React.Component {
<<<<<<< HEAD
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
        return (<div>
            <WingBlank><div className="sub-title">全部商品</div></WingBlank>
           
            <SearchBar
                value={this.state.value}
                placeholder="搜索商品"
                onSubmit={value => console.log(value, 'onSubmit')}
                onClear={value => console.log('onClear')}
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                onCancel={() => console.log('onCancel')}
                showCancelButton
                onChange={this.onChange}
            />
        </div>);
=======
    
    render() {
        return <div>
            商城
        </div>
>>>>>>> f45c9de3726b889469aed16bda9166611c7dad1b
    }
}

