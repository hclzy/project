
import React from 'react'
import { Form, Input, Button, notification} from 'antd'
// import { browserHistory } from 'react-router'

import '../less/login.less'
import axios from "axios/index";

const FormItem = Form.Item;


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        let _this = this;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                window.sessionStorage.setItem("username",values.username);
                document.cookie = "username=" + values.username;
                _this.props.history.push('/');
                // axios.post('http://10.10.144.32:8188/platform/login',{
                //     account: values.username,
                //     password: values.password,
                //     platform: 1001
                // }).then(function(res){
                //     if(res.data.code == 200){
                //         window.sessionStorage.setItem("username",values.username);
                //         document.cookie = "username=" + values.username;
                //         _this.props.history.push('/');
                //     }else {
                //         _this.openNotificationWithIcon('info');
                //     }
                // }).catch(function(error){
                //     console.log(error);
                // });
            }else return
        });
    }

    // 返回一个弹框对象，提示用户名和密码
    openNotificationWithIcon(type) {
        return notification[type]({
            message: '用户名&密码',
            description: '帐号或密码错误',
            duration: 6
        })
    }

    componentDidMount() {
        console.log(this.props)
        // this.openNotificationWithIcon('info');
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="loginpagewrap">
                <div className="topbar clear">
                    <div className="row">
                        <div className="fl">
                            <img onClick={()=>this.props.history.push('/')} className="top_logo" src={require('../images/logo-top.png')} alt=""/>
                        </div>
                        <div className="fr">
                            <div className="top_link">
                                <span>下载中心</span>
                            </div>
                            <div className="top_link">
                                <span>线路切换</span>
                            </div>
                            <div className="top_link" style={{borderRight: '1px dotted #ffffff'}}>
                                <span>联系客服</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="context">
                    <div className="row">
                        <div>
                            <div className="login_logo">
                                <img src={require('../images/logo-big.png')} alt=""/>
                            </div>
                            <div className="loginWrap">
                                <Form onSubmit={e=>this.handleSubmit(e)}>
                                    <FormItem>
                                        {getFieldDecorator('username', {
                                            rules: [{ required: true, message: '请输入用户名!' }],
                                        })(
                                            <Input placeholder="请输入用户名" />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: '请输入密码!' }],
                                        })(
                                            <Input type="password" placeholder="请输入密码" />
                                        )}
                                    </FormItem>
                                    <Button type="primary" htmlType="submit" className="loginBtn">立即登录</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="row clear">
                        <div className="fl">
                            <div className="footer_txt clear">
                                <div className="footer_link">品牌介绍</div>
                                <div className="footer_link">联系我们</div>
                                <div className="footer_link">帮助中心</div>
                                <div className="footer_link">防劫持教程</div>
                            </div>
                            <div className="footer_txt">
                                <span>推荐使用浏览器</span>
                            </div>
                            <div className="footer_txt">
                                @2018 南山娱乐平台版权所有 菲律宾政府PAGCOR博彩牌照认证
                            </div>
                        </div>
                        <div className="fr">
                            <div style={{textAlign:'right'}}>
                                权威认证资质
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

let Login = Form.create()(LoginPage);
export default Login;

