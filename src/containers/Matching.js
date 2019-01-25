/*
   Test 主页
*/
import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Link } from 'react-router-dom';
import banner from './image/banner3.jpg'
import nei from './image/nei.png'
import wai from './image/wai.png'
import zhong from './image/zhong.png'


class Matching extends Component {
  constructor(props) {
    super(props);
    this.backClick = this.backClick.bind(this);
    this.state = {
      seconds: 2,
    };
  }
  backClick(){
    this.props.history.go(-1);
  }
  componentDidMount() {
    // {console.log(this.props.location.query)};
    this.node.scrollIntoView();
    let timer = setInterval(() => {
      this.setState((preState) => ({
        seconds: preState.seconds - 1,
      }), () => {
        if (this.state.seconds === 0) {
          clearInterval(timer);
        }
      }); 
    }, 1000)
  }
  render() {
    if (this.state.seconds === 0) {
      window.location.href = '/#/homet';
    }
    return (
      <div id="test-container"  ref={node => this.node = node}>
        <NavBar
          mode="light"
          rightContent={[
            // <Icon key="1" type="ellipsis" color='#000' />,
          ]}
        >智能匹配</NavBar>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '575px',top:'55px' }} className='contentmm'>
          <img src={banner} style={{ marginTop: '10px' }} alt='' />
          <img src={nei} style={{ marginTop: '10px' }} className='loader' alt=''  />
          <img src={wai} style={{ marginTop: '10px' }} className='loader' alt=''  />
          <img src={zhong} style={{ marginTop: '10px' }} className='loader' alt=''  />
          <p className='toright'>创业小脑匹配中...</p>
        </div>
        <Link to={{pathname:'/data'}} className='myIcon'>
            <Icon type="left" color='#000' />
        </Link>
        
      </div>
    );
  }
}
export default Matching;

