module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  app.post("/users", users.create);
  app.post("/login", users.login);
};
