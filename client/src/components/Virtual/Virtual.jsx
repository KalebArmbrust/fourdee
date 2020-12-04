import React from 'react';
import './Virtual.scss';
import Gif1 from '../../assets/images/VRgif.gif';
import Mirror from '../../assets/images/mirror.png';
import Mic from '../../assets/icons/icon.svg';
import Tag from '../../assets/icons/tag.svg';
import Pointer from '../../assets/icons/Pointer.svg';

function Virtual() {
    return (
        <section className="virtual">
           <div className="virtual-header">
               <h1 className="virtual-header__text">We're bringing your favorite store to you</h1>
            </div>
            <div className="virtual-phone1">
                <h3 className="virtual-phone1__text">Take a step into the Adidas V.Store and take a look around just like before</h3>
                <img className="virtual-phone1__image" src={Gif1} alt="Store Gif"/>
            </div>
            <div className="virtual-phone2">
                <h3 className="virtual-phone2__text">Find a mirror at home when you want to try on an item in the Adidas V.Store using our AR.Fit technology</h3>
                <img className="virtual-phone2__image" src={Mirror} alt="Mirror Image"/>
            </div>
            <div className="virtual-bottom">
                <div className="virtual-bottom-1">
                    <img className="virtual-bottom-1__icon" src={Mic} alt="Mic"/>
                    <h3 className="virtual-bottom-1__head">"Hey Adidas"</h3>
                    <p className="virtual-bottom-1__text">chat with the Adidas V.Store representative for more info or if you need help</p>
                </div>
                <div className="virtual-bottom-2">
                    <img className="virtual-bottom-2__icon" src={Tag} alt="Tag"/>
                    <h3 className="virtual-bottom-2__head">Flash Sale</h3>
                    <p className="virtual-bottom-2__text">Take advantage of in-V.Store sales and promotions</p>
                </div>
                <div className="virtual-bottom-3">
                    <img className="virtual-bottom-3__icon" src={Pointer} alt="Pointer"/>
                    <h3 className="virtual-bottom-3__head">One Click Purchase</h3>
                    <p className="virtual-bottom-3__text">Add your favourite items to your cart or buy it with one click while you're in the Adidas V.Store</p>
                </div>
            </div>
        </section>
    )
}

export default Virtual
