import React, { Component } from 'react'
import Date from '../../components/Date'
import EchartsTest from "../../components/Chart";

export default class Overview extends Component{
    render () {
        return (
            <div>
                <div className="agent_title">
                    团队总览
                </div>
                <div className="overview_top clear">
                    <div className="fl">
                        <div className="a_box">
                            <div className="fl icon_money">
                            </div>
                            <div className="fl text">
                                团队余额：
                                <span>1000.36 元</span>
                            </div>
                        </div>
                    </div>
                    <div className="fl">
                        <div className="a_box">
                            <div className="fl icon_people">
                            </div>
                            <div className="fl text">
                                团队人数：
                                <span>1000.36 元</span>
                            </div>
                        </div>
                    </div>
                    <div className="fl">
                        <div className="a_box">
                            <div className="fl icon_next">
                            </div>
                            <div className="fl text">
                                直属下级：
                                <span>1000.36 元</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overview_body">
                    <Date location={this.props.location}/>
                    <div className="overview_item">
                        <div className="item_title">
                            活跃人数
                        </div>
                        <div className="item_list clear">
                            <div className="fl">
                                <div className="item_box">
                                    <div className="fl item_icon">

                                    </div>
                                    <div className="fl item_text">
                                        <p>在线人数</p>
                                        <span>1人</span>
                                    </div>
                                </div>
                            </div>
                            <div className="fl">
                                <div className="item_box">
                                    <div className="fl item_icon">

                                    </div>
                                    <div className="fl item_text">
                                        <p>投注人数</p>
                                        <span>1人</span>
                                    </div>
                                </div>
                            </div>
                            <div className="fl">
                                <div className="item_box">
                                    <div className="fl item_icon">

                                    </div>
                                    <div className="fl item_text">
                                        <p>注册人数</p>
                                        <span>1人</span>
                                    </div>
                                </div>
                            </div>
                            <div className="fl">
                                <div className="item_box">
                                    <div className="fl item_icon">

                                    </div>
                                    <div className="fl item_text">
                                        <p>30天未登录人数</p>
                                        <span>1人</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overview_item">
                        <div className="item_title">
                            数据统计
                        </div>
                        <div className="item_list clear">
                            <div className="fl">
                                <div className="item_box">
                                    <div className="fl item_icon">

                                    </div>
                                    <div className="fl item_text">
                                        <p>充值</p>
                                        <span>0.00元</span>
                                    </div>
                                </div>
                            </div>
                            <div className="fl">
                                <div className="item_box">
                                    <div className="fl item_icon">

                                    </div>
                                    <div className="fl item_text">
                                        <p>提现</p>
                                        <span>0.00元</span>
                                    </div>
                                </div>
                            </div>
                            <div className="fl">
                                <div className="item_box">
                                    <div className="fl item_icon">

                                    </div>
                                    <div className="fl item_text">
                                        <p>投注</p>
                                        <span>0.00元</span>
                                    </div>
                                </div>
                            </div>
                            <div className="fl">
                                <div className="item_box">
                                    <div className="fl item_icon">

                                    </div>
                                    <div className="fl item_text">
                                        <p>派奖</p>
                                        <span>0.00元</span>
                                    </div>
                                </div>
                            </div>
                            <div className="fl">
                                <div className="item_box">
                                    <div className="fl item_icon">

                                    </div>
                                    <div className="fl item_text">
                                        <p>返点</p>
                                        <span>0.00元</span>
                                    </div>
                                </div>
                            </div>
                            <div className="fl">
                                <div className="item_box">
                                    <div className="fl item_icon">

                                    </div>
                                    <div className="fl item_text">
                                        <p>分红</p>
                                        <span>0.00元</span>
                                    </div>
                                </div>
                            </div>
                            <div className="fl">
                                <div className="item_box">
                                    <div className="fl item_icon">

                                    </div>
                                    <div className="fl item_text">
                                        <p>活动</p>
                                        <span>0.00元</span>
                                    </div>
                                </div>
                            </div>
                            <div className="fl">
                                <div className="item_box">
                                    <div className="fl item_icon">

                                    </div>
                                    <div className="fl item_text">
                                        <p>盈亏</p>
                                        <span>0.00元</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overview_item">
                        <EchartsTest />
                    </div>
                </div>
            </div>
        )
    }
}
