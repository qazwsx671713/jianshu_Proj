import React from 'react';
import './Search_info.css'
import Hotbox from '../Hotbox/Hotbox';
import { useSelector } from 'react-redux';
import { change_Search,change_mouse_state } from '../../../../store/actionCreator';
const SearchInfo = () => {
    const now_page = useSelector(state=>state.now_page)
    const all_page = useSelector(state=>state.all_page)
    const change_search = ()=>{
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
                <div id='change-search' onClick={change_search}>换一批</div>
            </div>
            <Hotbox id='hot-box'/>
        </div>
    );
}

export default SearchInfo;
