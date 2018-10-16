import React from 'react'
import { Route, Link } from 'react-router-dom'
import '../less/agent.less'
import Aregister from "./agent/register";
import Overview from "./agent/overview";
import Tab from "../components/Tab";



export default class Agent extends React.Component {
    handleClick(e) {
        console.log(e.target.innerText)
        if(e.target.nodeName === 'DIV') return;
        window.sessionStorage.setItem("routername",e.target.innerText);
        this.setState({
            selected: e.target.getAttribute("data-tag")
        })
        this.props.history.push({
            pathname: '/agent/' + e.target.getAttribute("data-tag"),
            params:{
                title:e.target.innerText
            }
        })
    }
    render () {
        const selected = this.props.location.pathname;
        return (
            <div className="agent">
                <div className="row clear">
                    <div className="agent_nav fl">
                        <div className="agent_top">
                            代理中心
                        </div>
                        <div className="agent_nav_list" onClick={e=>this.handleClick(e)}>
                            <ul>
                                <div>团队报表</div>
                                <li data-tag="overview" className={`${selected.indexOf('overview')>-1 ? 'selected':null}`}>团队总览</li>
                                <li data-tag="money" className={`${selected.indexOf('money')>-1 ? 'selected':null}`}>团队盈亏</li>
                                <li data-tag="lot" className={`${selected.indexOf('lot')>-1 ? 'selected':null}`}>团队投注</li>
                                <li data-tag="detail" className={`${selected.indexOf('detail')>-1 ? 'selected':null}`}>团队账变</li>
                            </ul>
                            <ul>
                                <div>团队管理</div>
                                <li data-tag="register" className={`${selected.indexOf('register')>-1? 'selected':null}`}>注册下级</li>
                                <li data-tag="link" className={`${selected.indexOf('link')>-1? 'selected':null}`}>链接开户</li>
                                <li data-tag="list" className={`${selected.indexOf('list')>-1 ? 'selected':null}`}>下级列表</li>
                                <li data-tag="transfer" className={`${selected.indexOf('transfer')>-1 ? 'selected':null}`}>转账下级</li>
                                <li data-tag="bonus" className={`${selected.indexOf('bonus')>-1 ? 'selected':null}`}>上下级通信</li>
                            </ul>
                        </div>
                    </div>
                    <div className="agent_content fl">
                        <Route exact path="/agent/overview" component={Overview}/>
                        <Route path="/agent/register" component={Aregister}/>
                        <Route path="/agent/money" component={Tab}/>
                        <Route path="/agent/lot" component={Tab}/>
                        <Route path="/agent/detail" component={Tab}/>
                        <Route path="/agent/list" component={Tab}/>
                    </div>
                </div>
            </div>
        )
    }
}
