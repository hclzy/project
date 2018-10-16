import React from 'react'
import { DatePicker, } from 'antd';
import moment from 'moment';

const RangePicker = DatePicker.RangePicker;
export default class DateRange extends React.Component {
    state = {
        value:[],
        flag: 12,
        endOpen: false,
    };

    yesterdayChange() {
        this.setState({
            flag:1,
            value:[moment().startOf('day').add(-1,'days'),moment().endOf('day').add(-1,'days')],
        })
    }
    todayChange() {
        this.setState({
            flag:0,
            value:[moment().startOf('day','YYYY-MM-DD'),moment().endOf('day','YYYY-MM-DD')],
        })
        console.log(this.state.startValue)
    }
    sevenChange() {
        this.setState({
            flag:2,
            value:[moment().startOf('day','YYYY-MM-DD').add(-6,'days'),moment().endOf('day','YYYY-MM-DD')]
        })
    }
    tirtyChange() {
        this.setState({
            flag:3,
            value:[moment().startOf('day','YYYY-MM-DD').add(-29,'days'),moment().endOf('day','YYYY-MM-DD')]
        })
    }
    // disabledStartDate = (startValue) => {
    //     const endValue = this.state.endValue;
    //     if (!startValue || !endValue) {
    //         return false;
    //     }
    //     return startValue.valueOf() > endValue.valueOf();
    // }
    //
    // disabledEndDate = (endValue) => {
    //     const startValue = this.state.startValue;
    //     if (!endValue || !startValue) {
    //         return false;
    //     }
    //     return endValue.valueOf() <= startValue.valueOf();
    // }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    }

    // onStartChange = (value) => {
    //     this.onChange('startValue', value);
    //     console.log(this.state.startValue)
    // }
    //
    // onEndChange = (value) => {
    //     this.onChange('endValue', value);
    // }
    //
    // handleStartOpenChange = (open) => {
    //     if (!open) {
    //         this.setState({ endOpen: true });
    //     }
    // }
    //
    // handleEndOpenChange = (open) => {
    //     this.setState({ endOpen: open });
    // }

    render() {
        const { value } = this.state;
        return (
            <div>
                {/*<DatePicker*/}
                    {/*classMame="date_s"*/}
                    {/*disabledDate={this.disabledStartDate}*/}
                    {/*showTime*/}
                    {/*format="YYYY-MM-DD HH:mm:ss"*/}
                    {/*value={startValue}*/}
                    {/*placeholder="Start"*/}
                    {/*onChange={this.onStartChange}*/}
                    {/*onOpenChange={this.handleStartOpenChange}*/}
                {/*/>*/}
                {/*<DatePicker*/}
                    {/*disabledDate={this.disabledEndDate}*/}
                    {/*showTime*/}
                    {/*format="YYYY-MM-DD HH:mm:ss"*/}
                    {/*value={endValue}*/}
                    {/*placeholder="End"*/}
                    {/*onChange={this.onEndChange}*/}
                    {/*open={endOpen}*/}
                    {/*onOpenChange={this.handleEndOpenChange}*/}
                {/*/>*/}
                <RangePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    value={value}
                    onChange={this.handleChange}
                />
                <div className="select_btn">
                    <button onClick={()=>this.todayChange()} className={this.state.flag==0?'selected':null}>今天</button>
                    <button onClick={()=>this.yesterdayChange()} className={this.state.flag==1?'selected':null}>昨天</button>
                    <button onClick={()=>this.sevenChange()} className={this.state.flag==2?'selected':null}>最近7天</button>
                    {
                        (this.props.location.pathname.indexOf('/agent')>-1 && this.props.location.pathname != '/agent/list') ?
                            <button onClick={()=>this.tirtyChange()} className={this.state.flag==3?'selected':null}>最近30天</button> : null
                    }
                </div>
                <div className="inquire">
                    <button>查询</button>
                </div>
            </div>
        );
    }
}
