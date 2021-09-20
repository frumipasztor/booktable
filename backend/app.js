const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

//Import routes
const Route = require("./routes/Route");

//Middlewares
app.use(express.json());

app.use("/api", Route);

app.get("/test", async (req, res) => {
    res.json({message: "pass!"});
})

module.exports = app;
