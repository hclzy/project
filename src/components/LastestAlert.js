import { Modal, Pagination } from 'antd'
import React from 'react';
import {Title} from "./Title";
import axios from 'axios'

export default class Announcement extends React.Component {
    setVisible(modalVisible) {
        this.props.setVisible(modalVisible)
    }
    componentDidMount () {

    }
    render () {
        return (
            <Modal
                wrapClassName="vertical-center-modal"
                width="530px"
                footer={null}
                visible={this.props.lastestalert}
                onOk={() => this.setVisible(`lastestalert`,false)}
                onCancel={() => this.setVisible(`lastestalert`,false)}
            >
                <div className="lastest_container">
                    { Title() }
                    <div className="lastest_body">
                        <div className="lastest_title">
                            账号安全相关提醒
                            <div className="lastest_time">
                                2018/7/21 08:04:11
                            </div>
                        </div>
                        <div className="lastest_context">
                            亲爱的彩民您好 :<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近日平台接获通报有不明人士冒用平台客服人员，并透过或微信等方式向平台会员索取个人资料,上分截图或是要求重新注册。再次提醒平台用户，现阶段仅提供24小时线上客服系统的谘询服务，并无QQ、微信等其他方式的客服联系渠道另外...
                            <span>[查看详情]</span>
                        </div>
                        <div className="lastest_btn">
                            <button onClick={()=>this.setVisible(`lastestalert`,false)}>关闭</button>
                        </div>
                        <div className="close_text">*按ESC键可快速关闭弹窗公告通知</div>
                    </div>

                </div>


            </Modal>
        )
    }
}
