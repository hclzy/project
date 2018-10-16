import { Modal, Pagination } from 'antd'
import React from 'react';

export default class Announcement extends React.Component{
    setVisible(modalVisible) {
        this.props.setVisible(modalVisible)
    }
    componentDidMount () {
    }
    render () {
        return (
            <Modal
                wrapClassName="vertical-center-modal"
                width="960px"
                footer={null}
                visible={this.props.modalVisible}
                onOk={() => this.setVisible(`modalVisible`,false)}
                onCancel={() => this.setVisible(`modalVisible`,false)}
            >
                <div className="announcement_title">
                    <span className="announcement_chn">平台公告</span>
                    <span className="announcement_eng">&nbsp;&nbsp;Announcement</span>
                </div>
                <div className="announcement_main clear">
                    <div className="announcement_left">
                        <div className="main_top clear">
                            <div >
                                公告标题
                            </div>
                            <div>
                                发布日期
                            </div>
                        </div>
                        <div className="main_list">
                            <div className={`main_item clear`}>
                                <div>
                                    账号安全相关提醒
                                </div>
                                <div>
                                    2018-02-21 09:04:10
                                </div>
                            </div>
                        </div>
                        <div className="main_footer">
                            <Pagination size="big" total={10} />
                        </div>
                    </div>
                    <div className="announcement_right">
                        <div className="item_title">
                            账户安全相关提醒
                        </div>
                        <div className="item_content">
                            亲爱的用户您好：<br/><br/>
                            近日平台接获通报有不明人士冒用平台客服人员，并透过或微信等方式向平台会员索取个人资料,上分截图或是要求重新注册。再次提醒平台用户，现阶段仅提供24小时线上客服系统的谘询服务，并无QQ、微信等其他方式的客服联系渠道另外若联系线上客服时欢迎语没有出现娱乐平台名称，就可能不是平台官方客服人员，还请大家多多留意避免自身全权益受损。
                            <p><br/><br/>南山娱乐平台<br/>
                                2018/2/21   08:04:10</p>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}
