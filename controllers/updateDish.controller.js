const db = require("../database/db");
const updateDish = async (req, res) => {
  requestDish = req.body.dishInfo;
  const result = await db.query(
    `UPDATE dishInfo SET dishName = 
        '${requestBody.dishName}', userName=${requestBody.userName}, description='${requestBody.description}' `
  );
  return result;
};

module.exports = {
    updateDish: updateDish,
};
