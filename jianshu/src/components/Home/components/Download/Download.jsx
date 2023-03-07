import React from 'react';
import './Download.css'
import {useState} from 'react';
const Download = () => {
    const [focus, setFocus] = useState(false)
    const setFocusOn = ()=>{
        setFocus(true)
    }
    const setFocusOff = ()=>{
        setFocus(false)
    }
    return (
        <div id='download-container' className='clearfix' onMouseEnter={setFocusOn} onMouseLeave={setFocusOff}>
            <img src="/img/jianshu_logo.png" alt="" id="jianshu-logo" />
            <div id="dowload-info">
                <title id='download-title'>下载简书手机App</title>
                <div id="download-dcr">随时随地发现和创作内容</div>
            </div>
            {focus&&
            (<div id="big-img-container">
                <img src="/img/jianshu_logo.png" alt="" id="jianshu-logo-big" />
                <div id="download-tri"></div>
            </div>)}
            {/* <div id="download-tri"></div> */}
        </div>
    );
}

export default Download;
