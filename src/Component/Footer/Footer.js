import React from 'react';
import './Footer.css';

export default function Footer () {
    return(
        <div className='footer-container'>
            <p className='telly'>Tel: 801.355.5522</p>
            <p className='address'>13 North 400 West, Salt Lake City, UT 84101</p>
            <hr />

            <div className='copyright'>
                <span>
                COPYRIGHT © 2006 - 2018 LIVE NATION
                <br />
                WORLDWIDE, INC. ALL RIGHTS RESERVED
                </span>
            </div>
        </div>
      
    )
}