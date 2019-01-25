
/*
   完善资料页面
*/
import React from 'react';
import {Form} from 'antd';
import { NavBar, Icon,List,Picker,Button} from 'antd-mobile';
import '../page.css';




const FormItem=Form.Item;

class PersonPrilling extends React.Component {

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
  this.props.form.validateFields((err, values) => {
    console.log(values)
  })
  console.log(userInfo);
  let {BusinessLicenseType:[a],IsBusinessEntity:[b],IsFullDiscount:[c],IsALoan:[d],IsBLoan:[e]}=userInfo;
  sessionStorage.setItem('BusinessLicenseType', JSON.stringify(a));
  sessionStorage.setItem('IsBusinessEntity', JSON.stringify(b));
  sessionStorage.setItem('IsFullDiscount', JSON.stringify(c));
  sessionStorage.setItem('IsALoan', JSON.stringify(d));
  sessionStorage.setItem('IsBLoan', JSON.stringify(e));
   window.location.href = '/#/PersonPrillingMeterial';
    }
  componentDidUpdate(){
    console.log(this.state.v)
  }
  componentDidMount() {
            this.node.scrollIntoView();
          }
  backClick(){
    this.props.history.go(-1)
  }

  render() {
    let district=[{label:'工商营业执照',value:'A1'},{label:'民办非企业执照',value:'A2'},{label:'网上创业就业认定证明',value:'A3'}]
    let district2=[{label:'是企业法人',value:'B1'},
                    {label:'非法人，但是占股30%以上股东',value:'B2'}]
    let district3=[{label:'失业人员或就业困难人员，可以全额贴息',value:'C1'},
    {label:'在校生，可以全额贴息',value:'C2'},
    {label:'国内毕业5年以内（含）息高校毕业生，可以全额贴息',value:'C3'},
    {label:'境外院校毕业5年以内（含）毕业生，可以全额贴息',value:'C4'}]

    let district4=[{label:'否，申请二类贷款',value:'D1'},
    {label:'是，曾获得5万元及以上大学生创业项目无偿资助',value:'D2'},
    {label:'是，曾经评审入驻市人力社保部门认定的创业园',value:'D3'},
    {label:'是，但非上述两种情况',value:'D4'}]

    let district5=[{label:'否',value:'E1'},
    {label:'从事文化创意类项目',value:'E2'},
    {label:'从事科技成果转化、研发的',value:'E3'},
    {label:'从事未来产业的',value:'E4'}]
    const {getFieldDecorator} =this.props.form;
    // const title =  this.props.match.params.title;

    return (

      <div id="test-container" ref={node => this.node = node}>
      <NavBar
          mode="light"
          icon={<Icon type="left" color='#000' onClick={this.backClick} />}

          rightContent={[
          ]}
          
        >个人</NavBar>

        <Form id="userForm" encType="multipart/form-data">
            <div className='name'>营业执照类型</div> 
              <FormItem>
              {
                getFieldDecorator('BusinessLicenseType',{
                  initiaValue:'',
                  rules:[{
                    required:true,
                    message:'*不能为空'
                  }]
                })(
                    <Picker data={district} cols={1} className="forss">
                        <List.Item arrow="horizontal"></List.Item>
                    </Picker>
                )
              }
            </FormItem>
            <div className='name'>申请人是否企业法人</div>
            <FormItem>
              {
              getFieldDecorator('IsBusinessEntity',{
                initiaValue:'',  
                rules:[{
                  required:true,
                  message:'*不能为空'
                }]
              })(
                <Picker data={district2} cols={1} className="forss">
                        <List.Item arrow="horizontal"></List.Item>
                </Picker>
              )
            }
            </FormItem>
            <div className='name'>申请人可否全额贴息</div>
            <FormItem>
              {
              getFieldDecorator('IsFullDiscount',{
                initiaValue:'',  
                rules:[{
                  required:true,
                  message:'*不能为空'
                }]
              })(
                <Picker data={district3} cols={1} className="forss">
                        <List.Item arrow="horizontal"></List.Item>
                </Picker>
              )
            }
            </FormItem>
            <div className='name'>是否申请一类贷款</div>
            <FormItem>
              {
              getFieldDecorator('IsALoan',{
                initiaValue:'',  
                rules:[{
                  required:true,
                  message:'*不能为空'
                }]
              })(
                <Picker data={district4} cols={1} className="forss">
                        <List.Item arrow="horizontal"></List.Item>
                </Picker>
              )
            }
            </FormItem>
            <div className='name'>是否申请30万元以上额度二类贷款</div>
            <FormItem>
              {
              getFieldDecorator('IsBLoan',{
                initiaValue:'',  
                rules:[{
                  required:true,
                  message:'*不能为空'
                }]
              })(
                <Picker data={district5} cols={1} className="forss">
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
export default Form.create()(PersonPrilling);