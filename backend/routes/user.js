const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
// /user-api route

// Add user
router.post("/", userController.list_post);
// Get user details
router.get("/:id", userController.user_get);
// Update user
router.put("/:id", userController.user_put);
// Delete user
router.delete("/:id", userController.user_delete);

module.exports = router;
