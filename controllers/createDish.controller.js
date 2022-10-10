const db = require("../database/db");

const createDish = async (req,res) => {
    console.log(req.body.dishInfo)
    const requestBody = req.body.dishInfo;
    const results = await db.query(
        `INSERT INTO dishInfo(dishName, userName, description) VALUES
        ('${requestBody.dishName})','${requestBody.userName})','${requestBody.description})'`
    );
    return results;
}

module.exports = {
    createDish: createDish,
}