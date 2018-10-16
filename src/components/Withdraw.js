import { Modal,Form, Icon, Input, Label, Button } from 'antd';
import React from 'react';
import {Title} from "./Title";

class Withdraw extends React.Component{
    constructor(props) {
        super(props)
    }
    setVisible(modalVisible) {
        this.props.setVisible(modalVisible)
    }
    submit () {

    }
    render () {
        const { getFieldDecorator } = this.props.form;
        const FormItem = Form.Item;
        return (
            <Modal
                wrapClassName="vertical-center-modal"
                width="960px"
                footer={null}
                visible={this.props.withdraw}
                onOk={() => this.setVisible(`withdraw`,false)}
                onCancel={() => this.setVisible(`withdraw`,false)}
            >
                <div>
                    { Title("提现") }
                    <div className="withdraw_content">
                        <div className="withdraw_header" >
                            <h2><font color="aqua">提款须知</font></h2>
                            <p className="withdraw_title">
                                1.单笔提款金额范围[&nbsp;&nbsp;
                                <font color="red">100 - 100000</font>
                                &nbsp;&nbsp;]
                            </p>
                            <p>2.每日最多提款次数&nbsp;&nbsp;<font color="red">10</font>&nbsp;&nbsp;次,您已提款&nbsp;&nbsp;<font color="aqua">0</font>&nbsp;&nbsp;次</p>
                        </div>
                        <div className="withdraw_body" >
                            <Form onSubmit={this.submit.bind(this)} >
                                <FormItem label="收款银行卡:" className="bankAcc">
                                    {getFieldDecorator('bankAcc', {
                                        rules: [{required: true, message: '请选择银行卡...'}],
                                    })(
                                        <div>
                                            <select>
                                                <option value="11">1111 2222 3333 4444 5555</option>
                                                <option value="22">6666 7777 8888 9999 1111</option>
                                            </select>
                                        </div>
                                    )}
                                </FormItem>
                                <FormItem label="可提款金额:" className="allWithdrawAmt">
                                    {getFieldDecorator('allWithdrawAmt',
                                        { initialValue: 0.00 },
                                        {
                                            rules: [{required: true}],
                                        })(
                                        <div className="allWithdrawmoney">
                                            0.00
                                        </div>
                                    )}
                                </FormItem>
                                <FormItem label="提款金额:" className="WithdrawAmt">
                                    {getFieldDecorator('WithdrawAmt', {
                                        rules: [{required: true, message: '请输入提款金额'}],
                                    })(
                                        <Input  placeholder="请输入提款金额"/>
                                    )}
                                </FormItem>
                                <FormItem label="资金密码:" className="fundPassword">
                                    {getFieldDecorator('fundPassword', {
                                        rules: [{required: true, message: '请输入资金密码'}],
                                    })(
                                        <Input placeholder="请输入资金密码"/>
                                    )}
                                </FormItem>
                                <FormItem wrapperCol={{ span: 12, offset: 5 }}>
                                    <Button type="primary" htmlType="submit">
                                        申请提现
                                    </Button>
                                </FormItem>
                            </Form>

                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}
const Withdraw1 = Form.create()(Withdraw);
export default Withdraw1
