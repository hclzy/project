import React from 'react'
import { Switch } from 'antd';

export default class safe extends React.Component{
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <div className="user_title">
                    安全中心
                </div>
                <div>
                    <div className="safe_top">
                        <div className="safe_user">
                            <span>账号安全性</span>
                            <div className="safe_slide">
                            </div>
                            35%
                            <a >账号安全性提升方式说明</a>
                        </div>
                        <div className="safe_other">
                            <span>最后一次登陆IP：138.263.2.245</span>
                            <span>上次登录时间：2018-05-26 10:00:34</span>
                            <div className="switch">
                                <span className="txt">异地登录验证</span>
                                <Switch size="small" defaultChecked />
                            </div>
                        </div>
                    </div>
                    <div className="safe_body">
                        <div className="clear">
                            <div className="safe_icon fl">
                            </div>
                            <div className="safe_text fl">
                                <div className="password">
                                    登录密码
                                </div>
                                <div className="time">
                                    最近更改时间：2018/5/16  13:00:12
                                </div>
                            </div>
                            <div className="change fr">
                                修改
                            </div>
                        </div>
                        <div className="clear">
                            <div className="safe_icon fl">
                            </div>
                            <div className="safe_text fl">
                                <div className="password">
                                    资金密码
                                </div>
                                <div className="time">
                                    最近更改时间：2018/5/16  13:00:12
                                </div>
                            </div>
                            <div className="change fr">
                                修改
                            </div>
                        </div>
                        <div className="clear">
                            <div className="safe_icon fl">
                            </div>
                            <div className="safe_text fl">
                                <div className="password">
                                    密保问题
                                </div>
                                <div className="time">
                                    最近更改时间：2018/5/16  13:00:12
                                </div>
                            </div>
                            <div className="change fr">
                                修改
                            </div>
                        </div>
                        <div className="clear">
                            <div className="safe_icon fl">
                            </div>
                            <div className="safe_text fl">
                                <div className="password">
                                    绑定手机
                                </div>
                                <div className="time">
                                    最近更改时间：2018/5/16  13:00:12
                                </div>
                            </div>
                            <div className="change fr">
                                修改
                            </div>
                        </div>
                        <div className="clear">
                            <div className="safe_icon fl">
                            </div>
                            <div className="safe_text fl">
                                <div className="password">
                                    绑定邮箱
                                </div>
                                <div className="time">
                                    最近更改时间：2018/5/16  13:00:12
                                </div>
                            </div>
                            <div className="change fr">
                                修改
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
