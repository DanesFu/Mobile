/*
   Home 主页
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Toast,NavBar, Icon,List} from 'antd-mobile';
import './page.css';
import axios from 'axios'


function showToast() {
  Toast.info('选择导师成功!', 1);
}
// const PlaceHolder = ({ className = '', ...restProps }) => (
//     <div className={`${className} placeholder`} {...restProps}>
//         <div id="home-container">
//             <Link to={{ pathname: '/test', state: { mold: 'add' },aa:'dddd' }} className="home-link">
//             </Link>
//             <NavBar
//              className='message-top'
//               mode="light"
//               rightContent={[
//             ]}
//             >选择导师</NavBar>
//           <div>
//         </div>
//         </div>
//     </div>
//   );

class HomeC extends Component {
      constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.backClick = this.backClick.bind(this);
        this.state = {
          dataList: []
        }
      }
      // componentDidMount() {
      //   Toast.loading('Loading...', 30, () => {
      //     console.log('Load complete !!!');
      //   });
      //   setTimeout(() => {
      //     Toast.hide();
      //   }, 3000);
      // }
      backClick(){
        this.props.history.go(-1)
      }
      handleClick(){
       alert('选择导师成功');
      }
      renderContent() {
        const { dataList } = this.state;
    
        return (
          <div className='messageTab2'>
            {
              dataList.length !== 0 && dataList.map((d, i) => {
                return <div key={i}>
                  <List renderHeader={() => ''} className='dataTitle'></List>
                  <div className="home-teacher">
                    <div className='teacher-list'>
                       <img src={d.avatar} alt='' />
                       <ul>
                         <li><p>{d.name}</p></li>
                         <li><p>{d.tag}</p></li>
                         <li><p>{d.summary}</p></li>
                         <li>{d.province}{d.city} 
                            <Link to={{ pathname: '/mentorpairing'}} >
                              <span  onClick={showToast}>+</span>
                            </Link>
                         </li>
                       </ul>
                    </div>
                  </div>
                </div>
              })
            }
          </div>
        );
    
      }
    componentDidMount(){
      Toast.loading('Loading...', 30, () => {
        console.log('Load complete !!!');
      });
      setTimeout(() => {
        Toast.hide();
      }, 3000);
      const _this = this;    //先存一下this，以防使用箭头函数this会指向不希望它所指向的对象。
        axios.get('http://www.hzwotu.com/ApiTest/teacher?page=1&pageSize=6')
        .then(function (res) {
        _this.setState({
          dataList: res.data.list,
          isLoaded: true
        });
      })
      .catch(function (error) {
        console.log(error);
        _this.setState({
          isLoaded: false,
          error: error
        })
      })
    }
   render() {
      return (
          <div>
              <NavBar
                mode="light"
                className='message-top'
                icon={<Icon type="left" color='#000' onClick={this.backClick} />}
                rightContent={[
                  // <Icon key="1" type="ellipsis" color='#000' />,
                ]}
              >选择导师</NavBar>

              <div>
                {this.renderContent()}
              </div>
          </div>
         
      );
   }
}
 
export default HomeC;

