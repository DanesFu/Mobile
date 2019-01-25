
/*
   完善资料页面
*/
import React from 'react';
import {Form,Upload, message,} from 'antd';
import { NavBar, Icon,Button} from 'antd-mobile';
import '../page.css';
import $ from'jquery';
import axios from 'axios'



const props = {
  name: 'file',
  action: '/jsonplaceholder.typicode.com/posts/',
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

class EnterprisePrilling extends React.Component {
  constructor(props){
    super(props);
    this.backClick = this.backClick.bind(this);
    this.state={
        data:[],
        dataList:[],
    };
}

handleSubmit = (event)=>{
  // var Prilling = JSON.parse(sessionStorage.getItem('Prilling'));
  let userInfo=this.props.form.getFieldsValue();
  window.location.href = '/#/mentorpairing2';
  this.props.form.validateFields((err,values)=>{
      if(!err){
            $.ajax({
                  url: 'http://www.hzwotu.com/ApiTest/addLoanGuaranteesEnterprise',
                  type: 'POST',
                  data: userInfo,
                  success: function (data,res) {
                    console.log(data)
                  // sessionStorage.setItem('key', JSON.stringify(info));
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
    var FutureCareer = JSON.parse(sessionStorage.getItem('FutureCareer'));
    var FullDiscount = JSON.parse(sessionStorage.getItem('FullDiscount'));
    axios.get('http://www.hzwotu.com/ApiTest/addLoanGuaranteesEnterprise?act=list&key='+FutureCareer+'+'+FullDiscount+'')
      .then(function (res) {
        _this.setState({
          data:res.data,
          dataList:res.data.list
        });
        console.log(res)
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
    const { dataList} = this.state;
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
                                <Icon type="upload" /> 上传
                              </Button>
                            </Upload>
                        )
                      }
                    </FormItem>
               </div>
          })
        }
      </div>
    );
  }
  render() {
    return (

      <div id="test-container" ref={node => this.node = node}>
      <NavBar
          mode="light"
          icon={<Icon type="left" color='#000' onClick={this.backClick} />}

          rightContent={[
          ]}
          
        >企业</NavBar>

        <Form id="userForm" encType="multipart/form-data">
            <div>{this.renderContent()}</div>
            <Button type='primary' onClick={this.handleSubmit} style={{marginTop:40}}>提交</Button>
        </Form>
      </div>
    );
  }
}
export default Form.create()(EnterprisePrilling);