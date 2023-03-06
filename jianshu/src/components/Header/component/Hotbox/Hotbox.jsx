import React from 'react'
import './Hotbox.css'
import {useSelector,useDispatch} from 'react-redux'
export default function Hotbox() {
    const hot_title_list = useSelector(state=>state.hot_title_list)
    const now_page = useSelector(state=>state.now_page)
    const all_page = useSelector(state=>state.all_page)
    const dispatch = useDispatch()
    const show_list = (now_page!==all_page)?hot_title_list.slice((now_page-1)*10,now_page*10):hot_title_list.slice((now_page-1)*10);
    console.log("show_list:",show_list);
  return (
    <div id='hot-box-container'>
        {
            show_list.map((v,id)=>{
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
