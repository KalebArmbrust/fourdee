import React from 'react';
import './Gram.scss';
import Net from '../../assets/images/net.png';
import Quote from '../../assets/images/quote.png';
import Salmon from '../../assets/images/salmon.png';
import Shoe from '../../assets/images/shoe.png';

function Gram() {
    return (
        <section className="gram">
            <h2 className="gram__title">On the Gram</h2>
            <div className="gram-photos">
                <img className="gram-photos__net" src={Net} alt="man in white shirt"/>
                <img className="gram-photos__quote" src={Quote} alt="There is no off season for change"/>
                <img className="gram-photos__salmon" src={Salmon} alt="man in salmon shirt"/>
                <img className="gram-photos__shoe" src={Shoe} alt="salmon running shoe"/>
            </div>
        </section>
    )
}

export default Gram;