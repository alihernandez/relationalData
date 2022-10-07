const db = require("../database/db");
const updateDish = async (req, res) => {
  requestDish = req.body.dishInfo;
  const result = await db.query(
    `UPDATE dishInfo SET dish_name = 
        '${requestBody.dish_name}', user_name=${requestBody.user_name}, description='${requestBody.description}' `
  );
  return result;
};

module.exports = {
    updateDish: updateDish,
};
