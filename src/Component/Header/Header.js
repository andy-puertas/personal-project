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
            <div className='search-box-container'>
                <input class='search-box' placeholder='Search' />
            </div>
            <nav>
                <section className='menu-row'>
                    <Link to='/'>
                        <div id='home-link'>HOME</div>
                    </Link>
                    
                    <Link to='/venue'>
                        <div id='info-link'>VENUE INFO </div>
                    </Link>
                    
                    
                    <div>FAQ</div>

                    <Link to ='/cart'>
                        <div id='cart-link'>CART</div>
                    </Link>
                </section>
            </nav>
            

            <hr />

        </div>
    )
}