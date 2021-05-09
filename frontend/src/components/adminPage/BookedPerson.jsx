import React, { useState } from "react";

function BookedPerson({ persons }) {
  const [isdeleted, setDeleted] = useState(false);

  const postFetch = () => {
    const formData = new FormData();

    formData.append("email", persons.email);

    console.log(persons.email);
    fetch("http://localhost:3001/deleteBooking", {
      method: "POST",
      body: formData,
    }).then((res) => {
      if (res.ok) {
        setDeleted(true);
        console.log(res.json());
      }
    });
  };

  return (
    <div>
      <h3>Foglaló neve: {persons.name}</h3>
      <h4>E-mail címe: {persons.email}</h4>
      <h4>Telefonszám: {persons.tel}</h4>
      <h4>Foglalt hely: {persons.head}</h4>
      <h4>Foglalás időpontja: {persons.date}</h4>
      {!isdeleted ? (
        <button onClick={postFetch}>Delete</button>
      ) : (
        <p>Foglalás törölve</p>
      )}
    </div>
  );
}

export default BookedPerson;
