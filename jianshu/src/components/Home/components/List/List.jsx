import React from 'react'
import './List.css'
import ListItem from './ListItem/ListItem'
import {useDispatch,useSelector} from 'react-redux'
export default function List() {
  const list_data_list = useSelector(state=>state.list_info_list)
  return (
    <div>
      {
        list_data_list.map((v)=>{
          return (
            <ListItem {...v} key={v.usr_name}/>
          )
        })
      }
      {/* <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/> */}
    </div>
  )
}
