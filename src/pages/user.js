import React from 'react'
import { Route, Link } from 'react-router-dom'
import Safe from './user/safe'
import Bank from './user/bank'
import Data from './user/data'
import Bonus from './user/bonus'
import Tab from '../components/Tab'
import '../less/user.less'

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'safe'
        }
    }
    handleClick=(e) =>{
        if(e.target.nodeName === 'DIV') return;
        window.sessionStorage.setItem("routername",e.target.innerText);
        this.setState({
            selected: e.target.getAttribute("data-tag")
        })
        this.props.history.push({
            pathname: '/user/' + e.target.getAttribute("data-tag"),
            params:{
                title:e.target.innerText
            }
        })
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        const selected = this.props.location.pathname;
        return (
            <div className="user">
                <div className="row clear">
                    <div className="user_nav fl">
                        <div className="user_top">
                            用户中心
                        </div>
                        <div className="user_nav_list" onClick={e=>this.handleClick(e)}>
                            <ul>
                                <div>投注记录</div>
                                <li data-tag="note" className={`${selected.indexOf('note')>-1 ? 'selected':null}`}>注单记录</li>
                                <li>追号记录</li>
                            </ul>
                            <ul>
                                <div>资金明细</div>
                                <li data-tag="detail" className={`${selected.indexOf('detail')>-1  ? 'selected':null}`}>账变明细</li>
                                <li data-tag="recharge" className={`${selected.indexOf('recharge')>-1 ? 'selected':null}`}>充值记录</li>
                                <li data-tag="withdraw" className={`${selected.indexOf('withdraw')>-1? 'selected':null}`}>提款记录</li>
                            </ul>
                            <ul>
                                <div>账号管理</div>
                                <li data-tag="safe" className={`${selected.indexOf('safe')>-1? 'selected':null}`}>安全中心</li>
                                <li data-tag="bank" className={`${selected.indexOf('bank')>-1? 'selected':null}`}>银行卡管理</li>
                                <li data-tag="data" className={`${selected.indexOf('data')>-1 ? 'selected':null}`}>个人资料</li>
                                <li data-tag="bonus" className={`${selected.indexOf('bonus')>-1 ? 'selected':null}`}>奖金详情</li>
                            </ul>
                            <ul>
                                <div>站内信</div>
                                <li>系统通知</li>
                                <li>上下级通信</li>
                            </ul>
                        </div>
                    </div>
                    <div className="user_content fl">
                        {/*{this.state.selected == 'safe' && <Safe />}*/}
                        {/*{this.state.selected == 'bank' && <Bank />}*/}
                        {/*{this.state.selected == 'detail' && <Tab title="账变记录"/>}*/}
                        {/*{this.state.selected == 'withdraw' && <Tab title="提款记录"/>}*/}
                        {/*{this.state.selected == 'recharge' && <Tab title="充值记录"/>}*/}
                        {/*{this.state.selected == 'note' && <Tab title="注单记录"/>}*/}
                        {/*{this.state.selected == 'data' && <Data title="个人资料"/>}*/}
                        {/*{this.state.selected == 'bonus' && <Bonus title="奖金详情"/>}*/}
                        <Route exact path="/user/safe" component={Safe}/>
                        <Route path="/user/bank" component={Bank}/>
                        <Route path="/user/data" component={Data}/>
                        <Route path="/user/detail" component={Tab}/>
                        <Route path="/user/withdraw" component={Tab}/>
                        <Route path="/user/recharge" component={Tab}/>
                        <Route path="/user/note" component={Tab}/>
                        <Route path="/user/bonus" component={Bonus}/>
                    </div>
                </div>
            </div>
        )
    }
}
