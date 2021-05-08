import React from 'react';
import './pizza.scss';
import Fade from 'react-reveal/Fade';

const Pizza = ({pizza}) =>{
    return(
        <Fade bottom>
        <div className="pizzaContainer">
           <img src={`/img/pizzatypes/${pizza.img}.jpg`} alt="pizza"></img>
           <div className="pizzaDetails"> 
           <h2 className="pizzaName">{pizza.name} Pizza</h2> 
           <span className="pizzaCardDecor"></span>
           <p className="toppings">{pizza.topping}</p>
           <h3 className="pizzaPrice">{pizza.price} Ft</h3> </div>
         </div>
          </Fade>
    )
}

export default Pizza;




