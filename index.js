const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "running" });
});

require("./app/routes/user.routes.js")(app);

app.listen(port, () => {
  console.log(`App running http://localhost:${port}`);
});
