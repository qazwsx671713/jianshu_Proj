import React from 'react';
import './Search_info.css'
import Hotbox from '../Hotbox/Hotbox';
const SearchInfo = () => {
    return (
        <div className='search-info-box clearfix'>
            <div className="triangle"></div>
            <div className="search-info-title">
                <div id='hot-search'>热门搜索</div>
                <div id='change-search'>换一批</div>
            </div>
            <Hotbox id='hot-box'/>
        </div>
    );
}

export default SearchInfo;
