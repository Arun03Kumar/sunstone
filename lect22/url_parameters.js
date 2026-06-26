const express = require("express");

const app = express();

// app.get("/profile/1", (req, res) => {
//   res.send("This is the profile page for user 1");
// });

// app.get("/profile/2", (req, res) => {
//   res.send("This is the profile page for user 2");
// });

// app.get("/profile/3", (req, res) => {
//   res.send("This is the profile page for user 3");
// });

// app.get("/profile/4", (req, res) => {
//   res.send("This is the profile page for user 4");
// });

app.get("/profile/:abc", (req, res) => {
  console.log(req.params);
  const userId = req.params.abc;
  const { abc } = req.params;
  res.send(`This is the profile page for user ${userId}`);
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
