import React from 'react';
import logo from '../../assets/depotLogoTop_border.png';
import './Header.css';

export default function Header() {
    return(
        <div className='container'>

            <img className='logo' src={logo} alt='logo'/>
            <hr />

        </div>
    )
}