import React from 'react'
import './Hotbox.css'
import {useSelector,useDispatch} from 'react-redux'
export default function Hotbox() {
    const hot_title_list = useSelector(state=>state.hot_title_list)
    const dispatch = useDispatch()
  return (
    <div id='hot-box-container'>
        {
            hot_title_list.map((v,id)=>{
                return (
                    <div id="small-box" key={id}>
                        <span>{v}</span>
                    </div>
                )
            })
        }
        {/* <div id="small-box">
            <span>理财</span>
        </div> */}

    </div>
  )
}
