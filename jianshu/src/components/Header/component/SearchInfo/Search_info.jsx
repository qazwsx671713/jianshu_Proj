import React from 'react';
import './Search_info.css'
import Hotbox from '../Hotbox/Hotbox';
import { useSelector } from 'react-redux';
import { change_Search } from '../../../../store/actionCreator';
const SearchInfo = () => {
    const now_page = useSelector(state=>state.now_page)
    const all_page = useSelector(state=>state.all_page)
    const change_search = ()=>{
        change_Search(now_page,all_page)
    }
    return (
        <div className='search-info-box clearfix'>
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
