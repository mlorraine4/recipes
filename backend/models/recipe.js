const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  name: { type: String, required: true, maxLength: 40, text: true },
  instructions: { type: String, required: true },
  ingredients: [
    {
      ingredient: { type: String, required: true, text: true },
      quantity: { type: String, required: false },
      quantityType: { type: String, required: false },
    },
  ],
  imgs: [{ type: String }],
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag", required: true }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  linkedRecipes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
});

RecipeSchema.virtual("url").get(function () {
  return `/recipe/${this._id}`;
});

// Export model
module.exports = mongoose.model("Recipe", RecipeSchema);
