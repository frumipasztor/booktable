const router = require("express").Router();
const pizza = require("../controllers/pizza");
const topPizza = require("../controllers/topPizza");

router.get("/pizza", pizza);

router.get("/topPizza", topPizza);

module.exports = router;