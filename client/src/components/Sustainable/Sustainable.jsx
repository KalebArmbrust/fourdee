import React from 'react';
import './Sustainable.scss';
import Carbon1 from '../../assets/images/counter1.png';
import Carbon2 from '../../assets/images/counter2.png';
import Black from '../../assets/images/black.png';
import Redstripe from '../../assets/images/redstripe.png';
import Camo from '../../assets/images/camo.png';
import Shirt from '../../assets/images/shirt.png';
import Shop from '../../assets/images/shop.png';

function Sustainable() {
    return (
        <section className="shop">
            <div className="shop-carbon">
                <img className="shop-carbon__count1" src={Carbon1} alt="carbon count"/>
                <img className="shop-carbon__count2" src={Carbon2} alt="carbon count"/>
            </div>
            <div className="shop-clothes">
                <img className="shop-clothes__sweatpants1" src={Black} alt="black sweatpants"/>
                <img className="shop-clothes__sweatpants2" src={Redstripe} alt="red sweatpants"/>
                <img className="shop-clothes__sweatpants3" src={Camo} alt="camo sweatpants"/>
                <img className="shop-clothes__sweatpants4" src={Shirt} alt="adidas shirt"/>
            </div>
            <img className="shop__button" src={Shop} alt="shop now"/>
        </section>
    )
}

export default Sustainable
