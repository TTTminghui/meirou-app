import React from 'react';
import { connect } from 'react-redux';
import './dapai.less';
import '../Home/search.less'


export default class Dapai extends React.Component {
    render() {
        return <div className="right">
            <div className="zhu" onClick={ev => {
                this.props.history.push('/allshop/dapai');
            }}>
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2473589736,1100715802&fm=26&gp=0.jpg" alt="" />
                <p>带骨大牌</p>
            </div>
            <div className="zhu">
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2473589736,1100715802&fm=26&gp=0.jpg" alt="" />
                <p>带骨大牌</p>
            </div>
            <div className="zhu">
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2473589736,1100715802&fm=26&gp=0.jpg" alt="" />
                <p>带骨大牌</p>
            </div>
        </div>
    }
}