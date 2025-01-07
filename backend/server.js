const express = require("express");
const app = express();
const port = 4000;

const indexRouter = require("./routes/index");

// Mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGO_URI;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// Router
app.use("/", indexRouter);
// app.use("/user-api", userRouter);
// app.use("/recipe-api", recipeRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
