import React from 'react';
import './shop.less';
import '../Home/search.less';
import { SearchBar, WhiteSpace } from 'antd-mobile';
import api from '../../api'


export default class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '进口猪肉',
            root1: '进口猪肉',
            root2: '国产猪肉',
            root3: '鸡产品',
            root4: '鸭产品',
            root5: '进口牛肉',
            root6: '加工产品',
            mainShop: []
        }
    }
    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }
    async setValueType(name) {
        console.log(name);

        await this.setStateAsync({ value: name });
        console.log(this.state.value);
        this.forceUpdateMy();
    }
    forceUpdateMy = () => {
        api.shopType.queryShopType(this.state.value).then(result => {
            this.setState({ mainShop: result.data })
        });
    }
    componentDidMount() {
        api.shopType.queryShopType(this.state.value).then(result => {
            this.setState({ mainShop: result.data })
        });
    };
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

            <div className="main-oo">
                <div className="r">
                    <div onClick={() => { this.setValueType('进口猪肉') }}>{this.state.root1}</div>
                </div>
                <div className="r">
                    <div onClick={() => { this.setValueType('国产猪肉') }}>{this.state.root2}</div>
                </div>
                <div className="r">
                    <div onClick={() => { this.setValueType('鸡产品') }}>{this.state.root3}</div>
                </div>
                <div className="r">
                    <div onClick={() => { this.setValueType('鸭产品') }}>{this.state.root4}</div>
                </div>
                <div className="r">
                    <div onClick={() => { this.setValueType('进口牛肉') }}>{this.state.root5}</div>
                </div>
                <div className="r">
                    <div onClick={() => { this.setValueType('加工产品') }}>{this.state.root6}</div>
                </div>
            </div>

            <div className="right">
                {this.state.mainShop.map(item => {
                    return <div className="zhu" onClick={(ev, name = item.name) => { this.props.history.push('/allshop/details?name=' + name); }}
                        key={item.id}>
                        <img src={item.img} alt="" />
                        <p>{item.name}</p>
                    </div>
                })}
            </div>

        </div>
    }
}