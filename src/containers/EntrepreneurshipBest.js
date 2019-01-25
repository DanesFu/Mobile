
/*
   完善资料页面
*/
import React from 'react';
import {Form,Input} from 'antd';
import { NavBar, Icon,Button} from 'antd-mobile';
import './page.css';
import $ from'jquery'



const FormItem=Form.Item;

class EntrepreneurshipBest extends React.Component {

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
            $.ajax({
                  url: ' http://www.hzwotu.com/ApiTest/reqEntSuport',
                  type: 'POST',
                  data: userInfo,
                  success: function (data) {
                  window.location.href = '/#/mentorpairing2';
                  console.log('成功');
                  },
                  error: function (xhr, status, err) {
                  }
          });
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
    const {getFieldDecorator} =this.props.form;

    return (
      <div id="test-container" ref={node => this.node = node}>
      <NavBar
          mode="light"
          icon={<Icon type="left" color='#000' onClick={this.backClick} />}
          rightContent={[
          ]}
        >企业扶优</NavBar>

        <Form id="userForm" encType="multipart/form-data">
            <div className='name'>企业名称</div>
              <FormItem>
              {
                getFieldDecorator('EnterpriseName',{
                  initiaValue:'',
                  rules:[{
                    required:true,
                    message:'*企业名称不能为空'
                  }]
                })(
                  <Input className='user-input' placeholder='请输入' />
                )
              }
            </FormItem>
            <div className='name'>企业注册地址</div>
            <FormItem>
              {
              getFieldDecorator('RegisteredAddress',{
                initiaValue:'',
                rules:[{
                  required:true,
                  message:'*企业注册地址不能为空'
                }]
              })(
                <Input className='user-input' placeholder='请输入'/>
              )
            }
            </FormItem>
            <div className='name'>纳税所在区县市</div>
            <FormItem>
              {
              getFieldDecorator('TaxAdress',{
                initiaValue:'',
                rules:[{
                  required:true,
                  message:'*纳税所在区县市不能为空'
                }]
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>注册登记时间</div>
            <FormItem>
              {
              getFieldDecorator('RegisteredTime',{
                initiaValue:'',
                rules:[{
                  required:true,
                  message:'*注册登记时间不能为空'
                }]
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>注册资本（万元）</div>
            <FormItem>
              {
              getFieldDecorator('RegisteredCapital',{
                initiaValue:'',
                rules:[{
                  required:true,
                  message:'*注册资本不能为空'
                }]
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>实缴资本（万元）</div>
            <FormItem>
              {
              getFieldDecorator('ActualCapital',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>大学生创业团队所占注册资本比例</div>
            <FormItem>
              {
              getFieldDecorator('ProportionOfStudents',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            
            <div className='name'>税务登记证号码</div>
            <FormItem>
              {
              getFieldDecorator('TaxNumber',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>上年度纳税额</div>
            <FormItem>
              {
              getFieldDecorator('TaxesPaidLastYear',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>法定代表人姓名</div>
            <FormItem>
              {
              getFieldDecorator('LegalPersonName',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>法定代表人身份证号码</div>
            <FormItem>
              {
              getFieldDecorator('LegalPersonIdCardNumber‘',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>法定代表人户籍地</div>
            <FormItem>
              {
              getFieldDecorator('LegalPersonCensusRegister',{
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
export default Form.create()(EntrepreneurshipBest);