import React from 'react';
import { SearchBar, Icon, WhiteSpace, Flex } from 'antd-mobile';
import './search.less';
import { connect } from 'react-redux';

export default class Search extends React.Component {
    render() {
        return <div className="main-box">
            <Icon type="left"
                onClick={ev => {
                    this.props.history.go(-1);
                }} />
            <h2>美肉商城</h2>
            <div className="search" style={{ backgroundColor: 'white' }}>
                <SearchBar
                    placeholder="搜索商品"
                    ref={ref => this.manualFocusInst = ref}
                />
                <WhiteSpace />
            </div>
            <div className="title">
                <h5>搜索记录</h5>
                <div className="flex-container">
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
                </div>
            </div>
        </div >
    }
}
