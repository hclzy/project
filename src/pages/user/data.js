import React from 'react'
import { Upload, Icon, message, Radio } from 'antd';

const RadioGroup = Radio.Group;

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}

export default class data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '男',
            loading: false
        }
    }
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
    }

    render () {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
            </div>
        );
        const imageUrl = this.state.imageUrl;
        return (
            <div>
                <div className="user_title">
                    个人资料
                </div>
                <div>
                    <div className="detail_body">
                        <ul className="data_body">
                            <li className="clear">
                                <div className="data_title">
                                    用户名：
                                </div>
                                <div className="data_data">
                                    elena001
                                </div>
                            </li>
                            <li className="clear">
                                <div className="data_title">
                                    <div className="photo">
                                        头像：
                                    </div>
                                </div>
                                <div className="data_data">
                                    {/*<img src="" alt=""/>*/}
                                    <Upload
                                        name="avatar"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        beforeUpload={beforeUpload}
                                        onChange={this.handleChange}
                                    >
                                        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                                    </Upload>
                                </div>
                            </li>
                            <li className="clear">
                                <div className="data_title">
                                    昵称：
                                </div>
                                <div className="data_data">
                                    { '未设置'}
                                </div>
                            </li>
                            <li className="clear">
                                <div className="data_title">
                                    性别：
                                </div>
                                <div className="data_data">
                                    <RadioGroup onChange={this.onChange} value={this.state.value}>
                                        <Radio value={'男'}>男</Radio>
                                        <Radio value={'女'}>女</Radio>
                                    </RadioGroup>
                                </div>
                            </li>
                            <li className="clear">
                                <div className="data_title">
                                    绑定手机号：
                                </div>
                                <div className="data_data">
                                    {data.phone|| '未设置' }
                                </div>
                            </li>
                            <li className="clear">
                                <div className="data_title">
                                    绑定邮箱：
                                </div>
                                <div className="data_data">
                                    131*****1@qq.com
                                </div>
                            </li>
                            <li className="clear">
                                <div className="data_title">
                                    联系QQ：
                                </div>
                                <div className="data_data">
                                    27******8
                                </div>
                            </li>
                            <div className="data_submit">
                                <button>修 改</button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
