import React, { Component } from 'react';
import Slider from 'react-slick';
import './Slideshow.css';

import s1 from '../../assets/SocialDistortion_Hero.jpg';
import s2 from '../../assets/JRAD_Hero.jpg';
import s3 from '../../assets/JJGrey_Hero.jpg';
import s4 from '../../assets/UTD_Hero.jpg';
import s5 from '../../assets/BeatsAntique_Hero.jpg'


export default class Slideshow extends Component {
  render() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 900,
        autoplay: true,
        autoplayspeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    

    return (
      <div className='slide-container'>
        <Slider {...settings}>
          <div>
            <img className='slide-1' src={s1} alt='logo' />
          </div>
          <div>
            <img className='slide' src={s2} alt='logo' />
          </div>
          <div>
            <img className='slide-3' src={s3} alt='logo' />
          </div>
          <div>
            <img className='slide-4' src={s4} alt='logo' />
          </div>
          <div>
            <img className='slide-5' src={s5} alt='logo'/>
          </div>

          
          
        </Slider>
      </div>
    )
  }
}

