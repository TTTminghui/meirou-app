import React from 'react';
import { SearchBar, WhiteSpace, NavBar, NoticeBar} from 'antd-mobile';
import './Home.less';
import Banner from './Banner';
import Tuijian from './Tuijain';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return <div className="main-box">
            <WhiteSpace size="lg" />
            <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                哎，这位金主 走过路过您可千万别错过！几百块您买不了Ipone，买不了吃亏，买不了上当，来您往里瞅一瞅往里瞧一瞧！！！
    </NoticeBar>
            <NavBar
                mode="light"
            >美肉商城</NavBar>
            <div className="search" style={{ backgroundColor: 'white' }}
                onClick={ev => {
                    this.props.history.push('./search');
                }}>
                <SearchBar
                    placeholder="搜索商品"
                    ref={ref => this.manualFocusInst = ref}
                />
                <WhiteSpace />
            </div>
            {/* 轮播图 */}
            <div className="main-body">
                <Banner />
            </div>
            {/* 分类区域 */}
            <div className="fenlei">
                <div onClick={ev => {
                    this.props.history.push('./pig');
                }}>
                    <span><img src="http://image4.suning.cn/uimg/b2c/newcatentries/0070182138-000000010119947958_1_800x800.jpg"
                        alt="" /></span>
                    <p>猪肉专区</p>
                </div>
                <div onClick={ev => {
                    this.props.history.push('./poultry');
                }}>
                    <span>
                        <img src="http://img3.imgtn.bdimg.com/it/u=1094693650,1364324201&fm=26&gp=0.jpg" alt="" />
                    </span>
                    <p>禽类专区</p>
                </div>
                <div onClick={ev => {
                    this.props.history.push('./beff');
                }}>
                    <span>
                        <img src="http://img4.imgtn.bdimg.com/it/u=3525294997,3112360321&fm=26&gp=0.jpg" alt="" />
                    </span>
                    <p>牛肉专区</p>
                </div>
                <div onClick={ev => {
                    this.props.history.push('./processing');
                }}>
                    <span>
                        <img src="http://img1.imgtn.bdimg.com/it/u=3720685585,4180025098&fm=26&gp=0.jpg" alt="" />
                    </span>
                    <p>加工产品</p>
                </div>
            </div>
            {/* 推荐专区 */}
            <div className="tuijian">
                <h4>推荐专区</h4>
                <Tuijian />
            </div>
        </div>
    }
}
