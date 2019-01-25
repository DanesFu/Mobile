/*
   导师结队页面
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Steps, WhiteSpace,NavBar, Icon,Button, List} from 'antd-mobile';
import './page.css';
import './page1.css'
 
const Step = Steps.Step;
class ApplySuccess extends Component {
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
                  >申请导师结队</NavBar>
               <div className='sub-con'>
                 <div className="sub-title">结队申请进度</div>
                 <Steps size="small" current={2}>
                 <Step title="填写结队申请表" />
                 <Step title="选择意向导师" />
                 <Step title="等待学校验证" />
                 <Step title="等待导师确认" />
                 <Step title="结队成功" />
                 </Steps>
               {/* <PlaceHolder /> */}
               </div>
               
               <List style={{ margin: '20px 0', backgroundColor: 'white' }}>
                    <Link to={{ pathname: '/home', state: { mold: 'add' },aa:'dddd' }}>
                        <Button type="primary" className='my_button'>完成</Button><WhiteSpace />
                    </Link>
                </List>
                {/* <Button style={{width:'calc(90%)',marginLeft:'20px'}}><a href='http://www.busionline.com'>返回创业在线首页</a></Button>
               <WhiteSpace /> */}
           </div>
        
       );
   }
}
export default ApplySuccess;

