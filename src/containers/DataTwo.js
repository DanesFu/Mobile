
/*
   完善资料页面
*/
import React from 'react';
import {Form,Input} from 'antd';
import { NavBar, Icon,Toast,TextareaItem,List,Picker,DatePicker,Button} from 'antd-mobile';
import './page.css';
import $ from'jquery'



const FormItem=Form.Item;

class DataTwo extends React.Component {

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
          Toast.info('成功', 1);
            $.ajax({
                  url: ' http://www.hzwotu.com/ApiTest/perfectInfo',
                  type: 'POST',
                  data: userInfo,
                  success: function (data) {
                     window.location.href = '/#/hometeacher';
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
    window.location.href = '/#/message1';
  }

  render() {
    let district=[{label:'男',value:'男'},{label:'女',value:'女'}]
    let district2=[{label:'是',value:'是'},{label:'否',value:'否'}]
    const {getFieldDecorator} =this.props.form;
    // const title =  this.props.match.params.title;


    //地址大全
    let antdDistrict =[];
    let districtData = require('./../../node_modules/china-location/dist/location');
    Object.keys(districtData).forEach((index)=>{
      let itemLevel1 ={};
      let itemLevel2 ={};
      itemLevel1.value = districtData[index].code;
      itemLevel1.label = districtData[index].name;
      itemLevel1.children = [];
      let data = districtData[index].cities;
      Object.keys(data).forEach((index)=>{
          itemLevel2.value = data[index].code;
          itemLevel2.label = data[index].name;
          itemLevel2.children = [];
          let data2 = data[index].districts;
          let itemLevel3 ={};
          itemLevel3.children = [];
          Object.keys(data2).forEach((index)=>{
              itemLevel3.value = index;
              itemLevel3.label = data2[index];
              itemLevel2.children.push(itemLevel3);
              itemLevel3 ={};
          });
          itemLevel1.children.push(itemLevel2);
          itemLevel2 ={};
      });
      antdDistrict.push(itemLevel1)
  });
    return (
      <div id="test-container" ref={node => this.node = node}>
      <NavBar
          mode="light"
          icon={<Icon type="left" color='#000' onClick={this.backClick} />}
          rightContent={[
          ]}
        >大学生导师结队政策</NavBar>

        <Form id="userForm" encType="multipart/form-data">
            <div className='name'>姓名</div>
              <FormItem>
              {
                getFieldDecorator('name',{
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
            
            <div className='name'>身份证号码</div>
            <FormItem>
              {
              getFieldDecorator('Id-card-number',{
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
            <div className='name'>民族</div>
            <FormItem>
              {
              getFieldDecorator('national',{
                initiaValue:'',
                rules:[{
                  required:true,
                  message:'*民族不能为空'
                }]
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>政治面貌</div>
            <FormItem>
              {
              getFieldDecorator('Political-landscape',{
                initiaValue:'',
                rules:[{
                  required:true,
                  message:'*政治面貌不能为空'
                }]
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>所在高校</div>
            <FormItem>
              {
              getFieldDecorator('school',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>户籍地址</div>
            <FormItem>
              {
              getFieldDecorator('The-household-registration',{
                initiaValue:'',
              })(
                <Picker extra="请选择"
                  data={antdDistrict}
                  title=""
                  onOk={e => console.log('ok', e)}
                  onDismiss={e => console.log('dismiss', e)}
                >
                  <List.Item arrow="horizontal"></List.Item>
                </Picker>
              )
            }
            </FormItem>
            
            <div className='name'>所学专业</div>
            <FormItem>
              {
              getFieldDecorator('professional',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>学制</div>
            <FormItem>
              {
              getFieldDecorator('Eductional-systme',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>年级</div>
            <FormItem>
              {
              getFieldDecorator('grade',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>电话号码</div>
            <FormItem>
              {
              getFieldDecorator('phoneNumber',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>邮箱</div>
            <FormItem>
              {
              getFieldDecorator('e-mail',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>入学年月</div>
            <FormItem>
              {
              getFieldDecorator('years',{
                initiaValue:'',
              })(
                <DatePicker
                mode="date"
                title="Select Date"
                extra="请选择"
                setFieldsValue={this.state.date}
                onChange={date => this.setState({ date })}
              >
                <List.Item arrow="horizontal"></List.Item>
              </DatePicker>
              )
            }
            </FormItem>
            <div className='name'>是否困难家庭</div>
            <FormItem>
            {
              getFieldDecorator('Poor-families',{
                initiaValue:'',
              })(
                <Picker data={district2} cols={1} className="forss">
                    <List.Item arrow="horizontal"></List.Item>
                </Picker>
              )
            }
            </FormItem>
            <div className='name'>自我评价（200字左右）</div>
            <FormItem>
            {
              getFieldDecorator('Self-assessment',{
                initiaValue:'',
              })(
                <TextareaItem
                rows={5}
                count={200}
               />
              )
            }
            </FormItem>
            <div className='name'>申请说明（申请理由及个人说明）</div>
            {
              getFieldDecorator('Apply-message',{
                initiaValue:'',
              })(
                <TextareaItem
                rows={5}
                count={200}
               />
              )
            }
            <Button type='primary' onClick={this.handleSubmit}>提交</Button>
        </Form>
      </div>
    );
  }
}
export default Form.create()(DataTwo);