import React from 'react'
import './TopicItem.css'
export default function TopicItem(props) {
    const {title_name,img_path} = props
  return (

    <div className='topicItem-container clearfix'>
        <img src={process.env.PUBLIC_URL+img_path}  className='TopicItem-icon'/>
        <p className='TopicItem-content'> {title_name}</p>
    </div>
  )
}
