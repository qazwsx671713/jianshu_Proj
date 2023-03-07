import React from 'react';
import './Recommand.css'
const Recommand = () => {
    return (
        <div id='recommand-container'>
            <a href='#' className='recommand_a'><img src='/img/recommand_img/banner1.png' alt="" className="recommand-img" /></a>
            <a href='#' className='recommand_a'><img src='/img/recommand_img/banner2.png' alt="" className="recommand-img" /></a>
            <a href='#' className='recommand_a'><img src='/img/recommand_img/banner3.png' alt="" className="recommand-img" /></a>
            <a href='#' className='recommand_a'><img src='/img/recommand_img/banner4.png' alt="" className="recommand-img" /></a>
        </div>
    );
}

export default Recommand;
