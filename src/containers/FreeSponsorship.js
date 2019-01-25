
/*
   完善资料页面
*/
import React from 'react';
import {Form,Input} from 'antd';
import { NavBar, Icon,List,Picker,Button} from 'antd-mobile';
import './page.css';
import Axios from 'axios';



const FormItem=Form.Item;

class FreeSponsorship extends React.Component {

  constructor(props){
    super(props);
    this.backClick = this.backClick.bind(this);
    this.state={
        pickerValue: [],
        pickerValue2: [],
        value:'',
        value2:'',
        value3:'',
        value4:''
    };
}

handleSubmit = (event)=>{
  let userInfo=this.props.form.getFieldsValue();
  this.props.form.validateFields((err,values)=>{
      if(!err){
          //   $.ajax({
          //         url: ' http://www.hzwotu.com/ApiTest/reqProjMoney',
          //         type: 'POST',
          //         data: userInfo,
          //         success: function (data) {
          //         window.location.href = '/#/mentorpairing2';
          //         console.log('成功');
          //         }.bind(this),
          //         error: function (xhr, status, err) {
          //         }.bind(this) 
          // });
          Axios({
            method:'post',
            url:'http://www.hzwotu.com/ApiTest/reqProjMoney',
            data:userInfo
          }).then(function(res){
            window.location.href = '/#/mentorpairing2';
            console.log('success')
          }).catch(function(error){
            console.log('error')
          })
      }else{}})}
  componentDidUpdate(){
    console.log(this.state.v)
  }
  componentDidMount() {
            this.node.scrollIntoView();
          }
  backClick(){
    window.location.href = '/#/message4';
  }

  render() {
    let district=[{label:'男',value:'男'},{label:'女',value:'女'}]
    const {getFieldDecorator} =this.props.form;
    // const title =  this.props.match.params.title;

    return (
      <div id="test-container" ref={node => this.node = node}>
      <NavBar
          mode="light"
          icon={<Icon type="left" color='#000' onClick={this.backClick} />}
          rightContent={[
          ]}
        >大学生创业项目无偿资助</NavBar>

        <Form id="userForm" encType="multipart/form-data">
            <div className='name'>法定代表人姓名</div>
              <FormItem>
              {
                getFieldDecorator('LegalPersonName',{
                  initiaValue:'',
                  rules:[{
                    required:true,
                    message:'*法定代表人不能为空'
                  }]
                })(
                  <Input className='user-input' placeholder='请输入' />
                )
              }
            </FormItem>
            <div className='name'>身份证号码</div>
            <FormItem>
              {
              getFieldDecorator('IdCardNumber',{
                initiaValue:'',
                rules:[{
                  required:true,
                  message:'*身份证号码不能为空'
                }]
              })(
                <Input className='user-input' placeholder='请输入'/>
              )
            }
            </FormItem>
            <div className='name'>性别</div>
            <FormItem>
              {
              getFieldDecorator('sex',{
                initiaValue:'',
                rules:[{
                  required:true,
                  message:'*性别不能为空'
                }]
              })(
                <Picker data={district} cols={1} className="forss">
                        <List.Item arrow="horizontal"></List.Item>
                </Picker>
              )
            }
            </FormItem>
            <div className='name'>毕业时间</div>
            <FormItem>
              {
              getFieldDecorator('GraduatedTime',{
                initiaValue:'',
                rules:[{
                  required:true,
                  message:'*毕业时间不能为空'
                }]
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>毕业学校</div>
            <FormItem>
              {
              getFieldDecorator('GraduatedSchooll',{
                initiaValue:'',
                rules:[{
                  required:true,
                  message:'*毕业学校不能为空'
                }]
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>生源地</div>
            <FormItem>
              {
              getFieldDecorator('StudentOrigin',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>学历</div>
            <FormItem>
              {
              getFieldDecorator('EducationBackground',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            
            <div className='name'>专业</div>
            <FormItem>
              {
              getFieldDecorator('Professional',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>法定代表人出资比例</div>
            <FormItem>
              {
              getFieldDecorator('LegalPersonContributionRatio',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>企业名称</div>
            <FormItem>
              {
              getFieldDecorator('EnterpriseName',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>注册地址</div>
            <FormItem>
              {
              getFieldDecorator('RegistrationAdress',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>注册时间</div>
            <FormItem>
              {
              getFieldDecorator('RegistrationTime',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>登记号</div>
            <FormItem>
              {
              getFieldDecorator('RegisterNumber',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <Button type='primary' onClick={this.handleSubmit}>提交</Button>
        </Form>
      </div>
    );
  }
}
export default Form.create()(FreeSponsorship);