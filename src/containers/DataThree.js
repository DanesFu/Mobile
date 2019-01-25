/*
   完善资料页面
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button,NavBar, Icon,List, Toast ,InputItem, WhiteSpace,TextareaItem} from 'antd-mobile';
import './page.css'


// const RadioItem = Radio.RadioItem;

class DataThree extends Component {
  state = {
        hasError: false,
        value: '',
      }
      onErrorClick = () => {
        if (this.state.hasError) {
          Toast.info('Please enter 11 digits');
        }
      }
      onChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
          this.setState({
            hasError: true,
          });
        } else {
          this.setState({
            hasError: false,
          });
        }
        this.setState({
          value,
        });
      }
   componentDidMount() {
        // this.autoFocusInst.focus();
      }
   handleClick = () => {
        this.inputRef.focus();
      }
   render() {
    // const { value, value2, value3, value4 } = this.state;
    // const data = [
    //   { value: 0, label: 'doctor' },
    //   { value: 1, label: 'bachelor' },
    // ];
    // const data2 = [
    //   { value: 0, label: 'basketball', extra: 'details' },
    //   { value: 1, label: 'football', extra: 'details' },
    // ];
       return (
           <div id="test-container" className='datatwoContent'>
              <NavBar
                  mode="light"
                  icon={<Icon type="cross" color='#000'/>}
                  onLeftClick={() => console.log('onLeftClick')}
                  rightContent={[
                     <Icon key="1" type="ellipsis" color='#000'/>,
                   ]}
                >申请杭州市创业房租补贴政策</NavBar>

                <WhiteSpace />
                <List renderHeader={() => '地区'}>
                    <InputItem
                      clear
                      placeholder="浙江省杭州市"
                    ></InputItem>
                </List>
                <List renderHeader={() => '部门'}>
                    <InputItem
                      clear
                      placeholder="人社部"
                    ></InputItem>
                </List>
                <List renderHeader={() => '姓名'}>
                    <InputItem
                      clear
                    //   placeholder="displayed clear while typing"
                    ></InputItem>
                </List>
                <List renderHeader={() => '性别'}>
                </List>
                <form action="" method="get" className='my-form'> 
                    <label><input name="Fruit" type="radio" value="" />男</label> <br />
                    <label><input name="Fruit" type="radio" value="" style={{marginTop:'10px'}}/>女 </label> 
                </form> 
                <List renderHeader={() => '身份证'}>
                    <InputItem
                      clear
                    //   placeholder="displayed clear while typing"
                    ></InputItem>
                </List>
                <List renderHeader={() => '民族'}>
                    <InputItem
                      clear
                    //   placeholder="displayed clear while typing"
                    ></InputItem>
                </List>
                <List renderHeader={() => '学历'}>
                    <InputItem
                      clear
                    //   placeholder="displayed clear while typing"
                    ></InputItem>
                </List>
                <List renderHeader={() => '政治面貌'}>
                    <InputItem
                      clear
                    //   placeholder="displayed clear while typing"
                    ></InputItem>
                </List>
                <List renderHeader={() => '单位名称'}>
                    <InputItem
                      clear
                    //   placeholder="displayed clear while typing"
                    ></InputItem>
                </List>
                <List renderHeader={() => '职务'}>
                    <InputItem
                      clear
                    //   placeholder="displayed clear while typing"
                    ></InputItem>
                </List>
                <List renderHeader={() => '通讯地址'}>
                    <InputItem
                      clear
                    //   placeholder="displayed clear while typing"
                    ></InputItem>
                </List>
                <List renderHeader={() => 'E-mail'}>
                    <InputItem
                      clear
                    //   placeholder="displayed clear while typing"
                    ></InputItem>
                </List>
                <List renderHeader={() => '手机号码'}>
                    <InputItem
                       type="phone"
                       error={this.state.hasError}
                       onErrorClick={this.onErrorClick}
                       onChange={this.onChange}
                       value={this.state.value}
                     ></InputItem>
                </List>
                <List renderHeader={() => '身份类别'}>
                </List>
                <form action="" method="get" className='my-form'> 
                    <label><input name="Fruit" type="radio" value="" />企业创始人</label> <br />
                    <label><input name="Fruit" type="radio" value="" style={{marginTop:'10px'}}/>企业高管 </label> <br />
                    <label><input name="Fruit" type="radio" value="" style={{marginTop:'10px'}}/>政府官员 </label> <br />
                    <label><input name="Fruit" type="radio" value="" style={{marginTop:'10px'}}/>专家学者 </label> <br />
                    <label><input name="Fruit" type="radio" value="" style={{marginTop:'10px'}}/>投资人 </label> <br />
                    <label><input name="Fruit" type="radio" value="" style={{marginTop:'10px'}}/>法律顾问 </label> <br />
                    <label><input name="Fruit" type="radio" value="" style={{marginTop:'10px'}}/>其他 </label> 
                </form> 
                <List renderHeader={() => '指导方向'}>
                </List>
                <form action="" method="get" className='my-form'> 
                    <label><input name="Fruit" type="radio" value="" />就业</label> <br />
                    <label><input name="Fruit" type="radio" value="" style={{marginTop:'10px'}}/>创业 </label> 
                </form> 
                <List renderHeader={() => '个人信息'}>
                    <InputItem
                      clear
                    //   placeholder="displayed clear while typing"
                    ></InputItem>
                </List>
                <List renderHeader={() => "过往辅导经历"}>
                    <TextareaItem
                      rows={5}
                      count={100}
                     />
                </List>
                <List renderHeader={() => "其他增加说明"}>
                    <TextareaItem
                      rows={5}
                      count={100}
                     />
                </List>
                <List style={{ margin: '20px 0', backgroundColor: 'white' }}>
                    <Link to={{ pathname: '/mentorpairing', state: { mold: 'add' },aa:'dddd' }} className="home-link">
                        <Button type="primary" className='my_button'>完成</Button><WhiteSpace />
                    </Link>
                </List>
                
           </div>
       );
   }
}
export default DataThree;

