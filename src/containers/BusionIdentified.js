
/*
   完善资料页面
*/
import React from 'react';
import {Form,Input} from 'antd';
import { NavBar, Icon,List,Picker,DatePicker,Button} from 'antd-mobile';
import './page.css';
import $ from'jquery'



const FormItem=Form.Item;

class BusionIdentified extends React.Component {
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
                  url: ' http://www.hzwotu.com/ApiTest/addLoanGuaranteesPerson',
                  type: 'POST',
                  data: userInfo,
                  success: function (data) {
                  window.location.href = '/#/mentorpairing2';
                  console.log('成功');
                  },
                  error: function (xhr, status, err){
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
    window.location.href = '/#/message2';
  }

  render() {
    let district1=[{label:'在校大学生',value:'在校大学生'},
            {label:'毕业5年以内的高校毕业生',value:'毕业5年以内的高校毕业生'},
            {label:'市区户籍登记失业人员',value:'市区户籍登记失业人员'},
            {label:'市区户籍就业困难人员',value:'市区户籍就业困难人员'},
            {label:'市区户籍城镇转业复退军人',value:'市区户籍城镇转业复退军人'},
            {label:'其他人员',value:'其他人员'},]
    let district3=[{label:'上城区',value:'上城区'},
                {label:'下城区',value:'下城区'},
                {label:'江干区',value:'江干区'},
                {label:'拱墅区',value:'拱墅区'},
                {label:'西湖区',value:'西湖区'},
                {label:'高新区（滨江）',value:'高新区（滨江）'},
                {label:'经济技术开发区',value:'经济技术开发区'},
                {label:'风景名胜区',value:'风景名胜区'},
                {label:'大江东',value:'大江东'},
                {label:'其他',value:'其他'},]
    const {getFieldDecorator} =this.props.form;

    return (
      <div id="test-container" ref={node => this.node = node}>
      <NavBar
          mode="light"
          icon={<Icon type="left" color='#000' onClick={this.backClick} />}
          rightContent={[
          ]}
        >网络创业认定申请</NavBar>

        <Form id="userForm" encType="multipart/form-data">
            <div className='name'>申请人姓名</div>
              <FormItem>
              {
                getFieldDecorator('ProposerName',{
                  initiaValue:'',
                  rules:[{
                    required:true,
                    message:'*姓名不能为空'
                  }]
                })(
                  <Input className='user-input' placeholder='请输入'/>
                )
              }
            </FormItem>
            <div className='name'>申请人身份证号码</div>
            <FormItem>
              {
              getFieldDecorator('ProposerIdCardNumber',{
                initiaValue:'',
                rules:[{
                  required:true,
                  message:'*申请人身份证号码不能为空'
                }]
              })(
                <Input className='user-input' placeholder='请输入'/>
              )
            }
            </FormItem>
            
            <div className='name'>申请人类别</div>
            <FormItem>
              {
              getFieldDecorator('ProposerType',{
                initiaValue:'',
                rules:[{
                  required:true,
                  message:'*申请人类别不能为空'
                }]
              })(
                <Picker data={district1} cols={1} className="forss">
                    <List.Item arrow="horizontal"></List.Item>
                </Picker>
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
            <div className='name'>用户（旺旺）ID</div>
            <FormItem>
              {
              getFieldDecorator('UserId',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>用户网址</div>
            <FormItem>
              {
              getFieldDecorator('UserUrl',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>经营地所在电子商务企业</div>
            <FormItem>
              {
              getFieldDecorator('Enterprise',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            
            <div className='name'>好评率</div>
            <FormItem>
              {
              getFieldDecorator('Rate',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>卖家信用积分</div>
            <FormItem>
              {
              getFieldDecorator('SellerCreditScore',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>网店经营开始时间</div>
            <FormItem>
              {
              getFieldDecorator('StartTime',{
                initiaValue:'',
              })(
                <DatePicker
                  mode="date"
                  extra=""
                  setFieldsValue={this.state.date}
                  onChange={date => this.setState({ date })}
                >
                  <List.Item arrow="horizontal"></List.Item>
                </DatePicker>
              )
            }
            </FormItem>
            <div className='name'>网店平均交易额（申请前三个月）</div>
            <FormItem>
              {
              getFieldDecorator('AverageTurnover',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>网店平均收入（申请前三个月）</div>
            <FormItem>
              {
              getFieldDecorator('AverageIncome',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>申请人联系电话</div>
            <FormItem>
              {
              getFieldDecorator('ProposerNumber',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>申请人手机号</div>
            <FormItem>
              {
              getFieldDecorator('ProposerPhoneNumber',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>招用城镇登记失业人员人数</div>
            <FormItem>
              {
              getFieldDecorator('UnemploymentRecruitment',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>招用高校毕业生人数</div>
            <FormItem>
              {
              getFieldDecorator('GraduateRecruitment',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>招用农村转移劳动力人数</div>
            <FormItem>
              {
              getFieldDecorator('RuralRecruitment',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>招用其他人数</div>
            <FormItem>
              {
              getFieldDecorator('OtherRecruitment',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>职工总数</div>
            <FormItem>
              {
              getFieldDecorator('TotalNumber',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>参保人数</div>
            <FormItem>
              {
              getFieldDecorator('ContributorsIn',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>E-mail地址</div>
            <FormItem>
              {
              getFieldDecorator('EMail',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>申请人户籍性质</div>
            <FormItem>
              {
              getFieldDecorator('HouseholdRegistrationAddress',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>申请人户籍所在城区</div>
            <FormItem>
              {
              getFieldDecorator('HouseholdRegistrationCity',{
                initiaValue:'',
              })(
                <Picker data={district3} cols={1} className="forss">
                    <List.Item arrow="horizontal"></List.Item>
                </Picker>
              )
            }
            </FormItem>
            <div className='name'>申请人经营所在城区</div>
            <FormItem>
              {
              getFieldDecorator('BusinessCity',{
                initiaValue:'',
              })(
                <Picker data={district3} cols={1} className="forss">
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
export default Form.create()(BusionIdentified);