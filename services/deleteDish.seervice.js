const { deleteDish } = require("../controllers/deleteDish.controller");
const delteDish = require("../controllers/deleteDish.controller");

const deleteDishService = async (req, res) => {
    const result = await deleteDish.deleteDish(req, res);

    if (result.affectedRows) {
        res.json({ status: 200, message: "deleted successfully!" });
        console.log("Hello!");
    } else {
        res.json({
            status: 400,
            message: "Error occured during DELETE",
        });
    }
};

module.exports = {
    deleteDishService: deleteDishService,
};