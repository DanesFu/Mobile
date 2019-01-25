/*
   Root, Router 配置
*/
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from './../App';
 
import Matching from './../containers/Matching';
import Mac from './../containers/Mac';
import Home from './../containers/Home';
import HomeT from '../containers/HomeT';
import HomeTeacher from './../containers/HomeTeacher';
import Message from './../containers/Message';
import Message1 from './../containers/Message1';
import Message2 from '../containers/Message2';
import Message3 from '../containers/Message3';
import Message4 from '../containers/Message4';
import Message5 from '../containers/Message5';
import Message6 from '../containers/Message6';
import Data from './../containers/Data';
import DataTwo from './../containers/DataTwo';
import DataThree from './../containers/DataThree';
import MentorPairing from './../containers/MentorPairing';
import MentorPairing2 from './../containers/MentorPairing2';
import ApplySuccess from './../containers/ApplySuccess';
import Test from './../containers/Test';
import Approve from './../containers/Approve';
import DataNet from './../containers/DataNet';
import DataEnterprise from './../containers/DataEnterprise';
import BusionIdentified from './../containers/BusionIdentified';
import EntrepreneurshipBest from './../containers/EntrepreneurshipBest';
import FreeSponsorship from './../containers/FreeSponsorship';
import EnterprisePrilling from './../containers/Prilling/EnterprisePrilling';
import PersonPrilling from './../containers/Prilling/PersonPrilling';
import EnterprisePrillingMaterial from './../containers/Prilling/EnterprisePrillingMaterial';
import PersonPrillingMeterial from './../containers/Prilling/PersonPrillingMeterial';
 
const Root = () => (
   <div>
      <Switch>
         <Route
            path="/"
            render={props => (
               <App>
                  <Switch>
                     <Route path="/" exact component={Home} />
                     <Route path="/policy?crowd=1" component={Home} />
                     <Route path="/homet" component={HomeT} />
                     <Route path="/hometeacher" component={HomeTeacher} />
                     <Route path="/matching" component={Matching} />
                     <Route path="/mac" component={Mac} />
                     <Route path="/data" component={Data} />
                     <Route path="/datathree" component={DataThree} />
                     <Route path="/applysuccess" component={ApplySuccess} />
                     <Route path="/message" component={Message} />
                     <Route path="/message1" component={Message1} />
                     <Route path="/message2" component={Message2} />
                     <Route path="/message3" component={Message3} />
                     <Route path="/message4" component={Message4} />
                     <Route path="/message5" component={Message5} />
                     <Route path="/message6" component={Message6} />
                     <Route path="/datatwo" component={DataTwo} />
                     <Route path="/mentorpairing" component={MentorPairing} />
                     <Route path="/mentorpairing2" component={MentorPairing2} />
                     <Route path="/Approve" component={Approve} />
                     <Route path="/DataNet" component={DataNet} />
                     <Route path="/DataEnterprise" component={DataEnterprise} />
                     <Route path="/BusionIdentified" component={BusionIdentified} />
                     <Route path="/EntrepreneurshipBest" component={EntrepreneurshipBest} />
                     <Route path="/FreeSponsorship" component={FreeSponsorship} />
                     <Route path="/EnterprisePrilling" component={EnterprisePrilling} />
                     <Route path="/PersonPrilling" component={PersonPrilling} />
                     <Route path="/EnterprisePrillingMaterial" component={EnterprisePrillingMaterial} />
                     <Route path="/PersonPrillingMeterial" component={PersonPrillingMeterial} />
                     <Route path="/test" component={Test} />
                      {/*路由不正确时，默认跳回home页面*/}
                     <Route render={() => <Redirect to="/" />} />
                  </Switch>
               </App>
            )}
         />
      </Switch>
   </div>
);
 
export default Root;
