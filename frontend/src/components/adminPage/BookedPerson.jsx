import React from "react";

function BookedPerson({ persons }) {
  const postFetch = () => {
    const formData = new FormData();

    formData.append("email", persons.email);

    console.log(persons.email);
    fetch("http://localhost:3001/deleteBooking", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div>
      <h3>Foglaló neve: {persons.name}</h3>
      <h4>E-mail címe: {persons.email}</h4>
      <h4>Telefonszám: {persons.tel}</h4>
      <h4>Foglalt hely: {persons.head}</h4>
      <h4>Foglalás időpontja: {persons.date}</h4>
      <button onClick={postFetch}>Delete</button>
    </div>
  );
}

export default BookedPerson;
