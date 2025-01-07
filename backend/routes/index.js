const express = require("express");
const router = express.Router();

const indexController = require("../controllers/indexController");

// Get home page
router.get("/", indexController.index_get);

module.exports = router;
