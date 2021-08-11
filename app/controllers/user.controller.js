const User = require("../models/user.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Payload is empty!",
    });
  }

  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    expertise_id: req.body.expertise_id,
    date_of_birth: req.body.date_of_birth,
  });

  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Error while creating the User",
        errorCode: err.code || "",
      });
    else res.send(data);
  });
};

exports.login = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Payload is empty!",
    });
  }

  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  User.login(user, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Error while creating the User",
        errorCode: err.code || "",
      });
    else res.send(data);
  });
};
