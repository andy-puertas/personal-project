import React from 'react';
import logo from '../../assets/depotLogoTop_border.png';
import {Link} from 'react-router-dom';
import './Header.css';

export default function Header() {
    return(
        <div className='container'>
            <Link to='/'>
                <img className='logo' src={logo} alt='logo'/>
            </Link>
            <hr />

        </div>
    )
}