/*
   Home 主页
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {WhiteSpace ,NavBar, Icon} from 'antd-mobile';
import './page.css';
import axios from 'axios'



const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>
        <div id="home-container">
            <NavBar
              mode="light"
              onLeftClick={() => console.log('onLeftClick')}
              rightContent={[
              // <Icon key="1" type="ellipsis"  color="#000" />,
            ]}
            >智能匹配列表</NavBar>
          <div>
        </div>
        </div>
    </div>
  );
class HomeT extends Component {
    constructor(props) {
        super(props);
        this.backClick = this.backClick.bind(this);
        this.state = {
          dataList: [],
        }
      }
      backClick(){
        this.props.history.go(-1);
      }
      componentDidMount() {
        const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://www.hzwotu.com/ApiTest/policySmart?crowd=5')
          .then(function (res) {
            _this.setState({
              dataList: res.data.list,
              isLoaded: true,
              // status:'2'
            });
          })
          .catch(function (error) {
            console.log(error);
            _this.setState({
              isLoaded: false,
              error: error
            })
          })
      }
    renderContent() {
        const { dataList} = this.state;
        return (
          <div>
            {
              dataList.length !== 0 && dataList.map((d, i) => {
                var address = i;
                var path = {
                  pathname:'/message'+d.id,
                  query:address,
                 }
                return <div key={i}>
                {/* <div className='dataTitle'><p>{d.title}</p></div> */}
                  <Link to={path} className="home-link?id=1">
                    <div className='hometJesis'>
                      <img src={d.image} alt='' />
                    </div>
                  </Link>
                </div>
              })
            }
          </div>
        );
      }
   render() {
      return (
          <div>
               <PlaceHolder />
               <Icon type="left" color="#000" onClick={this.backClick} className='myIcon' />
                <div style={{marginTop:30}}>
                  <WhiteSpace />
                    {this.renderContent()}
                  <WhiteSpace />
                </div>
          </div>
      );
   }
}
export default HomeT;

