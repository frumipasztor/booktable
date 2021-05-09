import React, { useState } from "react";
import "./form.scss";
import ReservationButton from "./reservationButton";
import TextField from "@material-ui/core/TextField";
import "./responsivity.scss";

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

  let today = new Date();
  today.setHours(today.getHours() + 1);
  today = today.toISOString().slice(0, 16);
 // console.log(today);

  return (
    <div className="regPage">
      <form >
        <TextField
          onChange={(e) => nameChange(e)}
          variant="filled"
          label="Név"
          type="text"
          value={name}
        />
        <TextField
          label="E-mail"
          onChange={(e) => emailChange(e)}
          variant="filled"
          value={email}
          type="email"
        />
        <TextField
          label="Telefonszám"
          onChange={(e) => telChange(e)}
          variant="filled"
          value={tel}
          type="text"
        />
        <TextField
          onChange={(e) => headChange(e)}
          variant="filled"
          label="Hány főre szeretnél foglalni?"
          type="number"
          value={head}
          InputProps={{ inputProps: { min: 1, max: 8 } }}
        />
        <TextField
          id="datetime-local"
          variant="filled"
          label="Asztalfoglalás időpontja"
          type="datetime-local"
          value={date}
          onChange={(e) => dateChange(e)}
          InputProps={{ inputProps: { min: today, max: "2031-05-30T17:27" } }}
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
