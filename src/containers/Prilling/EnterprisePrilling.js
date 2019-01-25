
/*
   完善资料页面
*/
import React from 'react';
import {Form} from 'antd';
import { NavBar, Icon,List,Picker,Button} from 'antd-mobile';
import '../page.css';



const FormItem=Form.Item;

class EnterprisePrilling extends React.Component {

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
  let {FutureCareer:[x],FullDiscount:[y]}=userInfo;
  sessionStorage.setItem('FutureCareer', JSON.stringify(x));
  sessionStorage.setItem('FullDiscount', JSON.stringify(y));
   window.location.href = '/#/EnterprisePrillingMaterial';
  // this.props.form.validateFields((err,values)=>{
  //     if(!err){
  //         Toast.info('成功', 1);
  //           $.ajax({
  //                 url: 'http://www.hzwotu.com/ApiTest/addLoanGuaranteesEnterprise?act=list',
  //                 type: 'POST',
  //                 data: userInfo,
  //                 success: function (data) {
  //                 sessionStorage.setItem('Prilling', JSON.stringify(userInfo));
                
  //                 console.log('成功');
  //                 }.bind(this),
  //                 error: function (xhr, status, err) {
  //                 }.bind(this) 
  //         });
  //     }else{}})
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
    let district=[{label:'非未来产业范畴',value:'A1'},{label:'是未来产业范畴',value:'A2'}]
    let district2=[{label:'未入驻上述区域,按50%贴息',value:'B1'},
                    {label:'入驻科技孵化器',value:'B2'},
                    {label:'入驻经人力社保部门认定的创业孵化基地',value:'B3'},]
    const {getFieldDecorator} =this.props.form;


    return (
      <div id="test-container" ref={node => this.node = node}>
      <NavBar
          mode="light"
          icon={<Icon type="left" color='#000' onClick={this.backClick} />}
          rightContent={[
          ]}
        >企业</NavBar>
            <div className='name'>企业是否从事未来产业</div>
              <FormItem>
              {
                getFieldDecorator('FutureCareer',{
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
            <div className='name'>企业可否享受全额贴息</div>
            <FormItem>
              {
              getFieldDecorator('FullDiscount',{
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
            <Button type='primary' onClick={this.handleSubmit}>提交</Button>
      </div>
    );
  }
}
export default Form.create()(EnterprisePrilling);