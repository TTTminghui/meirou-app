import React from 'react';
import './Header.less';
import { SearchBar, WhiteSpace } from 'antd-mobile';


export default class Shop extends React.Component {
    state = {
        value: '',
    };
    onChange = (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return <div className="main-box">
            <h2>美肉商城</h2>
            <div className="search" style={{ backgroundColor: 'white' }}
                onClick={ev => {
                    this.props.history.push('./search')
                }}>
                <SearchBar
                    placeholder="搜索商品"
                    ref={ref => this.manualFocusInst = ref}
                />
                <WhiteSpace />
            </div>


        </div>
    }
}