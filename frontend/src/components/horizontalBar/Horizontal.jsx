import React from 'react';
import "./Horizontal.scss";
import HorizontalOffers from './horizontalOffers';

function Horizontal() {


    return (
        <div className="horizontalContainer">
            <h2>Top ajánlataink</h2>
            <span></span>
            <div className="horizontalItems">
            <HorizontalOffers/>
            </div>
        </div>
    )
}

export default Horizontal
