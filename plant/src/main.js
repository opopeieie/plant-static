import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import store,{history} from 'redux/store';
import routes from './routes'


const APPDOM = document.getElementById("app");

ReactDom.render(
    <Provider store={store}>
        <Router history={history} children={routes} />
    </Provider>,
    APPDOM
);



