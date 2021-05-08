import axios from "axios";
import React, { useState, useEffect } from "react";

const LoginButton = (props) => {
    // Ez vizsgálja hogy van e ilyen user-password pár ha igen akkor {msg: "ok"}
    const [data, setData] = useState(null);

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

    useEffect(() => {
        if (data !== null) {
            if (data.data.msg === "ok") {
                console.log("ok");
            } else {
                alert("Wrong username or password");
            }
        }
    }, [data]);

    return <button className="loginBtn" onClick={login}>Log In!</button>;
};

export default LoginButton;