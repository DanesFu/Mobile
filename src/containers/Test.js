import React from 'react';
import {Form,Card,Input} from 'antd';
import { Button } from 'antd-mobile';
import {Toast,} from 'antd-mobile';
import $ from 'jquery'
 
const FormItem = Form.Item;
class Test extends React.Component { 
    handleSubmit = ()=>{
        let userInfo=this.props.form.getFieldsValue();
        console.log(userInfo)
        this.props.form.validateFields((err,values)=>{
            if(!err){
                Toast.info('成功', 1);
                  $.ajax({
                        url: ' http://www.hzwotu.com/ApiTest/perfectInfo',
                        type: 'POST',
                        data: userInfo,
                        success: function (data) {
                        console.log('成功');
                        },
                        error: function (xhr, status, err) {
                        }
                });
            }
        })
    }
    render(){
        const {getFieldDecorator} =this.props.form;
       return(
           <div>
               <Card title='登录'>
                   <Form layout='inline'>
                       <FormItem label='用户名'>
                           {
                               getFieldDecorator('user',{
                                   initiaValue:'',
                                   rules:[
                                       {
                                           required:true,
                                           message:'用户名不能为空'
                                       }
                                   ]
                               })(
                                   <Input placeholder='user' />
                               )
                           }
                           
                       </FormItem>
                       <FormItem>
                           {
                               getFieldDecorator('pwd',{
                                   initiaValue:'',
                                   rules:[
                                       {
                                           required:true,
                                           message:'密码不能为空'
                                       }
                                   ]
                               })(
                                   <Input placeholder='pwd' />
                               )
                           }
                       </FormItem>
                       <FormItem>
                           <Button type='primary' onClick={this.handleSubmit}>提交</Button>
                       </FormItem>
                   </Form>
               </Card>
           </div>
       )
    }
}
// const Test = Form.create({})(Tes);
export default Form.create({})(Test);