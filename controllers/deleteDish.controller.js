const db = require("../database/db");
const deleteDish = async (req, res) => {
    const result = await db.query(
        `DELETE FROM dishInfo WHERE ID = ${req.params.id}`
    );
    return result;
};

module.exports = {
    deleteDish: deleteDish,
}