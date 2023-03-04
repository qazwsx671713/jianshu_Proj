import React from 'react';
import './style.css'
import logo_pic from './imgs/jianshu_logo.png'
import search_btn_pic from './imgs/搜索.png'
import { useState } from 'react';
const Header = () => {
    const [focus, setFocus] = useState(false);
    const focus_search = (event)=>{
        // event.target.clientWidth=`160px`
        // console.log(event.target.clientWidth)
        setFocus(true)
    }
    const blur_search = (event)=>{
        setFocus(false)
    }
    return (
        <div className='navbar clearfix'>
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
                <div className="search-container">
                    <form action="/search" className={focus?'search-form focus-input-form':'search-form'}>
                                    <input type="text" className={focus?'focus-input':''} placeholder='搜索' onFocus={focus_search} onBlur={blur_search}/>
                                    <button><img src={search_btn_pic} alt="" /></button>
                                </form>
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
