import React from 'react';
import './details.less';
import { Icon, Carousel, WingBlank,Button,WhiteSpace } from 'antd-mobile';
import Ww from './Ww';

export default class Details extends React.Component {
    render() {
        return <div className="main-box">
            <Icon type="left"
                onClick={ev => {
                    this.props.history.go(-1);
                }} />
            <h2>商品详情</h2>
            {/* 轮播图 */}
            <div className="banner">
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite={true}
                        dots={false}
                        autoplayInterval='2000'
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href=""
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`${val}`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <p>【巴西377】带骨大牌</p>
            </div>
            <div className="jg">
                <p>¥ 41000/吨</p>
                <span>起批：1吨</span>
                <span>库存：1吨</span>
            </div>
            <div className="jy">
                交易客服
            </div>
            <div className="dh">
                <div className="tp">
                    <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3483030207,3924941481&fm=202&mola=new&crop=v1" alt="" />
                </div>
                <div className="mz">
                    <p>唐明辉</p>
                    <span>电话：13066666666</span>
                </div>
                <div className="bd">
                    <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3483030207,3924941481&fm=202&mola=new&crop=v1" alt="" />
                    <p>拨打电话</p>
                </div>
            </div>
            
            <div className="canshu">
                <p>商品参数</p>
                <div className="xiangqi">
                    <div><p>生产日期</p></div>
                    <div><p>产品产地</p></div>
                    <div><p>保质期</p></div>
                    <div><p>品牌</p></div>
                    <div><p>单位</p></div>
            </div>
                <div className="cp">
                    <div><p>近三个月内</p></div>
                    <div><p>河北</p></div>
                    <div><p>12个月</p></div>
                    <div><p>康达</p></div>
                    <div><p>1吨</p></div>
                </div>
            </div>

            <div className="canshu">
                <p>商品介绍</p>
                <div className="xiangqi">
                    <div><p>商品名称</p></div>
                    <div><p>包装</p></div>
                    <div><p>商品毛子</p></div>
                    <div><p>保存状态</p></div>
                    <div><p>品种</p></div>
            </div>
                <div className="cp">
                    <div><p>【巴西377】带骨大牌</p></div>
                    <div><p>袋装</p></div>
                    <div><p>20KG</p></div>
                    <div><p>冷冻</p></div>
                    <div><p>猪</p></div>
                </div>
            </div>
            
            <div className="dibu">
            < Ww />
            </div>
        </div>
    }
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1108221135,1605863858&fm=26&gp=0.jpg',
                    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=996159717,2081921296&fm=26&gp=0.jpg',
                    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1264796286,1602043790&fm=115&gp=0.jpg'],
            });
        }, 100);
    }
}