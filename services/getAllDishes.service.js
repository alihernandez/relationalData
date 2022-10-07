const getAllDishes = require("../controllers/getAllDishes.controller")

const getAllDishService = async (req,res) => {
    const results = await getAllDishes.getAllDishes(req,res);
    res.json(results);
}

module.exports = {
    getAllDishService :getAllDishService
}