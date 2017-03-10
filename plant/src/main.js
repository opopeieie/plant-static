import 'babel-polyfill';
import './styles/foundation.css';//TODO:由webpack构建
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Router,browserHistory,hashHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './redux/store/configureStore'
import routes from './routes'

const store = configureStore();
const history = syncHistoryWithStore(hashHistory,store);

const APPDOM = document.getElementById("app");

ReactDom.render(
    <Provider store={store}>
        <Router history={history} children={routes} />
    </Provider>,
    APPDOM
);



