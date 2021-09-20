const pizza  = async (req, res) => {
    const Pizza = require("../models/pizza.model");

    let pizza = await Pizza.find();
    
    res.json(pizza)
}

module.exports = pizza;