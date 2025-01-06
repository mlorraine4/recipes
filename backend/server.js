const express = require("express");
const app = express();
const port = 4000;

const indexRouter = require("./routes/index");

// Router
app.use("/", indexRouter);
// app.use("/user-api", userRouter);
// app.use("/recipe-api", recipeRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
