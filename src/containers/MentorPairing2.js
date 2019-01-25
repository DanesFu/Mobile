/*
   导师结队页面
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Steps,NavBar, Icon,List} from 'antd-mobile';
import './page.css';
import './page1.css'
 
const Step = Steps.Step;
class MentorPairing2 extends Component {
    constructor (props) {
        super(props);
        this.backClick = this.backClick.bind(this);
    }
   backClick(){
     this.props.history.go(-1)
   }
   render() {
       return (
           <div style={{background:'#fff',width:'100%'}}>
               <NavBar
                  mode="light"
                  icon={<Icon type="left"  color='#000' onClick={this.backClick} />}
                  rightContent={[
                      // <Icon key="1" type="ellipsis" color='#000'/>,
                     ]}
                  >申请成功</NavBar>
               <div className='sub-con'>
                 <div className="sub-title">申请进度</div>
                 <Steps size="small" current={1}>
                 <Step title="阅读须知" />
                 <Step title="提交申请" />
                 <Step title="等待审核" />
                 </Steps>
               {/* <PlaceHolder /> */}
               </div>
               
               <List style={{ margin: '20px 0', backgroundColor: 'white' }}>
                    <Link to={{ pathname: '/home', state: { mold: 'add' },aa:'dddd' }}  className='primary-button'> 
                        <span>完成</span>
                    </Link>
                    
                </List>
                {/* <Button style={{width:'calc(90%)',marginLeft:'20px'}}><a href='http://www.busionline.com'>返回创业在线首页</a></Button>
               <WhiteSpace /> */}
           </div>
        
       );
   }
}
export default MentorPairing2;

