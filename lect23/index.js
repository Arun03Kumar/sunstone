const express = require("express");

const app = express();

app.use(express.json());

app.get("/users/:userId/order/:orderId", (req, res) => {
  console.log(req.params);
  res.send("ok");
});

app.get("/users/:userId/order/:orderId/item/:itemId", (req, res) => {
  console.log(req.params);
  res.send("ok");
});

app.get("/products", (req, res) => {
  console.log(req.query);
  res.send("ok");
});

app.post("/register", (req, res) => {
  console.log(req.headers);
  console.log(req.body);
  res.send("ok");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
