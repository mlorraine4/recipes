const express = require("express");
const router = express.Router();

const tagController = require("../controllers/tagController");
// /recipe-api route

// Get recipes by tag name
router.get("/:name", tagController.list_get);

module.exports = router;
