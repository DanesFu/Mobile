
/*
   完善资料页面
*/
import React from 'react';
import {Form,Input} from 'antd';
import { NavBar, Icon,List,Picker,Button} from 'antd-mobile';
import './page.css';
import $ from'jquery'



const FormItem=Form.Item;

class DataNet extends React.Component {

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
                  url: ' http://www.hzwotu.com/ApiTest/addNetGenDecided',
                  type: 'POST',
                  data: userInfo,
                  success: function (data) {
                  window.location.href = '/#/PersonPrilling';
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
    let district=[{label:'男',value:'男'},{label:'女',value:'女'}]
    let district1=[{label:'在校大学生',value:'在校大学生'},
            {label:'毕业5年以内的高校毕业生',value:'毕业5年以内的高校毕业生'},
            {label:'市区户籍登记失业人员',value:'市区户籍登记失业人员'},
            {label:'市区户籍就业困难人员',value:'市区户籍就业困难人员'},
            {label:'市区户籍城镇转业复退军人',value:'市区户籍城镇转业复退军人'},
            {label:'其他人员',value:'其他人员'},]
    let district2=[{label:'是',value:'是'},{label:'否',value:'否'}]
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
    let district4=[{label:'一类贷款（10万及以下，担保基金贷款）',value:'一类贷款（10万及以下，担保基金贷款）'},
                 {label:'一类贷款（10万及以上，担保机构贷款）',value:'一类贷款（10万及以上，担保机构贷款）'},
                 {label:'二类贷款',value:'二类贷款'},]
    const {getFieldDecorator} =this.props.form;


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
        >市区创业担保贷款贴息资格认定</NavBar>

        <Form id="userForm" encType="multipart/form-data">
            <div className='name'>借款人姓名</div>
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
              getFieldDecorator('idCardNumber',{
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
            <div className='name'>人员类别</div>
            <FormItem>
              {
              getFieldDecorator('PersonnelCategory',{
                initiaValue:'',
                rules:[{
                  required:true,
                  message:'*人员类别不能为空'
                }]
              })(
                <Picker data={district1} cols={1} className="forss">
                    <List.Item arrow="horizontal"></List.Item>
                </Picker>
              )
            }
            </FormItem>
            <div className='name'>户口所在地</div>
            <FormItem>
              {
              getFieldDecorator('RegisteredResidence',{
                initiaValue:'',
                rules:[{
                  required:true,
                  message:'*户口所在地不能为空'
                }]
              })(
                <Picker data={district3} cols={1} className="forss">
                    <List.Item arrow="horizontal"></List.Item>
                </Picker>
              )
            }
            </FormItem>
            <div className='name'>营业执照注册地</div>
            <FormItem>
              {
              getFieldDecorator('Registered',{
                initiaValue:'',
              })(
                <Picker data={district3} cols={1} className="forss">
                     <List.Item arrow="horizontal"></List.Item>
                </Picker>
              )
            }
            </FormItem>
            <div className='name'>联系电话</div>
            <FormItem>
              {
              getFieldDecorator('PhoneNumber',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            
            <div className='name'>营业证照编号</div>
            <FormItem>
              {
              getFieldDecorator('SerialNumber',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>申请贷款金额</div>
            <FormItem>
              {
              getFieldDecorator('ApplyFigure',{
                initiaValue:'',
              })(
                <Input className='user-input' placeholder='请输入' />
              )
            }
            </FormItem>
            <div className='name'>申请创业担保贷款类别</div>
            <FormItem>
              {
              getFieldDecorator('ApplyType',{
                initiaValue:'',
              })(
                <Picker data={district4} cols={1} className="forss">
                        <List.Item arrow="horizontal"></List.Item>
                </Picker>
              )
            }
            </FormItem>
            <div className='name'>如未申请到一类贷款，是否改为申请二类贷款</div>
            <FormItem>
              {
              getFieldDecorator('Switch',{
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
export default Form.create()(DataNet);