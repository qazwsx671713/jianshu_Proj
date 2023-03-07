import React from 'react'
import List from './components/List/List'
import Recommand from './components/Recommand/Recommand'
import Topic from './components/Topic/Topic'
import Writer from './components/Writer/Writer'
import './Home.css'
import { get_topic_list_data ,get_list_data} from '../../store/actionCreator'
import Download from './components/Download/Download'
export default function Home() {
    get_topic_list_data()
    get_list_data()
  return (
    <div id='home-container' className='clearfix'>
        <div id="home-left">
            <img id='banner-img' src={process.env.PUBLIC_URL + '/img/banner_1.jpg'} alt="风景图" />
            <Topic/>
            <List/>
        </div>
        <div id="home-right">
            <Recommand/>
            <Download/>
            <Writer/>
        </div>
    </div>
  )
}
