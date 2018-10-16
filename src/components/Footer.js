import React from 'react'

export default class Footer extends React.Component{
    render () {
        return (
            <div className="footer">
                <div className="row clear">
                    <div className="fl">
                        <div className="footer_txt clear">
                            <div className="footer_link">品牌介绍</div>
                            <div className="footer_link">联系我们</div>
                            <div className="footer_link">帮助中心</div>
                            <div className="footer_link">防劫持教程</div>
                        </div>
                        <div className="footer_txt">
                            <span>推荐使用浏览器</span>
                        </div>
                        <div className="footer_txt">
                            @2018 南山娱乐平台版权所有 菲律宾政府PAGCOR博彩牌照认证
                        </div>
                    </div>
                    <div className="fr">
                        <div style={{textAlign:'right',marginTop: '10px'}}>
                            权威认证资质
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
