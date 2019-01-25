/*
   Home 主页
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { WhiteSpace, NavBar} from 'antd-mobile';
import './page.css';
import axios from 'axios';
import pic1 from './image/4.png';
import pic2 from './image/2.png';
import pic3 from './image/3.png';
import pic4 from './image/1.png';
import pic5 from './image/5.png';
import pic6 from './image/6.png';

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>
    <div id="home-container">
    <NavBar
      mode="light"
      rightContent={[
      ]}
    >双创之窗</NavBar>
      {/* <SearchBar placeholder="请输入政策关键词" maxLength={8} className='search' /> */}
      <div>
      </div>
    </div>
  </div>
);
class Home extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      dataList:[],
      dataId:[],
      data:[],
      data2: ['1', '2', '3'],
    imgHeight: 176,
    }
  }
  
  componentDidMount() {
    const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
    axios.get('http://www.hzwotu.com/ApiTest/policy?page=1&pageSize=20')
      .then(function (res) {
        _this.setState({
          data:res.data,
          dataList: res.data.list,
          dataId:res.data.list.id,
          datapic:res.data.list,
          isLoaded: true,
          status:'2',
        });
      })
      .catch(function (error) {
        console.log(error);
        _this.setState({
          isLoaded: false,
          error: error
        })
      });
      setTimeout(() => {
        this.setState({
          data2: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        });
      }, 100);
  }
  // renderContent() {
  //   const { dataList,dataId } = this.state;
  //   return (
  //     <div>
  //       {
  //         dataList.length !== 0 && dataList.map((d, i) => {
  //           return <div key={i}>
  //             <Link to={{pathname:'/message'+(i+2)+''}}>
  //               <div className='contentImg'>
  //                 <img src={d.image} className='contentBanner' onClick={this.handleClick} key={i} />
  //               </div>
  //             </Link>
  //           </div>
  //         })
  
  //       }
  //     </div>
  //   );
  // }
  handleClick(){
    // var storage=window.localStorage;
    // storage.a=this.value;
    // var a=storage.a;
    // console.log(a);
  }
  render() {
    return (
      <div>
        <PlaceHolder />
        <div>
          <div  className='nav'>
            <ul>
              <li>
                <Link to={{ pathname: '/home'}} className="home-link">
                      <span></span>
                 </Link>
              </li>
            </ul>
          </div>
              <Link to={{ pathname: '/data' }} >
                <div className='contentImg'>
                  <img src={require('./image/smart2.png')} className='dataBanner' alt='' />
                </div>
              </Link>
          <div>
            {/* {this.renderContent()} */}
            <Link to={{pathname:'/message1'}}>
              <div className='contentImg'>
                  <img src={pic1} className='contentBanner' onClick={this.handleClick} alt='' />
              </div>
            </Link>
            <Link to={{pathname:'/message2'}}>
              <div className='contentImg'>
                  <img src={pic2} className='contentBanner' onClick={this.handleClick} alt='' />
              </div>
            </Link>
            <Link to={{pathname:'/message3'}}>
              <div className='contentImg'>
                  <img src={pic3} className='contentBanner' onClick={this.handleClick} alt='' />
              </div>
            </Link>
            <Link to={{pathname:'/message4'}}>
              <div className='contentImg'>
                  <img src={pic4} className='contentBanner' onClick={this.handleClick} alt='' />
               </div>
            </Link>
            <Link to={{pathname:'/message5'}}>
              <div className='contentImg'>
                  <img src={pic5} className='contentBanner' onClick={this.handleClick} alt='' />
               </div>
            </Link>
            <Link to={{pathname:'/message6'}}>
              <div className='contentImg'>
                  <img src={pic6} className='contentBanner' onClick={this.handleClick} alt='' />
              </div>
            </Link>

            {/* <WingBlank>
              <Carousel className="space-carousel"
                frameOverflow="visible"
                cellSpacing={10}
                slideWidth={0.8}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => this.setState({ slideIndex: index })}
              >
                {this.state.data2.map((val, index) => (
                  <a
                    key={val}
                    style={{
                      display: 'block',
                      position: 'relative',
                      height: this.state.imgHeight,
                      boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <img
                      src={pic6}
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
            </WingBlank> */}
       
          </div>
          <WhiteSpace />
        </div>
      </div>
    );
  }
}

export default Home;

