import React from 'react'
import './List.css'
import ListItem from './ListItem/ListItem'
import {useDispatch,useSelector} from 'react-redux'
import { read_more } from '../../../../store/actionCreator'
import {Link} from 'react-router-dom'
export default function List() {
  const list_data_list = useSelector(state=>state.list_info_list)
  const read_more_data=()=>{
    read_more()
  }
  return (
    <div>
      {
        list_data_list.map((v,idx)=>{
          return (
            <Link  key={idx} to='/detail'>
              <ListItem {...v} key={idx}/>
            </Link>
          )
        })
      }
      <div id="list-more">
        <a href="#" onClick={read_more_data}>阅读更多</a>
      </div>
    </div>
  )
}
