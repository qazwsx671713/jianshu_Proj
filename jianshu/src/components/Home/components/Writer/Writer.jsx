import React from 'react';
import './Writer.css'
import WriterItem from './WriterItem/WriterItem';
import {useDispatch,useSelector} from 'react-redux'
import { useState,useRef } from 'react';
const Writer = () => {
    const artist_data_list = useSelector(state=>state.artist_data_list)
    console.log('writer say::',artist_data_list)
    const usr_list = artist_data_list.users
    const rotate_item = useRef()
    const refresh_on = ()=>{
        const now_rotate = rotate_item.current.style.rotate
        if(now_rotate===''){
            rotate_item.current.style.rotate = "360deg"
        }
        else{
            const new_rotate =parseInt(now_rotate.slice(0,-3))
            const str_rotate = (new_rotate+360)+'deg'
            rotate_item.current.style.rotate = str_rotate
        }
    }
    return (
        <div id='writer-container' className='clearfix'>
            <div id="writer-banner" className='clearfix'>
                <div id="recommand-artist">推荐作者</div>
                <div id="recommand-change"><a href='#' onClick={refresh_on}><span ref={rotate_item} className='iconfont icon-xiangzuoxuanzhuan writer-rotate'></span>&nbsp;换一批</a></div>
            </div>
            {
                usr_list.map((v)=>{
                    return (
                        <WriterItem {...v} key={v.id}/>
                    )
                })
            }
        </div>
    );
}

export default Writer;
