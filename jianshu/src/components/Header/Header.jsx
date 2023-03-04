import React from 'react';
import './style.css'
import logo_pic from './imgs/jianshu_logo.png'
const Header = () => {
    return (
        <div className='navbar clearfix'>
            <div className='logo'><img src={logo_pic} alt="简书logo" /></div>
            <div className="navlist">
                <ul>
                    <li><a href="https://www.jianshu.com">首页</a></li>
                    <li><a href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=navbar-apps">下载App</a></li>
                    <li><a href="https://www.jianshu.com/vips">会员</a></li>
                    <li><a href="https://www.jianshu.com/techareas">IT技术</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
