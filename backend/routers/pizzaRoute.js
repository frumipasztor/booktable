const express = require('express');
router = express.Router();
pizzaRoute = require("../controllers/pizzaController");

router.get("/", pizzaRoute.pizzaController);

module.exports = router;