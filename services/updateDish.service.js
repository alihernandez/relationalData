const updateDish = require("../controllers/updateDish.controller");

const updateDishService = async (req, res) => {
    const dishTest = req.body.dishInfo.dish_name;
    if (dishTest.toString().length > 2) {
        const result = await createDish.createDish(req, res);
        if (result.affectedRows)
            res.json({ status: 200, message: "inserted successfully!" });
        else
            res.json({
                status: 400,
                message: "error occured during INSERT",
            });
    } else {
        res.json({
            status: 400,
            message: "Dish Name should be longer than 2 characters!",
        });
    }
};

module.exports = {
    updateDishService: updateDishService,
}