const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/users", (req, res) => {
  res.json([
    {
      id: 1,
      username: "farida"
    },
    {
      id: 2,
      username: "eslam"
    }
  ]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
