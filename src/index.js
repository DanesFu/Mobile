import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import './index.css';
import Root from './router/Routes';
import registerServiceWorker from './registerServiceWorker';
 
const mountNode = document.getElementById('root');
ReactDOM.render(
    <HashRouter>
        <Root />
    </HashRouter>,
    mountNode
);
registerServiceWorker();

