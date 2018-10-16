import React from 'react';
// 引入Antd组件
import { Menu, Icon } from 'antd';
// import axios from 'axios'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const windowObj = window.sessionStorage;
// let LoginOrLogout = "";

export  default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current:document.cookie.split(";")[0].split("=")[1]
        }
    }
    changeCookie = (v) => {
        document.cookie = "nowKey=" + v;
    }
    handleClick = (e) => {
        this.setState({ current: e.key });
        this.changeCookie(e.key);
        if(e.key == "home"){
            this.props.history.push('/');
        }else if(e.key == 'list'){
            this.props.history.push('list');
        }else if(e.key == 'report'){
            this.props.history.push('report');
        }else if(e.key == 'safeCenter'){
            this.props.history.push('/user/safe');
        }else if(e.key == 'bankManage'){
            this.props.history.push('/user/bank');
        }else if(e.key == 'ownData'){
            this.props.history.push('/user/data');
        }else if(e.key == 'fundsDetail'){
            this.props.history.push('/user/bonus');
        } else if(e.key == 'loginBtn'){
            this.props.history.push('/login');
        }else if(e.key == 'Promotions'){
            this.props.history.push('promotions');
        }else if(e.key == 'regUser'){
            this.props.history.push('/agent/register');
        }else if(e.key == 'nodeRecord'){
            this.props.history.push('/user/note');
        }else if(e.key == 'accountDetail'){
            this.props.history.push('/user/detail');
        }else if(e.key == 'rechargeRecord'){
            this.props.history.push('/user/recharge');
        }else if(e.key == 'WithdrawalRecord'){
            this.props.history.push('/user/withdraw');
        }else if(e.key == 'teamOverview'){
            this.props.history.push('/agent/overview');
        }else if(e.key == 'teamProfit'){
            this.props.history.push('/agent/money');
        }else if(e.key == 'teamBetting'){
            this.props.history.push('/agent/lot');
        }else if(e.key == 'teamAccountChange'){
            this.props.history.push('/agent/detail');
        }else if(e.key == 'quitBtn'){
            windowObj.setItem('username','')
            // axios.post('http://10.10.144.32:8188/platform/logout',{
            //     account: usernameCookie,
            //     platform: 1001
            // }).then(res=>{
            //         console.log(res);
            //     }).catch(err=>{
            //     console.log(err);
            // })
            this.props.history.push('/');
            // if(oWindow.getItem("username")){
            //     LoginOrLogout = "退出";
            //     console.log('============ ' + oWindow.getItem("username"))
            // }else {
            //     LoginOrLogout = "登陆";
            //     windowObj.setItem("username",'');
            //     console.log('============ ' + oWindow.getItem("username"))
            // }

        }else if(e.key == "register"){
            this.props.history.push('/register');
        }
    }
    setVisible(aa,bb) {
        this.props.setVisible(aa,bb)
    }
    componentWillMount () {
        this.usernameCookie = windowObj.getItem("username");
         if(!this.usernameCookie){
             this.props.history.push('/login')
         }
    }
    componentDidMount() {
        var now = window.location.pathname.substring(1);
        now = now === '' ? 'home' : now;
        this.changeCookie(now);
        this.setState({ current: now });
        // if(!usernameCookie){
        //     LoginOrLogout = "登陆";
        // }else {
        //     LoginOrLogout = "退出";
        // }
    }
    render() {
        const usernameCookie = this.usernameCookie;
        return (
            <div className="leftMenu">
                <div className="main_top">
                    <div className="row">
                        <div className="allGame">
                            全部游戏
                        </div>
                        <Menu
                            onClick={this.handleClick}
                            theme="light"
                            mode="horizontal"
                            selectedKeys={[this.state.current]}
                        >
                            {
                                usernameCookie?
                                    <Menu.Item key="user"><Icon type="user" />{usernameCookie || 'test'}</Menu.Item>:
                                    null
                            }
                            {
                                usernameCookie?
                                    <Menu.Item key="quitBtn"><Icon type="poweroff" />退出</Menu.Item> :
                                    <Menu.Item key="loginBtn">登录</Menu.Item>
                            }
                            {
                                usernameCookie? null:
                                    <Menu.Item key="register">注册</Menu.Item>
                            }

                            <SubMenu key="customerCenter" title={<span><span>用户中心</span></span>}>
                                <MenuItemGroup key="betRecord" title="投注记录">
                                    <Menu.Item key="nodeRecord">注单记录</Menu.Item>
                                    <Menu.Item key="addNumRecord">追号记录</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup key="fundDetail" title="资金明细">
                                    <Menu.Item key="accountDetail">账变明细</Menu.Item>
                                    <Menu.Item key="rechargeRecord">充值记录</Menu.Item>
                                    <Menu.Item key="WithdrawalRecord">提款记录</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup key="accoutnManage" title="账号管理">
                                    <Menu.Item key="safeCenter">安全中心</Menu.Item>
                                    <Menu.Item key="bankManage">银行卡管理</Menu.Item>
                                    <Menu.Item key="ownData">个人资料</Menu.Item>
                                    <Menu.Item key="fundsDetail">奖金详情</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup key="stationLetter" title="站内信">
                                    <Menu.Item key="sysNotice">系统通知</Menu.Item>
                                    <Menu.Item key="UDCommunication">上下级通信</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <SubMenu key="dlCenter" title={<span><span>代理中心</span></span>}>
                                <MenuItemGroup key="teamManagement" title="团队管理">
                                    <Menu.Item key="regUser">注册下级</Menu.Item>
                                    <Menu.Item key="urlReg">链接开户</Menu.Item>
                                    <Menu.Item key="DList">下级列表</Menu.Item>
                                    <Menu.Item key="Turn11">转账下级</Menu.Item>
                                    <Menu.Item key="UD11">上下级通信</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup key="teamReport" title="团队报表">
                                    <Menu.Item key="teamOverview">团队总览</Menu.Item>
                                    <Menu.Item key="teamProfit">团队盈亏</Menu.Item>
                                    <Menu.Item key="teamBetting">团队投注</Menu.Item>
                                    <Menu.Item key="teamAccountChange">团队账变</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <Menu.Item key="balance">余额：0.001</Menu.Item>

                            <Menu.Item key="rechage" style={{padding:'0 10px'}}><div className="recharge" onClick={() => this.setVisible(`recharge`,true)}>充值</div></Menu.Item>
                            <Menu.Item key="Withdrawal" style={{padding:'0 10px'}}><div className="withdraw" onClick={() => this.setVisible(`withdraw`,true)}>提款</div></Menu.Item>
                            <Menu.Item key="cusSerOnline">
                                <div className="kefu">
                                    <div className="hour">24</div>
                                    <div className="hours">HOURS</div>
                                </div>
                                <div className="kefu_text">
                                    在线客服
                                </div>
                            </Menu.Item>
                            <Menu.Item key="helpCenter"><Icon type="user" />帮助中心</Menu.Item>
                        </Menu>
                    </div>
                </div>
                <div className="main_nav">
                    <div className="row clear">
                        <div className="logo_index">
                            <img src={require('../images/logo_index.png')} alt=""/>
                        </div>
                        <Menu
                            onClick={this.handleClick}
                            theme="light"
                            mode="horizontal"
                            selectedKeys={[this.state.current]}
                        >
                            <Menu.Item key="home">
                                <div className="nav_item">
                                    <div className="item_chn">首页</div>
                                    <div className="item_eng">HOME</div>
                                </div>
                            </Menu.Item>
                            <SubMenu key="lotteryList" title={<div className="nav_item">
                                <div className="item_chn">彩种列表</div>
                                <div className="item_eng">LOTTERY</div>
                            </div>}>
                                <Menu.Item key="cqssc">重庆时时彩</Menu.Item>
                                <Menu.Item key="tjssc">天津时时彩</Menu.Item>
                            </SubMenu>
                            <SubMenu key="downloadCenter" title={<div className="nav_item">
                                <div className="item_chn">下载中心</div>
                                <div className="item_eng">DOWNLOAD</div>
                            </div>}>
                                <Menu.Item key="download1">下载地址1</Menu.Item>
                                <Menu.Item key="download2">下载地址2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="Promotions">
                                <div className="nav_item">
                                    <div className="item_chn">优惠活动</div>
                                    <div className="item_eng">PROMOTION</div>
                                </div>
                            </Menu.Item>
                            <Menu.Item key="PlatformInfo" >
                                <div onClick={() => this.setVisible(`modalVisible`,true)} className="nav_item">
                                    <div className="item_chn" >平台公告</div>
                                    <div className="item_eng">ANNOUNCE</div>
                                </div>
                            </Menu.Item>
                            {/*<Menu.Item key="PlatformInfo">平台公告</Menu.Item>*/}
                        </Menu>
                    </div>
                </div>

            </div>
        )
    }
}

