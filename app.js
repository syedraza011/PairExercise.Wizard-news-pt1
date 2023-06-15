const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
// app.use(morgan("dev"))
// This middleware will not allow the
// request to go beyond it
app.use(function (req, res, next) {
  console.log("Middleware called")
  next();
});
