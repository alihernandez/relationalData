const db = require("../database/db");

const getAllDishes = async (req,res) => {
    const results = await db.query("SELECT * FROM dishInfo");
    console.log("results",results)
    return results
}

module.exports={
    getAllDishes :getAllDishes
}