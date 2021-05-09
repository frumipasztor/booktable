import React from "react";

function TopPizza({ toppizza }) {
  return (
    <div className="topCards">
      <img src={`/img/pizzatypes/${toppizza.img}.jpg`} alt="pizza" />
      <h3>{toppizza.name} Pizza</h3>
      {/* <p>{toppizza.topping}</p> */}
      <h4>{toppizza.price} Ft</h4>
      {/* <button></button> */}
    </div>
  );
}

export default TopPizza;
