import React from 'react';
import { SearchBar, Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import '../../pages/Home/Home.less';
import { connect } from 'react-redux';

class Home extends React.Component {
    handleClick = () => {
        this.manualFocusInst.focus();
    }
    render() {
        return <div className="main-box">
            <div className="search" style={{backgroundColor:'white'}}>
                <SearchBar
                    placeholder="搜索商品"
                    ref={ref => this.manualFocusInst = ref}
                />
                <WhiteSpace />
            </div>
            <div className="main-body">
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite={true}
                        autoplayInterval='1000'
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href=""
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
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
            </div>
        </div>
    }
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
}
