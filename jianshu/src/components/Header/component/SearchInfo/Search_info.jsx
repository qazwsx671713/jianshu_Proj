import React from 'react';
import './Search_info.css'
import Hotbox from '../Hotbox/Hotbox';
import { useSelector } from 'react-redux';
import { change_Search,change_mouse_state } from '../../../../store/actionCreator';
import { useRef } from 'react';
const SearchInfo = () => {
    const now_page = useSelector(state=>state.now_page)
    const all_page = useSelector(state=>state.all_page)
    const rotate_icon = useRef()
    const change_search = ()=>{
        let rotate_now = rotate_icon.current.style.rotate
        let rotate_change = ''
        if (rotate_now===''){
            rotate_change = '360deg'
            // rotate_icon.current.style.rotate = 
            console.log(rotate_change)
        }
        else{
            rotate_change = (parseInt(rotate_now.slice(0,-3))+360)+'deg'
            console.log(rotate_change)
            // rotate_icon.current.style.rotate = rotate_change
        }
        rotate_icon.current.style.rotate = rotate_change
        change_Search(now_page,all_page)
    }
    const mouse_enter_hot_list=()=>{
        change_mouse_state(true)
    }
    return (
        <div className='search-info-box clearfix' onMouseEnter={mouse_enter_hot_list} onMouseLeave={()=>change_mouse_state(false)}>
            <div className="triangle"></div>
            <div className="search-info-title">
                <div id='hot-search'>热门搜索</div>
                <div id='change-search' onClick={change_search}><a href='#'><span ref={rotate_icon} className='iconfont icon-xiangzuoxuanzhuan search-rotate'></span>&nbsp;换一批</a></div>
            </div>
            <Hotbox id='hot-box'/>
        </div>
    );
}

export default SearchInfo;
