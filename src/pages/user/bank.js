import React from 'react'

export default class safe extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        console.log(this.props);
    }
    render () {
        return (
            <div className="bank">
                <div className="user_title">
                    银行卡管理
                </div>
                <div className="detail_body">
                    <div className="bank_description">
                        <div className="bank_description_title fl">
                            银行卡管理
                        </div>
                        <ul className="fl">
                            <li>1.您在平台绑定的银行卡将作为您提款时使用的指定收款卡</li>
                            <li>2.为了您的资金安全建议您绑定后<span>开启锁定，锁定后将不能增加或者修改银行卡，如需更改需先联系在线客服申请解锁</span></li>
                            <li>3.一个平台账号<span>最多绑定5张银行卡</span>，新绑定银行卡需要3小时生效后可用于提款操作</li>
                        </ul>
                    </div>
                    <div className="bank_body">
                        <div className="bank_none">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
