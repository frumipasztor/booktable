import React, { useState } from "react";
import "./form.scss";
import ReservationButton from "./reservationButton";
//import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

  

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [head, setHead] = useState("");
  const [tel, setTel] = useState("");

  //const classes = useStyles();

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
      <h2>Asztalfoglalás</h2>
      <span className="decorSpan"></span>

      <form className="regForm">
        <label className="label-name">
          Név
          <input
            type="text"
            id="name"
            value={name}
            required
            onChange={(e) => nameChange(e)}
          ></input>
        </label>
        <label className="label-name">
          E-mail cím
          <input
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => emailChange(e)}
          ></input>
        </label>
        <label className="label-name">
          Telefonszám
          <input
            type="tel"
            id="tel"
            value={tel}
            required
            onChange={(e) => telChange(e)}
          ></input>
        </label>
        <label className="label-name">
          Hány főre szeretnél asztalt foglalni?
          <input
            type="number"
            id="head"
            value={head}
            required
            min="1"
            max="8"
            onChange={(e) => headChange(e)}
          ></input>
        </label>
        <label className="label-name">
          Asztalfoglalás időpontja
          <input
            type="datetime-local"
            id="date"
            value={date}
            required
            onChange={(e) => dateChange(e)}
          ></input>
        </label>
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
