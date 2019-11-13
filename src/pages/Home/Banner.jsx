import React from 'react';
import {  Carousel,  WingBlank } from 'antd-mobile';
import './Home.less';

export default class Banner extends React.Component {
    render() {
        return <WingBlank>
            <Carousel
                autoplay={true}
                infinite={true}
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
    }
    state = {
        data:  ['1', '2', '3'],
        imgHeight:176
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1573025762&di=7bb8879f55479a4fe6460bde1e4d3479&src=http://hbimg.b0.upaiyun.com/91e07ebec490db21bf4ebbf669c2a673b217264a244b1-GFiiRd_fw658',
                 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573035861742&di=01171e9c706f99fa853795c6c69ee29e&imgtype=0&src=http%3A%2F%2Ffile.youboy.com%2Fa%2F24%2F97%2F48%2F8%2F9936598.jpg', 
                 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573035861740&di=a869a334726bc8e778682e3abf67b2e5&imgtype=0&src=http%3A%2F%2Fimg001.hc360.cn%2Fg8%2FM01%2FA3%2F71%2FwKhQtVNGThCEYjuJAAAAALXh_0I060.jpg'],
            });
        }, 100);
    }
}