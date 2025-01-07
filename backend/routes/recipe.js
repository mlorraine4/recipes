const express = require("express");
const router = express.Router();

const recipeController = require("../controllers/recipeController");
// /recipe-api route

// Get list of all recipes
router.get("/", recipeController.list_get);
// Add recipe
router.post("/", recipeController.list_post);
// Get recipe details
router.get("/:id", recipeController.recipe_get);
// Update recipe
router.put("/:id", recipeController.recipe_put);
// Delete recipe
router.delete("/:id", recipeController.recipe_delete);

module.exports = router;
