import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom'
import '../less/home.less'


export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    // componentWillMount(){
    //     this.props.history.push('/login')
    // }
    render() {
        return (
            <div>
                <div className="banner">
                    <img src={require('../images/banner1.jpg')} alt=""/>
                </div>
                <div className="row" style={{paddingTop: '20px'}}>
                    <div className="index_main">
                        <div className="lottery clear">
                            <div className="hotLottery">
                                <div className="lottery_title"
                                     style={{background: `url(${require('../images/index_title.png')}) no-repeat 0 -170px`}}>
                                </div>
                                <ul className="lottery_list">
                                    <li>
                                    </li>
                                    <li>
                                    </li>
                                    <li>
                                    </li>
                                </ul>
                            </div>
                            <div className="favoriteLottery">
                                <div className="lottery_title"
                                     style={{background: `url(${require('../images/index_title.png')}) no-repeat 0 -110px`}}>
                                </div>
                                <ul className="lottery_list">
                                    <li>
                                    </li>
                                    <li>
                                    </li>
                                    <li>
                                    </li>
                                    <li>
                                    </li>
                                    <li>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="safe clear">
                            <div className="safeCenter">
                                <div className="safe_title clear">
                                    <div className="fl">
                                        <div className="safe_tit">
                                        </div>
                                    </div>
                                    <div className="fr">
                                        <Link to='/user/safe' className="safe_center">
                                            进入中心
                                        </Link>
                                    </div>
                                </div>
                                <div className="safe_main">
                                    <div className="user_safe">
                                        <span>账号安全性</span>
                                        <div className="safe_slide">
                                        </div>
                                        35%
                                        <a>如何提升安全性</a>
                                    </div>
                                    <ul className="safelist">
                                        <li>
                                            <div className="safe_item">
                                                <img src="" alt=""/>
                                            </div>
                                            <p>未设置</p>
                                            <a>
                                                立即设置
                                            </a>
                                        </li>
                                        <li>
                                            <div className="safe_item">
                                                <img src="" alt=""/>
                                            </div>
                                            <p>未设置</p>
                                            <a>
                                                立即设置
                                            </a>
                                        </li>
                                        <li>
                                            <div className="safe_item">
                                                <img src="" alt=""/>
                                            </div>
                                            <p className="prev">上一次更改时间</p>
                                            <p className="prev">2018/6/1 12:00:00</p>
                                            <a className="prev">
                                                立即设置
                                            </a>
                                        </li>
                                        <li>
                                            <div className="safe_item">
                                                <img src="" alt=""/>
                                            </div>
                                            <p>未设置</p>
                                            <a>
                                                立即设置
                                            </a>
                                        </li>
                                        <li>
                                            <div className="safe_item">
                                                <img src="" alt=""/>
                                            </div>
                                            <p>未设置</p>
                                            <a>
                                                立即设置
                                            </a>
                                        </li>
                                    </ul>
                                    <p>
                                        <span>最后一次登陆IP：138.263.2.245</span>
                                        <span>上次登录时间：2018-05-26 10:00:34</span>
                                    </p>
                                </div>
                            </div>
                            <div className="notice">
                                <div className="notice_title clear">
                                    <div className="fl">
                                        <div className="notice_tit"
                                             style={{background: `url(${require('../images/index_title.png')}) no-repeat`}}>
                                        </div>
                                    </div>
                                    <div className="fr">
                                        <a className="more_notice">
                                            更多公告
                                        </a>
                                    </div>
                                </div>
                                <ul className="notice_list">
                                    <li className="clear">
                                        <div className="fl">
                                            <div className="item_title">
                                                6/02-6/09邮政银行...
                                            </div>
                                            <div className="item_time">
                                                2018/0602 12:45:24
                                            </div>
                                        </div>
                                        <div className="fl">
                                            <div className="item_content">
                                                亲爱的彩民您好，6月2日23：50 至 6月9日00：10， 邮政
                                                银行进行系统维护，此时段内...
                                            </div>
                                            <div className="more_content">
                                                [更多详情]
                                            </div>
                                        </div>
                                    </li>
                                    <li className="clear">
                                        <div className="fl">
                                            <div className="item_title">
                                                6/02-6/09邮政银行...
                                            </div>
                                            <div className="item_time">
                                                2018/0602 12:45:24
                                            </div>
                                        </div>
                                        <div className="fl">
                                            <div className="item_content">
                                                亲爱的彩民您好，6月2日23：50 至 6月9日00：10， 邮政
                                                银行进行系统维护，此时段内...
                                            </div>
                                            <div className="more_content">
                                                [更多详情]
                                            </div>
                                        </div>
                                    </li>
                                    <li className="clear">
                                        <div className="fl">
                                            <div className="item_title">
                                                6/02-6/09邮政银行...
                                            </div>
                                            <div className="item_time">
                                                2018/0602 12:45:24
                                            </div>
                                        </div>
                                        <div className="fl">
                                            <div className="item_content">
                                                亲爱的彩民您好，6月2日23：50 至 6月9日00：10， 邮政
                                                银行进行系统维护，此时段内...
                                            </div>
                                            <div className="more_content">
                                                [更多详情]
                                            </div>
                                        </div>
                                    </li>
                                    <li className="clear">
                                        <div className="fl">
                                            <div className="item_title">
                                                6/02-6/09邮政银行...
                                            </div>
                                            <div className="item_time">
                                                2018/0602 12:45:24
                                            </div>
                                        </div>
                                        <div className="fl">
                                            <div className="item_content">
                                                亲爱的彩民您好，6月2日23：50 至 6月9日00：10， 邮政
                                                银行进行系统维护，此时段内...
                                            </div>
                                            <div className="more_content">
                                                [更多详情]
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
