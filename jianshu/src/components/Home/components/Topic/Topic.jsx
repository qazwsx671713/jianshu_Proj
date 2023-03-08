import React from 'react'
import './Topic.css'
import TopicItem from './component/TopicItem/TopicItem'
import {useSelector,useDispatch} from 'react-redux'
export default function Topic() {
  const topic_list = useSelector(state=>state.topic_list)
  return (
    <div id='topic-container' className='clearfix'>
      {
        topic_list.map((value)=>{
          const {topic,img_path} = value
          
          return (
              <TopicItem title_name={topic} img_path={img_path} key={topic}/>
          )
      })}
      <div id="topic-more-info">
        <a id='topic-more-info-content' href="#">更多热门专题 &gt;</a>
      </div>
    </div>
  )
}
