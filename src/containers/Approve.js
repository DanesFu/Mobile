import React from 'react';
import {Form,Input} from 'antd';
import { Button,NavBar,Icon } from 'antd-mobile';
import {Toast,} from 'antd-mobile';
import $ from 'jquery'
 


const FormItem = Form.Item;
class Approve extends React.Component {
    constructor(props){
        super(props);
        this.state={
            Text:[],
        }
    }
    handleSubmit = ()=>{
        let userInfo=this.props.form.getFieldsValue();
        var data1 = JSON.parse(sessionStorage.getItem('key'));
        console.log(data1.message1)
        this.props.form.validateFields((err,values)=>{
            if(!err){
                    $.ajax({
                    url: ' http://www.hzwotu.com/ApiTest/personCertification',
                    type: 'GET',
                    data: userInfo,
                    dataType:'json',
                    error: function () {
                        Toast.info('错误', 1);
                    },
                    success: function (response){
                        let {errorCode,errorMessage}=response;
                        console.log(errorCode)
                        console.log(errorMessage)
                        if(errorCode!==1){
                            Toast.info(errorMessage, 1);
                        }else{
                            // var denyAry = ['625899','625865','623062','622840','622254','622257','622256',
                            // '623111','621468','422160','422161','621420','622267','622279','623185','622892',
                            // '621068','621067','622138','621066','623038','622328','623501','621021','622860',
                            // '623518','623068','621239','622877','622879'];
                            const info2='yes';
                            localStorage.setItem('pice', JSON.stringify(info2));
                            Toast.info('认证成功', 1);
                            window.location.href = '/#/'+data1.message1+'';
                     }},
                });
            }
        })
    }
    componentWillMount(){
        this.setState({
            Text:[]
        })
    }
     //返回键
    backClick(){
        window.location.href = '/#/home';
    }
    handleChange(){
        this.setState((e)=>({
            Text:e.value,
        }))
        console.log(Text)
    }
    componentDidMount(){
        var data1 = JSON.parse(sessionStorage.getItem('key'));
        console.log(data1.message1);
        var pice = JSON.parse(localStorage.getItem('pice'));
        if(pice==='yes'){
            console.log('yes')
            window.location.href = '/#/'+data1.message1+'';
        }else{
            console.log('no')
        }
    }
    render(){
        const {getFieldDecorator} =this.props.form;
       return(
           <div>
                <NavBar
                    mode="light"
                    className='message-top'
                    icon={<Icon type="left" color='#000' onClick={this.backClick} />}
                    rightContent={[
                        // <Icon key="1" type="ellipsis" color='#000' />,
                    ]}
                    >实名认证</NavBar>
                   <Form layout='inline' style={{marginTop:50}}>
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
                        <div className='name'>身份证号码</div>
                        <FormItem>
                            {
                                getFieldDecorator('idcardnum',{
                                    initiaValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:'*身份证号码不能为空'
                                        }
                                    ]
                                })(
                                    <Input className='user-input'  placeholder='请输入'/>
                                )
                            }
                        </FormItem>
                        <div className='name'>银行卡号码</div>
                        <FormItem>
                            {
                                getFieldDecorator('bankcardnum',{
                                    initiaValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:'*银行卡号码不能为空'
                                        }
                                    ]
                                })(
                                    <Input className='user-input'  placeholder='请输入' onChange={this.handleChange.bind(this)} />
                                )
                            }
                        </FormItem>
                       <FormItem>
                           <Button type='primary' onClick={this.handleSubmit}>提交</Button>
                       </FormItem>
                   </Form>
           </div>
       )
    }
};
export default Form.create({})(Approve);