const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TagSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 40,
    minLength: 1,
    text: true,
  },
});

// Virtual for URL
TagSchema.virtual("url").get(function () {
  return `/tag/${this.name}`;
});

// Export model
module.exports = mongoose.model("Tag", TagSchema);
