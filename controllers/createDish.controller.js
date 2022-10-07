const db = require("../database/db");

const createDish = async (req,res) => {
    console.log(req.body.dishInfo)
    const requestBody = req.body.dishInfo;
    const results = await db.query(
        `INSERT INTO dishInfo(dish_name, user_name, description) VALUES
        ('${requestBody.dish_name})','${requestBody.user_name})','${requestBody.description})'`
    );
    return results;
}

module.exports = {
    createDish: createDish,
}