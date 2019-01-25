/*
   政策详情页
*/
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {Toast, NavBar, Icon,Tabs, WhiteSpace, Badge } from 'antd-mobile';
import {Form,Input} from 'antd';
// import logog from './image/banner.jpg';
import './page.css';
import axios from 'axios';
import pic from './image/pic3.png';
import $ from 'jquery'


const FormItem = Form.Item;
// function showToast() {
//   Toast.info('问题已提交', 1);
// }
const tabs = [
  { title: <Badge >详情</Badge> },
  { title: <Badge>政策原文</Badge> },
  { title: <Badge>FAQ</Badge> },
];

class Message4 extends Component {
  constructor(props) {
    super(props);
    this.backClick = this.backClick.bind(this);
    this.state = {
      videoList: [],
      dataCity:[],
      dataImage:[],
      department:[],
      dataContent:[],
      dataProvince:[],
      faqList:[],
      dataTitle:[],
      dataSummary:[],
      isOpen: false,
      data: ['1', '2', '3'],
      imgHeight: 176,
    }
  }
  componentDidMount() {
    // const title =  this.props.match.params.title;
    // console.log(title)

    // const address=this.props.location.query;
    // const Url=address+1;


    // var storage=window.localStorage;
    // storage.a=Url;
    // localStorage.setItem('key',JSON.stringify(Url));
    // var data1= JSON.parse(localStorage.getItem('key'));
    // var data2=data1.jump;
    const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
    axios.get('http://www.hzwotu.com/ApiTest/policyView?id=3')
      .then(function (res) {
        _this.setState({
          dataImage:res.data.image,
          dataProvince:res.data.province,
          dataContent:res.data.content.split(),
          dataCity: res.data.city, 
          dataTitle:res.data.title,
          dataSummary:res.data.summary,
          department:res.data.department,
          videoList: res.data.video,  
          faqList:res.data.faq,
          isOpen: res.data.status === '2' ? true : false,
          isLoaded: true,
          status:'2'
        });
      })
      .catch(function (error){
        console.log(error);
        _this.setState({
          isLoaded: false,
          error: error
        })
    })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (data2 !== 1) {
  //   return true
  //   }else{
  //     return false
  //   }
  //   } 
  Add = () =>{
    var dataForm=$('#userForm').serialize();
    if(dataForm==='question='){
      Toast.info('问题不能为空', 1);
       console.log('kong');
    }else{
      $.ajax({
      url: 'http://www.hzwotu.com/ApiTest/faqAsk/policy_id=1', 
      type: 'POST',
      data: dataForm,
      cache: false,
      contentType: false, 
      processData: false,
      success: function (data) {
        Toast.info('提交成功', 1);
        console.log('成功');
      },
      error: function (xhr, status, err) {
      }
    });
    }
  }
  handleTouch(){
      alert('选择导师成功');
   }
  backClick(){
    window.location.href = '/#/home';
  }
  renderFaqList() {
    const { videoList ,dataCity,dataImage,dataProvince,department,dataContent,dataSummary,faqList,dataTitle} = this.state;

    return (
      <div className='messageTab'>
        {
          <div>
            <div>
                <Tabs tabs={tabs}
                  initialPage={0}
                  swipeable={false}
                  className='messageTab'
                  // onChange={(tab, index) => { console.log('onChange', index, tab); }}
                  // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                   >
                    <div className='tab'>
                        {/* <div dangerouslySetInnerHTML={{ __html: dataSummary}}></div> */}
                        <img src={dataImage} style={{ marginTop: '10px' }} alt='' />
                        <p className='my-p'></p>
                        <p className='tabTitle'>{dataTitle}</p>
                        <p>地区:{dataProvince}{dataCity}</p>
                        <p>部门:{department}</p>
                        <div className='slider'></div>
                        <div>
                          <span className='tab-span'>专家解读</span>
                        </div>
                        <div>
                          {
                            videoList.length !==0 && videoList.map((d, i) => {
                              return ( 
                                <div key={i}>
                                    <div className='expert-warp'>
                                      <div className="expert">
                                      <div>
                                        <a href={d.video}>
                                          <img src={d.cover} alt='' />
                                        </a>
                                      </div>
                                    </div>
                                    </div>
                                </div>
                              );
                            })
                          }
                      </div>
                      <div className='slider2'></div>
                      <div className='tab-span-warp'>
                          <span className='tab-span'>解读</span>
                          <div className='tab-jd'>
                              <div dangerouslySetInnerHTML={{ __html: dataSummary}}></div>
                          </div>
                      </div>
                      <div className='slider'></div>
                      <div className='tab-span-warp'>
                          <span className='tab-span'>FAQ</span>
                          <div className='tab-jd'>
                              {
                              faqList.length !==0 && faqList.map((d,i) => {
                                return (
                                  <div key={i}>
                                    <div className='faqBackground'>Q:{d.question}</div>
                                    <div className='answer'>A:{d.answer}</div>
                                  </div>
                                )
                              })
                            }
                          </div>
                      </div>
                    </div>
                    <div className='contentTab'>
                        <div dangerouslySetInnerHTML={{ __html: dataContent}} className='original'></div>
                    </div>
                    <div className='contentTab'>
                        <div>
                              {
                                faqList.length !==0 && faqList.map((d,i) => {
                                  return (
                                    <div key={i}>
                                      <div className='faqBackground'>   Q:{d.question}</div>
                                      <div className='answer'>A:{d.answer}</div>
                                    </div>
                                    )
                                })
                              }
                        </div>
                        <div className='tab-midd faq-question'>
                            <div>


                              <Form id="userForm" enctype="multipart/form-data">
                                 <FormItem>
                                   <Input type='text' name='question'  placeholder='在此写下你的问题' className='placeInput' />
                                 </FormItem> 
                                 <div>
                                   <img src={pic} onClick={this.Add.bind(this)} alt='' />
                                 </div>
                              </Form>
                            </div>
                        </div>
                    </div>
                </Tabs>
                <WhiteSpace />
              </div>
          </div>
                    
        }
        <div className="home-apply">
        <a href='http://hzjy.zjhz.hrss.gov.cn/pages/web/login/login-to.html?pid=2' className='primary-button'>
                <span>快速申请</span>
           </a>
        </div>
      </div>
    );
  }
  // goApply() {
  //   const { isOpen } = this.state;
  //   if (!isOpen) return ;
  //   this.props.history.push('/policy-apply?id=1');
  // }
  render() {
    // const {dataTitle} = this.state;
    // const title ={dataTitle};
    return (
      <div className='content-warp'>
        <NavBar
          mode="light"
          className='message-top'
          icon={<Icon type="left" color='#000' onClick={this.backClick} />}
          rightContent={[
            // <Icon key="1" type="ellipsis" color='#000' />,
          ]}
        >政策详情</NavBar>
        <div>
           {this.renderFaqList()}
        </div>     
      </div>
    );
  }
}

export default Message4;