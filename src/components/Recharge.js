import { Modal, Button } from 'antd'
import React from 'react';
import {Title} from "./Title";

export default class Recharge extends React.Component{
    constructor() {
        super();
        this.state={
            defSelect: 'bank'
        }
    }
    handleClick(a) {
        this.setState({
            defSelect: a
        })
    }
    setVisible(modalVisible) {
        this.props.setVisible(modalVisible)
    }
    componentDidMount() {
    }
    render () {
        return (
            <Modal
                wrapClassName="vertical-center-modal"
                width="960px"
                footer={null}
                visible={this.props.recharge}
                onOk={() => this.setVisible(`recharge`,false)}
                onCancel={() => this.setVisible(`recharge`,false)}
            >
                { Title("充值中心","Recharge") }
                <div className="recharge_content">
                    <div className="recharge_top">
                        <div className="payList">
                            <Button type="primary" onClick={()=>this.handleClick('bank')} className={this.state.defSelect == 'bank'? 'selected': null}>
                                网银汇款
                            </Button>
                            <Button type="primary" onClick={()=>this.handleClick('wechat')} className={this.state.defSelect == 'wechat'? 'selected': null}>
                                微信充值
                            </Button>
                            <Button type="primary" onClick={()=>this.handleClick('alipay')} className={this.state.defSelect == 'alipay'? 'selected': null}>
                                支付宝充值
                            </Button>
                            <div>
                                充值处理时间为7x24小时
                            </div>
                        </div>
                        <div className="step">
                            <div className="nowStep">
                                1.填写充值金额
                            </div>
                            <div>
                                2.获取平台收款信息
                            </div>
                            <div>
                                3.登录网银付款
                            </div>
                        </div>
                    </div>
                    <div className="recharge_body">
                        <div className="banktype">
                            <span>银行类型:</span>
                            <select >
                                <option value ="bank">中国农业银行</option>
                            </select>
                        </div>
                        <div className="paymoney">
                            <span>充值金额:</span>
                            <input type="text" placeholder="请输入充值金额"/>
                            <p>
                                单笔充值限额：最低 <span>50</span>元，最高 <span>40000</span>元
                            </p>
                            <Button type="primary">
                                下一步
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}
