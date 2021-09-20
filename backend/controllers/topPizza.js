const topPizza  = async (req, res) => {
    const TopPizza = require("../models/topPizza.model");

    let topPizza = await TopPizza.find();
    
    res.json(topPizza)
}

module.exports = topPizza;