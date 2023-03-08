import React from 'react'
import './ListItem.css'
export default function ListItem(props) {
    const {title,content,usr_name,comment_num,like_num} = props
  return (
    <div className='list-item-container'>
        <h2 className='list-item-container-title'>{title}</h2>
        <p className='list-item-container-content font_simall'>{content}</p>
        <div className="list-info-detail">
            <span className='list-info-detail-name'><i className='iconfont icon-xingsu list-icon'></i> 12.8</span>
            <span className='list-info-detail-usrname'><span href="#">{usr_name}</span></span>
            <span className="list-info-detail-commen_like"><i className='iconfont icon-pinglun list-icon'></i> {comment_num}</span>
            <span className="list-info-detail-commen_like"><i className='iconfont icon-xiai list-icon'></i> {like_num}</span>
        </div>
    </div>
  )
}
