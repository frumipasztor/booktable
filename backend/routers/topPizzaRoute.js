const express = require('express');
router = express.Router();
topPizzaRoute = require("../controllers/topPizzaController");

router.get("/", topPizzaRoute.topPizzaController);

module.exports = router;