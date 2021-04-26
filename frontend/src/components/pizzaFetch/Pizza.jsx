import React from 'react';

const Pizza = ({pizza}) =>{
    return(
        <div className="pizzaContainer">
            <h2>{pizza.name}</h2>
            <img src={`/img/pizzatypes/${pizza.img}.jpg`} alt="pizza"></img>
            <p>{pizza.topping}</p>
        </div>
    )
}

export default Pizza;