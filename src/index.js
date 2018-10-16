import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducers'
import {
    BrowserRouter ,
    Route,
    Switch
} from 'react-router-dom'
import { LocaleProvider } from 'antd';
import './index.css';
import RouterSwitch from "./router";
import Login from "./pages/login";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import Register from "./pages/register";

const store = createStore(reducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension():()=>{}
))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <LocaleProvider locale={zh_CN}>

                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route component={RouterSwitch} />
                </Switch>
            </LocaleProvider>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();
