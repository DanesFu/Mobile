
/*
   完善资料页面
*/
import React from 'react';
import {Form,Input} from 'antd';
import { NavBar, Icon,List,Picker,Button} from 'antd-mobile';
import './page.css';
import $ from'jquery'



const FormItem=Form.Item;

class DataEnterprise extends React.Component {

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
                  url: ' http://www.hzwotu.com/ApiTest/addLoanGuaranteesEnterprise',
                  type: 'POST',
                  data: userInfo,
                  success: function (data) {
                  window.location.href = '/#/EnterprisePrilling';
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
    window.location.href = '/#/message5';
  }

  render() {
    let district2=[{label:'是',value:'是'},{label:'否',value:'否'}]
    const {getFieldDecorator} =this.props.form;

    return (
      <div id="test-container" ref={node => this.node = node}>
      <NavBar
          mode="light"
          icon={<Icon type="left" color='#000' onClick={this.backClick} />}
          rightContent={[
          ]}
        >小微企业担保贷款贴息资格认定表</NavBar>

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
            <div className='name'>法定代表人姓名</div>
            <FormItem>
              {
              getFieldDecorator('LegalPersonName',{
                initiaValue:'',
                rules:[{
                  required:true,
                  message:'*法定代表人姓名不能为空'
                }]
              })(
                <Input className='user-input' placeholder='请输入'/>
              )
            }
            </FormItem>
            <div className='name'>法定代表人身份证号码</div>
            <FormItem>
              {
              getFieldDecorator('LegalPersonIdCardNumber',{
                initiaValue:'',
                rules:[{
                  required:true,
                  message:'*身份证号码不能为空'
                }]
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>营业执照号码</div>
            <FormItem>
              {
              getFieldDecorator('SerialNumber',{
                initiaValue:'',
                rules:[{
                  required:true,
                  message:'*营业执照号码不能为空'
                }]
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>企业类型</div>
            <FormItem>
              {
              getFieldDecorator('EnterpriseType',{
                initiaValue:'',
                rules:[{
                  required:true,
                  message:'*企业类型不能为空'
                }]
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>经营项目</div>
            <FormItem>
              {
              getFieldDecorator('BusinessProject',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>经营场所地址</div>
            <FormItem>
              {
              getFieldDecorator('BusinessPlace',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            
            <div className='name'>联系人姓名</div>
            <FormItem>
              {
              getFieldDecorator('ContactName',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>联系电话</div>
            <FormItem>
              {
              getFieldDecorator('ContactNumber',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>目前职工总数</div>
            <FormItem>
              {
              getFieldDecorator('TotalEmployees',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>招用重点人群和非市区户籍在市区登记失业人员的职工总数</div>
            <FormItem>
              {
              getFieldDecorator('EmployeePopulation',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>占现有职工总数的比例</div>
            <FormItem>
              {
              getFieldDecorator('Proportion',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>是否与符合条件人员签订劳动合同、办理就业登记、依法缴纳社会保险费</div>
            <FormItem>
              {
              getFieldDecorator('LaborContract',{
                initiaValue:'',
              })(
                <Picker data={district2} cols={1} className="forss">
                        <List.Item arrow="horizontal"></List.Item>
                </Picker>
              )
            }
            </FormItem>
            <div className='name'>是否入驻科技孵化器</div>
            <FormItem>
              {
              getFieldDecorator('Incubator',{
                initiaValue:'',
              })(
                <Picker data={district2} cols={1} className="forss">
                        <List.Item arrow="horizontal"></List.Item>
                </Picker>
              )
            }
            </FormItem>
            <div className='name'>孵化器名称</div>
            <FormItem>
              {
              getFieldDecorator('IncubatorName',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>是否需要受托担保机构提供担保</div>
            <FormItem>
              {
              getFieldDecorator('Guarantee',{
                initiaValue:'',
              })(
                <Picker data={district2} cols={1} className="forss">
                        <List.Item arrow="horizontal"></List.Item>
                </Picker>
              )
            }
            </FormItem>
            <Button type='primary' onClick={this.handleSubmit}>提交</Button>
        </Form>
      </div>
    );
  }
}
export default Form.create()(DataEnterprise);