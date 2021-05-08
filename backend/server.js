const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const passwordHash = require("password-hash");
let jsonData = require("./users.json");
const path = require("path");

//! rendelés mentése
const fs = require("fs");
let jsonBookingData = require("./costumers.json");
const fileUpload = require("express-fileupload");

app.use(cors());

app.get("/", (req, res) => res.send("Hello world"));

app.use("/pizza/", require("./routers/pizzaRoute"));
app.use("/toppizza/", require("./routers/topPizzaRoute"));
app.get("/bookings", (req, res) => res.send(jsonBookingData));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//! file feltöltés
 app.use(fileUpload());

app.post("/bookatable", function (req, res) {
  let costumer = {
    name: req.body.name,
    email: req.body.email,
    tel: req.body.tel,
    head: req.body.head,
    date: req.body.date,
  };

  if (
    jsonBookingData.some(
      (jsonBookingData) => jsonBookingData.email === req.body.email
    )
  ) {
    res.json({ msg: "failed", email: req.body.email });
  } else {
    jsonBookingData.push(costumer);

    let data = JSON.stringify(jsonBookingData, null, 2);

    fs.writeFile("costumers.json", data, "utf8", (err) => {
      if (err) {
        console.log("write file => " + err);
      } else {
        res.json({
          msg: "success",
          name: req.body.name,
          email: req.body.email,
          date: req.body.date,
        }); // send the client something
      }
    });
  }
});

//!Jelszó generálás adminhoz

// const hashedPassword = passwordHash.generate("admin");

// console.log(hashedPassword);

//! Login form

app.post("/login", async (req, res) => {
    // const username = await req.body.username;
    // const password = await req.body.password;

    let findResult = await jsonData.find(
        (user) => user.username === req.body.username
    );
    if (
        !findResult ||
        (typeof findResult === "object" &&
            !passwordHash.verify(req.body.password, findResult.password))
    ) {
        // res.status(400).send();
        res.json({ msg: "Wrong username or password" });
    } /* else if (
        typeof findResult === "object" &&
        !passwordHash.verify(req.body.password, findResult.password)
    ) {
        res.json({ msg: "Wrong username or password" });
    } */ else if (
        typeof findResult === "object" &&
        passwordHash.verify(req.body.password, findResult.password)
    ) {
        res.json({ msg: "ok" });
        console.log("ok");
    }
});