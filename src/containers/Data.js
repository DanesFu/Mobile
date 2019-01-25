/*
   完善资料页面
*/
import React from 'react';
import {Form,Input} from 'antd';
import { Picker, NavBar, Icon,Toast,List,DatePicker,Button} from 'antd-mobile';
import './page.css';
import $ from'jquery'


const FormItem = Form.Item;
class Data extends React.Component {
  constructor(props){
    super(props);
    this.backClick = this.backClick.bind(this);
    this.state={
        pickerValue: [],
        pickerValue2: [],
        pickerValue3: [],
        value:'',
        value2:'',
        value3:'',
        sValue: ['本科'],
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
                    window.location.href = '/#/matching';
                    },
                    error: function (xhr, status, err) {
                    }
            });
        }else{}
    })}
  backClick(){
    this.props.history.go(-1)
  }
  render() {
    const {getFieldDecorator} =this.props.form;
    let antdDistrict =[];
    let districtData = require('./../../node_modules/china-location/dist/location');

    let districtData2 =[{label:'小学',value:'小学'},
    {label:'初中',value:'初中'},
    {label:'高中',value:'高中'},
    {label:'专科',value:'专科'},
    {label:'本科',value:'本科'},
    {label:'硕士研究生',value:'硕士研究生'},
    {label:'博士研究生',value:'博士研究生'},]

    let district=[{label:'男',value:'男'},{label:'女',value:'女'}]

    let districtData3=[{label:'创业导师',value:'创业导师'},
    {label:'在杭普通高校在校生',value:'在杭普通高校在校生'},
    {label:'毕业五年（含）及内高校毕业生',value:'毕业五年（含）及内高校毕业生'},
    {label:'登记失业人员',value:'登记失业人员'},
    {label:'外来务工人员',value:'外来务工人员'},
    {label:'就业困难人员（包括残疾人）',value:'就业困难人员（包括残疾人）'},
    {label:'城镇转业复退军人',value:'城镇转业复退军人'},
    {label:'企业或个体商户',value:'企业或个体商户'},
    {label:'其他',value:'其他'}]

    let district4=[{label:'是',value:'是'},{label:'否',value:'否'}]

    let district5=[{label:'企业',value:'企业'},
    {label:'个体工商户（含经认定的网络创业）',value:'个体工商户（含经认定的网络创业）'},
    {label:'民办非企业（娱乐业、桑拿、按摩、网吧等行业除外）',value:'民办非企业（娱乐业、桑拿、按摩、网吧等行业除外）'},
    {label:'其他',value:'其他'}]
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
      <div id="test-container"  ref={node => this.node = node}>
      <NavBar
          mode="light"
          icon={<Icon type="left" color='#000' onClick={this.backClick} />}
          rightContent={[
          ]}
        >智能匹配</NavBar>
        <Form layout='inline'>
            <div className='name'>姓名</div>
              <FormItem>
                {
                    getFieldDecorator('name',{
                        initiaValue:'',
                        rules:[
                            {
                                required:true,
                                message:'*姓名不能为空'
                            }
                        ]
                    })(
                        <Input className='user-input'  placeholder='请输入'/>
                    )
                }
              </FormItem>
            <div className='name'>性别</div>
            <FormItem>
              {
                getFieldDecorator('sex',{
                    initiaValue:'',
                    rules:[
                        {
                            required:true,
                            message:'*性别不能为空'
                        }
                    ]
                })(
                  <Picker data={district} cols={1} className="forss">
                      <List.Item arrow="horizontal"></List.Item>
                  </Picker>
                )
            }
            </FormItem>
            <div className='name'>年龄（周岁）</div>
            <FormItem>
               {
                getFieldDecorator('age',{
                    initiaValue:'',
                    rules:[
                        {
                            required:true,
                            message:'*年龄不能为空'
                        }
                    ]
                })(
                  <Input className='user-input'  placeholder='请输入'/>
                )
            }
            </FormItem>
           
            <div className='name'>籍贯</div>
            <FormItem>
              {
                getFieldDecorator('province',{
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
            <div className='name'>学历</div>
            <FormItem>
              {
                  getFieldDecorator('education',{
                      initiaValue:'',
                  })(
                <Picker data={districtData2} cols={1} className="forss">
                   <List.Item arrow="horizontal"></List.Item>
                </Picker>
                  )
              }
            </FormItem>
            <div className='name'>身份</div>
            <FormItem>
              {
                  getFieldDecorator('personnel_type',{
                      initiaValue:'',
                  })(
                <Picker data={districtData3} cols={1} className="forss">
                   <List.Item arrow="horizontal"></List.Item>
                </Picker>
                  )
              }
            </FormItem>
            <div className='name'>是否担任创业单位法人</div>
            <FormItem>
              {
                    getFieldDecorator('is_business',{
                        initiaValue:'',
                    })(
                  <Picker data={district4} cols={1} className="forss">
                    <List.Item arrow="horizontal"></List.Item>
                  </Picker>
                    )
                }
            </FormItem>
            <div className='name'>创业地区</div>
            <FormItem>
              {
                getFieldDecorator('business_province',{
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
            <div className='name'>创业单位注册时间</div>
            <FormItem>
               {
                getFieldDecorator('business_time',{
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
            <div className='name'>创业单位性质</div>
            <FormItem>
              {
                    getFieldDecorator('business_nature',{
                        initiaValue:'',
                    })(
                  <Picker data={district5} cols={1} className="forss">
                    <List.Item arrow="horizontal"></List.Item>
                  </Picker>
                    )
                }
            </FormItem>
            <div className='name'>占股比例</div>
            <FormItem>
              {
                getFieldDecorator('stake_ratio',{
                    initiaValue:'',
                })(
                  <Input className='user-input'  placeholder='请输入'/>
                )
            }
            </FormItem> 
            <div className='name'>是否在创业单位缴纳社保</div>
            <FormItem>
              {
                    getFieldDecorator('social_security_same',{
                        initiaValue:'',
                    })(
                  <Picker data={district4} cols={1} className="forss">
                    <List.Item arrow="horizontal"></List.Item>
                  </Picker>
                    )
                }
            </FormItem>
            <div className='name'></div>
            {/* <Link 
              to='/matching'
              type="primary" 
              className='primary-button'
              onClick={this.handleSubmit}
            >
                  <span>提交</span>
            </Link> */}
            <Button type='primary' onClick={this.handleSubmit}>提交</Button>
        </Form>
      </div>
    );
  }
}
export default Form.create()(Data);

