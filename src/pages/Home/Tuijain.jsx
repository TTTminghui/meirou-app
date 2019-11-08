import React from 'react';
import { ListView } from 'antd-mobile';

const data = [
  {
    img: 'http://img1.imgtn.bdimg.com/it/u=3322415100,1316006249&fm=26&gp=0.jpg',
    title: '',
    des: '有机黑猪肉',
    money:'998'
  },
  {
    img: 'http://img0.imgtn.bdimg.com/it/u=1293807137,802605145&fm=26&gp=0.jpg',
    title: '',
    des: '新鲜猪肉',
    money:'336'
  },
  {
    img: 'http://img2.imgtn.bdimg.com/it/u=3054082434,3560009532&fm=26&gp=0.jpg',
    title: '',
    des: '万州绿色猪肉',
    money:'4785'
  },
  {
    img: 'http://img4.imgtn.bdimg.com/it/u=3485637638,3063003930&fm=26&gp=0.jpg',
    title: '',
    des: '前腿猪肉',
    money:'579'
  },
  {
    img: 'http://img1.imgtn.bdimg.com/it/u=2321772870,3428929253&fm=26&gp=0.jpg',
    title: '',
    des: '冰冻猪肉',
    money:'5963'
  },
  {
    img: 'http://img0.imgtn.bdimg.com/it/u=3105208722,2219902180&fm=26&gp=0.jpg',
    title: '',
    des: '红烧黑猪肉',
    money:'42'
  },
];
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

export default class Tuijian extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
  }

  onEndReached = (event) => {
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  }

  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID} style={{ padding: '0 15px' }}>
          <div
            style={{
              lineHeight: '50px',
              color: '#888',
              fontSize: 18,
              borderBottom: '1px solid #F6F6F6',
            }}
          >{obj.title}</div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
            <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
            <div style={{ lineHeight: 1 }}>
              <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
              <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>¥{obj.money}</span></div>
            </div>
          </div>
        </div>
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderHeader={() => <span></span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        renderSeparator={separator}
        className="am-list"
        pageSize={4}
        useBodyScroll
        onScroll={() => { }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}