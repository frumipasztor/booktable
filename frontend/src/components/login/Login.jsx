import axios from "axios";
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "./login.scss";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  // Sikeres volt-e a bejelentkezés vagy nem
  const [isLogged, setIslogged] = useState(false);

  const changeLog = () => {
    setIslogged(true);
  };
//   const logOut = () => {
//     setIslogged(false);
//     // setIsLogOut(true);
//   };

  useEffect(() => {
    if (data !== null) {
      if (data.data.msg === "ok") {
        setIslogged(true);
      } else {
        alert("Hibás felhasználónév vagy jelszó!");
      }
    }
  }, [data]);

  const LoginButton = (props) => {
    // Ez vizsgálja hogy van e ilyen user-password pár ha igen akkor {msg: "ok"}

    const login = async (e) => {
      e.preventDefault();

      const formData = new FormData();

      formData.append("username", props.username);
      formData.append("password", props.password);

      await axios({
        method: "POST",
        url: "http://localhost:3001/login",
        data: formData,
      }).then((response) => setData(response));
    };

    return <button onClick={login}>Bejelentkezés</button>;
  };

  if (!isLogged) {
    return (
      <div className="loginForm">
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            label="Felhasználónév"
            type="text"
            variant="filled"
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            label="Jelszó"
            type="password"
            variant="filled"
          />

          <LoginButton
            changeLog={changeLog}
            username={username}
            password={password}
          />
        </div>
    );
   } else {
      window.location.href='/adminDashboard';
   }
};

export default LoginPage;
