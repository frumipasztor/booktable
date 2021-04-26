const express = require("express");
const app = express();
const port = 3001;
const cors = require('cors');


//! rendelés mentése
const fs = require('fs');
let jsonData = require("./costumers.json");
const fileUpload = require("express-fileupload");

app.use(cors());

app.get("/", (req, res) => res.send("Hello world"));

app.use("/pizza/", require('./routers/pizzaRoute'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//! file feltöltés
app.use(fileUpload());


    app.post("/bookatable", function (req, res) {
      
        let costumer = {
            name: req.body.name,
            email: req.body.email,
            date: req.body.date,
        };

        if (jsonData.some((jsonData) => jsonData.email === req.body.email)) {
            res.json({ msg: "failed", email: req.body.email });
        } else {
            jsonData.push(costumer);
    
            let data = JSON.stringify(jsonData, null, 2);
    
            fs.writeFile("costumers.json", data, "utf8", (err) => {
                if (err) {
                    console.log("write file => " + err);
                } else {
                    res.json({
                        msg: "success",
                        name: req.body.name,
                        email: req.body.email,
                        date: req.body.date,
                    }
                    ); // send the client something
                }
            });

        }});