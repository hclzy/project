import React from 'react';

/**
 @页标题(此为纯函数式组件)
 @param name {String} 标题内容
 @return {Component} 返回Title组件
 */

export const Title = (name="最新公告",engName) => {

    return (
        <div className="announcement_title">
            <span className="announcement_chn">{name}</span>
            <span className="announcement_eng">&nbsp;&nbsp;{engName}</span>
        </div>
    )
}

