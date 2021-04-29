import React from 'react';
import './pizza.scss';

const Pizza = ({pizza}) =>{
    return(
        <div className="pizzaContainer">
           <img src={`/img/pizzatypes/${pizza.img}.jpg`} alt="pizza"></img>
           <div className="pizzaDetails"> 
           <h2 className="pizzaName">{pizza.name} Pizza</h2> 
           <span className="pizzaCardDecor"></span>
           <p className="toppings">{pizza.topping}</p>
           <h3 className="pizzaPrice">{pizza.price} Ft</h3> </div>
         </div>
    )
}

export default Pizza;




