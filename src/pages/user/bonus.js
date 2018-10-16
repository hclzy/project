import React from 'react'

export default class bonus extends React.Component{
    constructor() {
        super();
        this.state = {
            selected: 'ssc'
        }
    }
    handleClick (e){
        if(e.target.nodeName === 'BUTTON') {
            this.setState({
                selected:e.target.getAttribute("data-tag")
            })
        }
    }
    render() {
        return (
            <div>
                <div className="user_title">
                    {this.props.title}
                </div>
                <div className="bonus_btn" onClick={e=>this.handleClick(e)}>
                    <button data-tag="ssc" className={`${this.state.selected == 'ssc'? 'selected' : null}`}>时时彩</button>
                    <button data-tag="115" className={`${this.state.selected == '115'? 'selected' : null}`}>11选5</button>
                    <button data-tag="dp" className={`${this.state.selected == 'dp'? 'selected' : null}`}>低频彩</button>
                </div>
                <div className="bonus_tab">
                    <table>
                        <thead>
                        <tr>
                            <td>玩法群</td>
                            <td>玩法组</td>
                            <td>玩法</td>
                            <td>返点</td>
                            <td>最高奖金（元模式）</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td rowSpan="8">五星</td>
                            <td rowSpan="2">五星直选</td>
                            <td>直选复式</td>
                            <td>12.5%</td>
                            <td>190000</td>
                        </tr>
                        <tr>
                            <td>直选单式</td>
                            <td>12.5%</td>
                            <td>190000</td>
                        </tr>
                        <tr>
                            <td rowSpan="6">五星组选</td>
                            <td>组选120</td>
                            <td>13.5%</td>
                            <td>250000</td>
                        </tr>
                        <tr>
                            <td>组选60</td>
                            <td>13.5%</td>
                            <td>250000</td>
                        </tr>
                        <tr>
                            <td>组选30</td>
                            <td>13.5%</td>
                            <td>250000</td>
                        </tr>
                        <tr>
                            <td>组选20</td>
                            <td>13.5%</td>
                            <td>250000</td>
                        </tr>
                        <tr>
                            <td>组选10</td>
                            <td>13.5%</td>
                            <td>250000</td>
                        </tr>
                        <tr>
                            <td>组选5</td>
                            <td>13.5%</td>
                            <td>250000</td>
                        </tr>
                        <tr>
                            <td rowSpan="6">四星</td>
                            <td rowSpan="2">四星直选</td>
                            <td>直选复式</td>
                            <td>12.5%</td>
                            <td>190000</td>
                        </tr>
                        <tr>
                            <td>直选单式</td>
                            <td>12.5%</td>
                            <td>190000</td>
                        </tr>
                        <tr>
                            <td rowSpan="4">四星组选</td>
                            <td>组选24</td>
                            <td>12.5%</td>
                            <td>190000</td>
                        </tr>
                        <tr>
                            <td>组选12</td>
                            <td>12.5%</td>
                            <td>190000</td>
                        </tr>
                        <tr>
                            <td>组选6</td>
                            <td>12.5%</td>
                            <td>190000</td>
                        </tr>
                        <tr>
                            <td>组选3</td>
                            <td>12.5%</td>
                            <td>190000</td>
                        </tr>
                        <tr>
                            <td rowSpan="7">前三</td>
                            <td rowSpan="4">前三直选</td>
                            <td>直选复式</td>
                            <td>12.5%</td>
                            <td>190000</td>
                        </tr>
                        <tr>
                            <td>直选单式</td>
                            <td>12.5%</td>
                            <td>190000</td>
                        </tr>
                        <tr>
                            <td>直选和值</td>
                            <td>12.5%</td>
                            <td>190000</td>
                        </tr>
                        <tr>
                            <td>直选跨度</td>
                            <td>12.5%</td>
                            <td>190000</td>
                        </tr>
                        <tr>
                            <td rowSpan="4">前三组选</td>
                            <td>组三</td>
                            <td>12.5%</td>
                            <td>190000</td>
                        </tr>
                        <tr>
                            <td>组六</td>
                            <td>12.5%</td>
                            <td>190000</td>
                        </tr>
                        <tr>
                            <td>组选和值</td>
                            <td>12.5%</td>
                            <td>190000</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
