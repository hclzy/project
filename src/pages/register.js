import React from 'react'
import { Form, Input, Button, notification} from 'antd'
import { Link } from 'react-router-dom'
import axios from 'axios'

import '../less/login.less'

const FormItem = Form.Item;

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post('http://10.10.144.32:8188/platform/register',{
                    account: values.username,
                    password: values.password,
                    platform: 1001
                }).then(res=>{
                    console.log(res);
                    if(res.data.code == 200){
                        window.sessionStorage.setItem("username",values.username);
                        document.cookie = "username=" + values.username;
                        this.props.history.push('/login')
                    }else {
                        this.setState({
                            msg: res.data.msg
                        });
                        this.openNotificationWithIcon('info');
                    }
                }).catch(err=>{
                    console.log(err)
                })
            }
        });
    }

    // 返回一个弹框对象，提示用户名和密码
    openNotificationWithIcon(type) {
        return notification[type]({
            message: this.state.msg,
        })
    }

    componentDidMount() {
        // this.openNotificationWithIcon('info');
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="loginpagewrap">
                <div className="topbar clear">
                    <div className="row">
                        <div className="fl">
                            <img onClick={()=>this.props.history.push('/')}  className="top_logo" src={require('../images/logo-top.png')} alt=""/>
                        </div>
                        <div className="fr">
                            <div className="top_link">
                                <span>手机客户端</span>
                            </div>
                            <div className="top_link" style={{borderRight: '1px dotted #ffffff'}}>
                                <span>PC客户端</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="register_context">
                    <div className="row">
                        <div>
                            <div className="register_title">
                                <span>注册南山娱乐</span>
                            </div>
                            <div className="register_input">
                                <div className="loginWrap">
                                    <Form onSubmit={e=>this.handleSubmit(e)}>
                                        <FormItem>
                                            {getFieldDecorator('username', {
                                                rules: [{ required: true, message: '请输入用户名!' }],
                                            })(
                                                <div className="register_input_box">
                                                    <span>用户名</span>
                                                    <Input placeholder="6-16位字符，可使用字母或数字" />
                                                </div>
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: '请输入密码!' }],
                                            })(
                                                <div className="register_input_box">
                                                    <span>密码</span>
                                                    <Input type="password" placeholder="6-16位字符，可使用字母或数字" />
                                                </div>
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            {getFieldDecorator('password1', {
                                                rules: [{ required: true, message: '请确认密码!' }],
                                            })(
                                                <div className="register_input_box">
                                                    <span>确认密码</span>
                                                    <Input type="password" placeholder="请再次输入密码" />
                                                </div>
                                            )}
                                        </FormItem>
                                        <Button type="primary" htmlType="submit" className="loginBtn">立即注册</Button>
                                    </Form>
                                </div>
                                <Link to="/login">已有账号点击这里登录</Link>
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

let Register = Form.create()(RegisterPage);
export default Register;

