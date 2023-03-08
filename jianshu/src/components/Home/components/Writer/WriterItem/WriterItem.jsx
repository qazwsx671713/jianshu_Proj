import React from 'react'
import './WriterItem.css'
export default function WriterItem(props) {
    const {id,nickname,avatar_source,total_likes_count,total_wordage,is_following_user} = props
  return (
    <div className='writer-item-container clearfix' >
        {/* <img src={process.env.PUBLIC_URL+'/iconfont/icon_gle97jse7wg/chonglang.png'} alt="" className='writer-icon'/> */}
        <img src={avatar_source} alt="" className='writer-icon'/>
        <div className="writer-info">
            <title>{nickname}</title>
            <span>写了{Math.floor(total_likes_count/100)/10}k字</span>
            <span>&nbsp;|&nbsp;</span>
            <span>{Math.floor(total_wordage/100)/10}k喜欢</span>
        </div>
        <div className="writer-follow">
            {is_following_user?('已关注'):('+关注')} 
            {/* +关注 */}
        </div>
    </div>
  )
}
