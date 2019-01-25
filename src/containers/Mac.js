
// import React, { Component } from 'react';
// import { NavBar, Icon } from 'antd-mobile';
// import banner from './image/banner3.jpg'
// import nei from './image/nei.png'
// import wai from './image/wai.png'
// import zhong from './image/zhong.png'

 
// class Mac extends Component {
//     constructor () {
//         super()
//         this.state={
//           seconds: 3,
//         };
//       }
//       componentDidMount () {
//         let timer = setInterval(() => {
//           this.setState((preState) =>({
//             seconds: preState.seconds - 1,
//           }),() => {
//             if(this.state.seconds === 0){
//               clearInterval(timer);
//             }
//           });
//         }, 1000)
//       }
//    render() {
//     if (this.state.seconds === 0) {
//         window.location.href='http://testfj.busionline.com/homeT';
//     }
//        return (
//            <div id="test-container">
//                <NavBar
                   
//                    mode="light"
//                    icon={<Icon type="cross" color='#000'/>}
//                    onLeftClick={() => console.log('onLeftClick')}
//                    rightContent={[
//                       <Icon key="1" type="ellipsis"  color='#000'/>,
//                     ]}
//                 >智能匹配</NavBar>
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '700px'}} className='contentmm'>
//                      <img src={banner} style={{marginTop:'10px'}}  />
//                      <img src={nei} style={{marginTop:'10px'}} className='loader' />
//                      <img src={wai} style={{marginTop:'10px'}} className='loader' />
//                      <img src={zhong} style={{marginTop:'10px'}} className='loader' />
//                      <p>创业小脑匹配中...</p>
//                 </div>
//            </div>
//        );
//    }
// }
// export default Mac;