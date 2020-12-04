import React from 'react';
import './Exclusive.scss';
import Patrick from '../../assets/images/Mahomes.png';
import Pants from '../../assets/images/pants.png'

function Exclusive() {
    return (
        <section className="exclusive">
            <div className="exclusive-top">
                <h1 className="exclusive-top__h1">Adidas V.Store EXCLUSIVE</h1>
                <h2 className="exclusive-top__h2">CREATORS CLUB</h2>
                <h3 className="exclusive-top__h3">PATRICK MAHOMES II</h3>
                <p className="exclusive-top__p">CHANGE| END CLIMATE CHANGE</p>
            </div>
            <div className="exclusive-mid">
                <img className="exclusive-mid__image" src={Patrick} alt="Patrick Mahomes"/>
                <h3 className="exclusive-mid__text">Adidas x Patrick Mahomes Apparel <br/>Line coming November, 2020</h3>
            </div>
            <div className="exclusive-bottom">
                <div className="exclusive-bottom-learn">
                    <h1 className="exclusive-bottom-learn__title">Learn More</h1>
                    <p className="exclusive-bottom-learn__text">click on the highlighted parts of an item to learn more about out sustainable mission. Learn about the materials used to create your new piece.</p>
                </div>
                <img className="exclusive-bottom-image" src={Pants} alt="Mobile Store"/>
            </div>
        </section>
    )
}

export default Exclusive;
