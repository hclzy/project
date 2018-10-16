import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import RouterSwitch from "./router";
import Login from "./pages/login";
import Register from "./pages/register";

const App = () => (
    <Router>
        <LocaleProvider locale={zh_CN}>
            <div>
                <Route path="/" component={RouterSwitch} />
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
            </div>
        </LocaleProvider>
    </Router>
)

export default App
