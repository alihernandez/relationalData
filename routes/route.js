const express = require("express");
const createDishService = require("../services/createDish.service");
const deleteDishService = require("../services/deleteDish.seervice");
const getAllDishService = require("../services/getAllDishes.service");
// const getDishService = require("../services/");
const updateDishService = require("../services/updateDish.service");
const router = express.Router();

//READ ALL
router.route("/").get(getAllDishService.getAllDishService);

//READ ONE
// router.route("/:id").get(getDishService.getDishService);

//CREATE
router.route("/").post(createDishService.createDishService);

//UPDATE
router.route("/:id").put(updateDishService.updateDishService);

//DELETE
router.route("/:id").delete(deleteDishService.deleteDishService);

module.exports = router;