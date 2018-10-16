import { Table, Checkbox  } from 'antd';
import React from 'react';
// import axios from 'axios';
import Date from './Date';
import '../less/tab.less'

const columns = [{
    title: '交易单号',
    dataIndex: 'num',
    width: '20%',
}, {
    title: '账变类型',
    dataIndex: 'type',
    width: '20%',
}, {
    title: '账变时间',
    dataIndex: 'time',
},{
    title: '账变金额',
    dataIndex: 'money',
    render:text => <a>{text}</a>,
},{
    title: '账户余额',
    dataIndex: 'balance',
},{
    title: '操作',
    dataIndex: 'operating',
    render:text=><span style={{textDecoration:'underline'}}>{text}</span>
}];
export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[
                {
                    num:111,
                    type:`投注扣款`,
                    time:`2018-07-06 21:23:13`,
                    money: '-2.00',
                    balance:0.001,
                    operating:'查看详情',
                },
                {
                    num:222,
                    type:`投注扣款`,
                    time:`2018-07-06 21:23:13`,
                    money: '-2.00',
                    balance:0.001,
                    operating:'查看详情',
                },
                {
                    num:333,
                    type:`投注扣款`,
                    time:`2018-07-06 21:23:13`,
                    money: '-2.00',
                    balance:0.001,
                    operating:'查看详情',
                },
                {
                    num:444,
                    type:`投注扣款`,
                    time:`2018-07-06 21:23:13`,
                    money: '-2.00',
                    balance:0.001,
                    operating:'查看详情',
                }
            ],
            pagination: {pageSize:2},//分页
            loading: false,
        }
    }
    // handleTableChange = (pagination, filters, sorter) => {
    //     const pager = { ...this.state.pagination };
    //     pager.current = pagination.current;
    //     this.setState({
    //         pagination: pager,
    //     });
    //     this.fetch({
    //         results: pagination.pageSize,
    //         page: pagination.current,
    //         sortField: sorter.field,
    //         sortOrder: sorter.order,
    //         ...filters,
    //     });
    // }
    //
    // fetch = (params = {}) => {
    //     console.log('params:', params);
    //     this.setState({ loading: true });
    //     axios.get(
    //         '',
    //     {data: {
    //             results: 10,
    //             ...params,
    //         },
    //     }).then((data) => {
    //         const pagination = { ...this.state.pagination };
    //         // Read total count from server
    //         pagination.total = data.totalCount;
    //         pagination.total = 200;
    //         this.setState({
    //             loading: false,
    //             data: data.results,
    //             pagination,
    //         });
    //     });
    // }

    componentDidMount() {
        // this.fetch();
    }
    render () {
        const { data, pagination, loading } = this.state;
        const title = window.sessionStorage.getItem('routername')
        return (
            <div>
                <div className="user_title">
                    {title}
                </div>
                <div>
                    <div className="detail_body">
                        <div className="detail_select">
                            <div>
                                <select>
                                    <option>账变类型</option>
                                </select>
                                <input className="ordernum" type="text" placeholder="交易单号"/>
                                {
                                    (this.props.location.pathname.indexOf('/agent')> -1 && this.props.location.pathname != '/agent/list')  ?
                                        <Checkbox defaultChecked={true}>包含下级</Checkbox> : null
                                }
                                {this.props.location.pathname == '/agent/detail' ?
                                    <div className="fr putout">导出报表 ></div> : null
                                }

                            </div>
                            <div className="select_date">
                                <Date location={this.props.location}/>
                            </div>
                        </div>
                        <div className="detail_list">
                            {this.props.location.pathname == '/agent/money'| this.props.location.pathname == '/agent/list' ?
                                <div className="user_name">
                                    本级：
                                    <span>elena1</span>
                                </div> : null
                            }

                            <Table
                                columns={columns}
                                rowKey={record => record.num}
                                dataSource={data}
                                pagination={pagination}
                                loading={loading}
                                // onChange={this.handleTableChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

