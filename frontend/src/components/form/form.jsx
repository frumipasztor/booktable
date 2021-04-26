import React, {useState} from "react";
// import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
// import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './form.scss';
import ReservationButton from "./reservationButton";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const dateChange = (e) => {
    setDate(e.target.value);
  }

    return (
      <form className="regForm">
      <input type="text" id="name" placeholder="name" value={name} onChange={(e) => nameChange(e)}></input>
      <input type="email" id="email" placeholder="email" value={email} onChange={(e) => emailChange(e)}></input>
      <input type="datetime-local" id="date" value={date} onChange={(e) => dateChange(e)}></input>
      {/* <TextBoxComponent placeholder="Név" floatLabelType="Auto" type="text" id="name"  value={name} onChange={(e) => nameChange(e)}/>
      <TextBoxComponent placeholder="E-mail cím" floatLabelType="Auto" type="email" id="email" value={email} onChange={(e) => emailChange(e)}/>
      <DateTimePickerComponent id="datetimepicker" className="date" value="date" onChange={(e) => dateChange(e)}/> */}
      <ReservationButton name={name} email={email} date={date}  />
      </form>
    );
};

export default RegistrationForm;
