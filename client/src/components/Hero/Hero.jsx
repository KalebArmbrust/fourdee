import React from 'react';
import './Hero.scss';
import Hero1 from '../../assets/images/Hero-Text.png';
import Hero2 from '../../assets/images/Hero-Images.png'

function Hero() {
    return (
        <div className="hero">
            <img className="hero__image1" src={Hero1} alt="Welcome to the Adidas Virtual Store"/>
            <img className="hero__image2" src={Hero2}alt="Store Image"/>
        </div>
    )
}

export default Hero;
