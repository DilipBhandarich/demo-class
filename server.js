import express from "express";
import sum from "./sum.js";
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

app.get("/home", (req, res) => {
  res.json({
    msg: "Welcome to the home page",
  });
});

app.get("/getSum/:a/:b", (req, res) => {
  const { a, b } = req.params;
  res.json({
    ans: sum(parseInt(a), parseInt(b)),
  });
});
