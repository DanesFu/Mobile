/*
   完善资料页面
*/
import React from 'react';
import {Form,Upload, message,} from 'antd';
import { NavBar, Icon,Button} from 'antd-mobile';
import '../page.css';
import $ from'jquery'
import axios from 'axios'



const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const FormItem=Form.Item;

class PersonPrillingMeterial extends React.Component {

  constructor(props){
    super(props);
    this.backClick = this.backClick.bind(this);
    this.state={
        data:[],
        dataList:[],
        dataError:[],
        dataMessage:[],
    };
}

handleSubmit = (event)=>{
  let userInfo=this.props.form.getFieldsValue();
  window.location.href = '/#/mentorpairing2';
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
                  error: function (xhr, status, err) {
                  } 
          });
      }else{}})}
  componentDidUpdate(){
    console.log(this.state.v)
  }
  componentDidMount(){
    const _this = this;
    var BusinessLicenseType = JSON.parse(sessionStorage.getItem('BusinessLicenseType'));
    var IsBusinessEntity = JSON.parse(sessionStorage.getItem('IsBusinessEntity'));
    var IsFullDiscount = JSON.parse(sessionStorage.getItem('IsFullDiscount'));
    var IsALoan = JSON.parse(sessionStorage.getItem('IsALoan'));
    var IsBLoan = JSON.parse(sessionStorage.getItem('IsBLoan'));
    axios.get('http://www.hzwotu.com/ApiTest/addLoanGuaranteesPerson?act=list&key='+BusinessLicenseType+'+'+IsBusinessEntity+'+'+IsFullDiscount+'+'+IsALoan+'+'+IsBLoan+'')
      .then(function (res) {
        _this.setState({
          data:res,
          dataList:res.data.list,
          dataError:res.data.errorCode,
          dataMessage:res.data.errorMessage
        });
      })
      .catch(function (error) {
        console.log(error);
        _this.setState({
          isLoaded: false,
          error: error
        })
      });
    }
  backClick(){
    this.props.history.go(-1)
  }
  renderContent() {
    const {getFieldDecorator} =this.props.form;
    const { dataList,dataError,dataMessage} = this.state;
    console.log(dataMessage)
    if(dataError==='0'){
        return (
        <div>
          {
            dataList.length !== 0 && dataList.map((d, i) => {
              return <div key={i}>
                        <div className='name' style={{lineHeight:1.5}}>
                            <div><p>材料：</p><span>{d.name}</span></div>
                            <div><p>要求：</p><span>{d.yd}</span></div>
                        </div>   
                        <FormItem>
                        {
                          getFieldDecorator(`${d.zlid}`,{
                            initiaValue:'',
                            rules:[{
                              required:true,
                              message:'*不能为空'
                            }]
                          })(
                              <Upload {...props}>
                                <Button>
                                  <Icon type="upload" /> 点击上传
                                </Button>
                              </Upload>
                              // <Input type='file' />
                          )
                        }
                      </FormItem>
                      
                </div>
            })
          }
        </div>
      );
    }else{
      return(<div>
        {
            dataList.length !== 0 && dataList.map((d, i) => {
              return <div key={i}>
                        <div className='name' style={{lineHeight:1.5}}>
                            <div><p>材料：</p><span>{d.name}</span></div>
                            <div><p>要求：</p><span>{d.yd}</span></div>
                        </div>   
                        <FormItem>
                        {
                          getFieldDecorator(`${d.zlid}`,{
                            initiaValue:'',
                            rules:[{
                              required:true,
                              message:'*不能为空'
                            }]
                          })(
                              <Upload {...props}>
                                <Button>
                                  <Icon type="upload" /> 上传
                                </Button>
                              </Upload>
                              // <Input type='file' />
                          )
                        }
                      </FormItem>
                      
                </div>
            })
          }
      
      </div>)
    }
    
  }

  render() {
  
    // const {getFieldDecorator} =this.props.form;
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
            <div>{this.renderContent()}</div>
            <Button type='primary' onClick={this.handleSubmit} style={{marginTop:40}}>提交</Button>
        </Form>
      </div>
    );
  }
}
export default Form.create()(PersonPrillingMeterial);