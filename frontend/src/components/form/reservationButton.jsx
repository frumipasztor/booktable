import React, { useState } from "react";
import axios from "axios";

const ReservationButton = (props) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [emptyCheck, setEmptyCheck] = useState(false);

  const reserve = async (e) => {
    e.preventDefault();

    if (props.name !== "" && props.email !== "" && props.date !== "" && props.tel !== "" && props.head !== "") {
      let formData = new FormData();

      formData.append("name", props.name);
      formData.append("email", props.email);
      formData.append("tel", props.tel);
      formData.append("head", props.head);
      formData.append("date", props.date);
      console.log(props);

      await axios({
        method: "POST",
        url: "http://localhost:3001/bookatable",
        data: formData,
      })
        .then((response) => setData(response.data))
        .then(setLoading(false))
        .then(setEmptyCheck(false));
    } else {
      setEmptyCheck(true);
    }
    
    /////////////////////////////////
  };

  return (
    <div className="reservationButton">
      <button onClick={reserve} type="submit">
        Foglalás elküldése!
      </button>
      {emptyCheck === false ? (
        loading === false ? (
          data.msg === "failed" ? (
            <div className="bookmsg"> Már van foglalva asztal ezen a néven</div>
          ) : (
            <>
              <div className="bookmsg">Sikeres asztalfoglalás!</div>
            </>
          )
        ) : (
          <> </>
        )
      ) : (
        <div className="bookmsg">Kérlek adj meg minden adatot!</div>
      )}
    </div>
  );
};

export default ReservationButton;
