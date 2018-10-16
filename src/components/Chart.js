import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

class EchartsTest extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.querySelector('.main'));
        // 绘制图表
        myChart.setOption({
            title: {
                text: '最近30天数据动态',
                textStyle:{
                    color: '#87c4e9',
                    fontSize: 16
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['注册','充值','提现','投注','派奖','返点','分红','盈亏'],
                right: '4%',
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2017-10-08','2017-10-12','2017-10-16','2017-10-20','2017-10-24','2017-10-28','2017-11-01']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'注册',
                    type:'line',
                    // stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'充值',
                    type:'line',
                    // stack: '总量',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'提现',
                    type:'line',
                    // stack: '总量',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'投注',
                    type:'line',
                    // stack: '总量',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'派奖',
                    type:'line',
                    // stack: '总量',
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                },
                {
                    name:'返点',
                    type:'line',
                    // stack: '总量',
                    data:[1290, 820, 1330, 1320, 932, 901, 934]
                },
                {
                    name:'分红',
                    type:'line',
                    // stack: '总量',
                    data:[220, 820, 191, 234, 290, 934, 310]
                },
                {
                    name:'盈亏',
                    type:'line',
                    // stack: '总量',
                    data:[320, 1290, 820, 1330, 934, 310]
                }
            ]
        });
    }
    render() {
        return (
            <div className="main"></div>
        );
    }
}

export default EchartsTest;
