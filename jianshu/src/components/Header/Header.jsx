import React from 'react';
import './style.css'
import logo_pic from './imgs/jianshu_logo.png'
import search_btn_pic from './imgs/搜索.png'
import { useState } from 'react';
import SearchInfo from './component/SearchInfo/Search_info';
import {CSSTransition} from 'react-transition-group'
import {useSelector,useDispatch} from 'react-redux'	
import { changeFocus ,get_hot_search_data,change_mouse_state } from '../../store/actionCreator';
const Header = () => {
    const focus = useSelector(state=>state.focus)
    const mouse_in_hot_list = useSelector(state=>state.mouse_in_hot_list)
    const dispatch = useDispatch()
    const focus_search = (event)=>{
        get_hot_search_data()
        changeFocus(true)
    }
    const blur_search = (event)=>{
        changeFocus(false)
    }
    return (
        <div className='navbar clearfix'>
            {console.log(focus)}

            {/* const focus = useSelector(state=>state.focus) */}
            <div className='logo'><img src={logo_pic} alt="简书logo" /></div>
            <div className="container clearfix">
                <div className="navlist">
                    <ul>
                        <li><a className='active' href="https://www.jianshu.com">首页</a></li>
                        <li><a href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=navbar-apps">下载App</a></li>
                        <li><a href="https://www.jianshu.com/vips">会员</a></li>
                        <li><a href="https://www.jianshu.com/techareas">IT技术</a></li>
                    </ul>
                </div>
                <div className="search-container" onFocus={focus_search} onBlur={blur_search}>
                <CSSTransition
                    in={focus}
                    timeout={200}
                    classNames='movie'>
                    <form action="/search" className={focus?'search-form focus-input-form':'search-form'}>
                                    <input type="text" className={focus?'focus-input':''} placeholder='搜索'/>
                                    <button><img src={search_btn_pic} alt="" /></button>
                    </form>
                </CSSTransition>
                    {console.log('mouse_in_hot_list:',mouse_in_hot_list)}
                    {(mouse_in_hot_list||focus)&&<SearchInfo />}
                </div>
                <div className='login-btn'>
                    <a>登录</a>
                </div>
                <div className="style_mode">
                    <a className="style-mode-btn">Aa</a>
                </div>
            </div>
            <div className="write-container clearfix">
                <button className="write-btn">写文章</button>
            </div>
            <div className="regist-container clearfix">
                <button className="regist-btn">注册</button>
            </div>

        </div>
    );
}

export default Header;
