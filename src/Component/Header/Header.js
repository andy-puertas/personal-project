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
            {/* <div className='search-box-container'> */}
                {/* <input class='search-box' placeholder='Search' /> */}
            {/* </div> */}
            <nav>
                <section className='menu-row'>
                    <Link to='/'>
                        <a id='home-link'>HOME</a>
                    </Link>
                    
                    <Link to='/venue'>
                        <a id='info-link'>VENUE INFO </a>
                    </Link>
                    
                    <Link to='/faq' >
                        <a id='faq-link'>FAQ</a>
                    </Link>

                    <Link to ='/cart'>
                        <a id='cart-link'>CART</a>
                    </Link>
                </section>
            </nav>
            

            <hr />

        </div>
    )
}