/*
   申请成功页面
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Steps, WingBlank, WhiteSpace,NavBar, Icon,Button, List} from 'antd-mobile';
import './page.css';
import './page1.css'
 
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>已您成功提交申请杭州市创业房租补贴政策<br/>等待主管部门审批</div>
  );
const Step = Steps.Step;
const steps = [{
    title: '提交申请',
  }, {
    title: '主管部门收件',
  },  {
    title: '审批',
  }, 
  {
    title: '完成',
  }].map((s, i) => <Step key={i} title={s.title} description={s.description} />);
  
  // const customIcon = () => (
  //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" className="am-icon am-icon-md">
  //     <g fillRule="evenodd" stroke="transparent" strokeWidth="4">
  //       <path d="M21 0C9.402 0 0 9.402 0 21c0 11.6 9.402 21 21 21s21-9.4 21-21C42 9.402 32.598 0 21 0z" />
  //       <path fill="#FFF" d="M29 18.73c0-.55-.447-1-1-1H23.36l4.428-5.05c.407-.46.407-1.208 0-1.668-.407-.46-1.068-.46-1.476 0l-5.21 5.89-5.21-5.89c-.406-.46-1.067-.46-1.475 0-.406.46-.406 1.207 0 1.667l4.43 5.05H14.23c-.55 0-.998.45-.998 1 0 .554.448.97 1 .97h5.9v3.942h-5.9c-.552 0-1 .448-1 1s.448.985 1 .985h5.9v4.896c0 .552.448 1 1 1 .55 0 .968-.284.968-.836v-5.06H28c.553 0 1-.433 1-.985s-.447-1-1-1h-5.9v-3.94H28c.553 0 1-.418 1-.97z" />
  //     </g>
  //   </svg>
  // );
class ApplySuccess extends Component {
    // constructor (props) {
    //     super(props)
    // }
    componentDidMount(){
      this.node.scrollIntoView()
    }
 
   render() {
       return (
           <div style={{background:'#fff',width:'100%'}} ref={node=>this.node=node}>
               <NavBar
                  mode="light"
                  icon={<Icon type="cross"  color='#000'/>}
                  onLeftClick={() => console.log('onLeftClick')}
                  rightContent={[
                      <Icon key="1" type="ellipsis" color='#000'/>,
                     ]}
                  >申请杭州市创业房租补贴政策</NavBar>
               <WingBlank mode={20} className="stepsExample" style={{marginLeft:'-10px'}}>
                  <div className="sub-title"></div>
                  <WhiteSpace />
                  <Steps current={1} direction="horizontal" size="small">{steps}</Steps>
               </WingBlank>
               <WhiteSpace size="xl" />
               <PlaceHolder />
               <List style={{ margin: '20px 0', backgroundColor: 'white' }}>
                    <Link to={{ pathname: '/homec', state: { mold: 'add' },aa:'dddd' }} className="home-link">
                        <Button type="primary" className='my_button'>下一步</Button><WhiteSpace />
                    </Link>
               </List>
           </div>
        
       );
   }
}
export default ApplySuccess;

