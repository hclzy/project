import React from "react";
import {
    Switch,
    Route,
} from 'react-router-dom'
import { connect } from 'react-redux'
import Home from "../pages/home";
import Announcement from '../components/Announcement'
import Recharge from '../components/Recharge'
import Lastestalert from '../components/LastestAlert'
import Withdraw from '../components/Withdraw'
import '../less/main.less'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import User from "../pages/user";
import Agent from "../pages/agent";



export default class RouterSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            withdraw: false,
            recharge: false,
            password: false,
            lastestalert: false,
        }
    }
    setVisible(aa,bb) {
        this.setState({
            [aa]:bb
        })
    }
    componentDidMount() {
        // console.log(this.props.match)
        // this.setState({
        //     lastestalert: true
        // })
    }
    render() {
        return (
            <div>
                {/*{*/}
                    {/*this.props.location.pathname == '/register'? null:*/}
                        {/*this.props.location.pathname == '/login'? null :*/}
                        {/**/}
                {/*}*/}
                <Sidebar history={this.props.history} setVisible={(aa,modalVisible)=>this.setVisible(aa,modalVisible)} />
                <div className="container">
                    <Route path='/' render={()=>(
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/user' component={User}/>
                            <Route path='/agent' component={Agent}/>
                        </Switch>
                    )}/>
                    {/*{*/}
                        {/*this.props.location.pathname == '/register'? null:*/}
                            {/*this.props.location.pathname == '/login'? null :*/}
                              {/**/}
                    {/*}*/}
                    <Footer />
                </div>
                <Announcement modalVisible={this.state.modalVisible} setVisible={(aa,bb)=>this.setVisible(aa,bb)}/>
                <Recharge   recharge={this.state.recharge} setVisible={(aa,bb)=>this.setVisible(aa,bb)}/>
                <Withdraw   withdraw={this.state.withdraw} setVisible={(aa,bb)=>this.setVisible(aa,bb)}/>
                <Lastestalert   lastestalert={this.state.lastestalert} setVisible={(aa,bb)=>this.setVisible(aa,bb)}/>

            </div>
        )
    }
}

