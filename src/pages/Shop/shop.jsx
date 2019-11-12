import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
=======
>>>>>>> e2a54a99bc53a19fb02f6d173502e0f0f36f422c
import './shop.less';
import '../Home/search.less'
import { SearchBar, WhiteSpace } from 'antd-mobile';


export default class Shop extends React.Component {
    render() {
        return <div className="main-box">
           
<<<<<<< HEAD
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
    }
}

=======


            <div className="right">
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

        </div>
    }
}
>>>>>>> e2a54a99bc53a19fb02f6d173502e0f0f36f422c
