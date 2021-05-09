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
    <div className="bookedPersonContainer">
      <h3>{persons.name}</h3>
      <h5>E-mail cím</h5>
      <h4>{persons.email}</h4>
      <h5>Telefonszám</h5>
      <h4> {persons.tel}</h4>
      <h5>Foglalt hely</h5>
      <h4> {persons.head}</h4>
      <h5>Foglalás időpontja</h5>
      <h4>{persons.date}</h4>
      {!isdeleted ? (
        <button onClick={postFetch}>Foglalás törlése</button>
      ) : (
        <p>Foglalás törölve</p>
      )}
    </div>
  );
}

export default BookedPerson;
