import React from 'react';
import { SearchBar, Icon, WhiteSpace, Flex } from 'antd-mobile';
import './search.less';
import { connect } from 'react-redux';
import api from '../../api';

export default class Search extends React.Component {
    state = {
        value: '',
        isTrue: false,
        main: []
    };
    useabb = () => {
        this.setState({ isTrue: false })
    }
    usebba = () => {
        console.log(this.state.value);

        api.search.querySearch(this.state.value).then(result => {
            this.setState({ isTrue: true, main: result.data })
        });
    }
    searchFun = (name) => {
        if (name === '') {
            return this.useabb;
        }
        return this.usebba.bind(null, name);
    }
    onChange = (value) => {
        this.setState({ value });
    };
    render() {
        return <div className="main-box">
            <Icon type="left"
                onClick={ev => {
                    this.props.history.go(-1);
                }} />
            <h2>美肉商城</h2>
            <div className="search" style={{ backgroundColor: 'white' }}>
                <SearchBar
                    value={this.state.value}
                    placeholder="搜索商品"
                    ref={ref => this.manualFocusInst = ref}
                    onSubmit={this.searchFun(this.value)}
                    onChange={this.onChange}
                />
                <WhiteSpace />
            </div>

            <div className="title">
                <h5>搜索记录</h5>
                <div className="flex-container">
                    {this.state.isTrue ? this.state.main.map(item => {
                        if (item != '') alert(item.shopname, item.name)
                    }) : <>
                            <Flex>
                                <Flex.Item><div className="rou">新西兰牛肉</div></Flex.Item>
                                <Flex.Item><div className="rou">马来西亚蒸羊肉</div></Flex.Item>
                            </Flex>
                            <WhiteSpace size="lg" />
                            <Flex>
                                <Flex.Item><div className="rou">黑猪肉</div></Flex.Item>
                                <Flex.Item><div className="rou">散养小笨鸡</div></Flex.Item>
                                <Flex.Item><div className="rou">全聚德烤鸭</div></Flex.Item>
                            </Flex>
                            <WhiteSpace size="lg" />
                            <Flex>
                                <Flex.Item><div className="rou">优质牛上脑</div></Flex.Item>
                                <Flex.Item><div className="rou">精选里脊肉</div></Flex.Item>
                                <Flex.Item><div className="rou">烤全羊</div></Flex.Item>
                            </Flex>
                            <WhiteSpace size="lg" />
                        </>}
                </div>
            </div>
        </div >
    }
}
