import React from 'react';
import logo from '../../assets/depotLogoTop_border.png';
import {Link} from 'react-router-dom';
import './Header.css';

export default function Header() {
    return(
        <div className='header-container'>
            <Link to='/'>
                <img className='logo' src={logo} alt='logo'/>
            </Link>
            <nav>
                <section className='menu-row'>
                    <Link to='/'>
                        <div>HOME</div>
                    </Link>
                    
                    <Link to='/venue'>
                        <div>VENUE INFO </div>
                    </Link>
                    <div>FAQ</div>
                    <div>CART</div>
                </section>
            </nav>

            <hr />

        </div>
    )
}