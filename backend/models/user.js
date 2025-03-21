const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, maxLength: 15 },
  password: { type: String, required: true },
  is_admin: { type: Boolean, required: true },
});

// Export model
module.exports = mongoose.model("User", UserSchema);
