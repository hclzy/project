import { Modal,Form, Icon,Row, Col, Tooltip,Input, Label, Button,AutoComplete } from 'antd';
import React from 'react';
import '../less/password.less'
import {Title} from "./Title";

class Password extends React.Component{
    setModal2Visible(modal2Visible) {
        this.props.setVisible(modal2Visible)
    }

    constructor(){
        super()
        this.state = {confirmDirty: false}
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('请输入两次相同的密码');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirmPassword'], { force: true });
        }
        callback();
    }

    render () {
        const FormItem = Form.Item;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 5,},
                sm: { span: 5,},
            },
            wrapperCol: {
                xs: { span: 10, },
                sm: { span: 10,},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 10,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <Modal
                wrapClassName="vertical-center-modal"
                width="560px"
                footer={null}
                visible={this.props.password}
                onOk={() => this.setModal2Visible(`password`,false)}
                onCancel={() => this.setModal2Visible(`password`,false)}
            >
                <div >
                    { Title("登录密码") }
                    <div className="password_content" >
                        <center>
                            <Form onSubmit={this.handleSubmit} className="pwdForm">
                                <FormItem {...formItemLayout} label="旧密码: ">
                                    {getFieldDecorator('srcPassword', {
                                        rules: [{
                                            required: true, message: '请输入您的原密码',
                                        }, {
                                            validator: null,
                                        }],
                                    })(
                                        <Input type="password" placeholder="请输入您的原密码"/>
                                    )}
                                </FormItem>

                                <FormItem {...formItemLayout} label="新密码: ">
                                    {getFieldDecorator('password', {
                                        rules: [{
                                            required: true, message: '请输入您想要设定的新密码',
                                        }, {
                                            validator: this.validateToNextPassword,
                                        }],
                                    })(
                                        <Input type="password"  placeholder="请输入您想要设定的新密码"/>
                                    )}
                                </FormItem>

                                <FormItem {...formItemLayout} label="重复密码: ">
                                    {getFieldDecorator('confirmPassword', {
                                        rules: [{
                                            required: true, message: '请重复一遍您刚才输入的密码',
                                        }, {
                                            validator: this.compareToFirstPassword,
                                        }],
                                    })(
                                        <Input type="password" onBlur={this.handleConfirmBlur} placeholder="请重复一遍您刚才输入的密码"/>
                                    )}
                                </FormItem>
                                <FormItem>
                                    <Button type="primary" htmlType="submit">提交</Button>
                                    <p><a className="findPassword" >登陆密码找回</a></p>
                                </FormItem>
                            </Form>
                        </center>
                    </div>
                </div>
            </Modal>
        )
    }
}

const Password1 = Form.create()(Password);
export default Password1
