const express = require("express");
const router = express.Router();

const recipeController = require("../controllers/recipeController");

// Get list of all recipes
router.get("/recipes", recipeController.list_get);
// Add recipe
router.post("/recipes", recipeController.list_post);
// Get recipe details
router.put("/recipes/:id", recipeController.recipe_get);
// Update recipe
router.put("/recipes/:id", recipeController.recipe_put);
// Delete recipe
router.delete("/recipes/:id", recipeController.recipe_delete);

module.exports = router;
