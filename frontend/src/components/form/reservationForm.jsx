import React, { useState } from "react";
import "./form.scss";
import ReservationButton from "./reservationButton";
import TextField from "@material-ui/core/TextField";


const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [head, setHead] = useState("");
  const [tel, setTel] = useState("");


  const nameChange = (e) => {
    setName(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const telChange = (e) => {
    setTel(e.target.value);
  };

  const headChange = (e) => {
    setHead(e.target.value);
  };

  const dateChange = (e) => {
    setDate(e.target.value);
  };


  return (
    <div className="regPage">
      <form>
      <TextField
        onChange={(e) => nameChange(e)}
        label="Név"
        type="text"
        value={name}
      />
      <TextField
        label="E-mail"
        onChange={(e) => emailChange(e)}
        value={email}
        type="email"
      />
      <TextField
        label="Telefonszám"
        onChange={(e) => telChange(e)}
        value={tel}
        type="tel"
        pattern="[0-9]{11}"
      />
      <TextField
        onChange={(e) => headChange(e)}
        label="Hány főre szeretnél foglalni?"
        type="number"
        value={head}
        min="1"
        max="8"
      />
      <TextField
        id="datetime-local"
        label="Asztalfoglalás időpontja"
        type="datetime-local"
        value={date}
        onChange={(e) => dateChange(e)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      
      <ReservationButton
        name={name}
        email={email}
        tel={tel}
        date={date}
        head={head}
      />
      </form>
    </div>
  );
};

export default RegistrationForm;
