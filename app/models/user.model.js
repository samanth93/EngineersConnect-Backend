const sql = require("./db.js");

// constructor
class User {
  constructor(user) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.password = user.password;
    this.gender = user.gender;
    this.expertise_id = user.expertise_id;
    this.date_of_birth = user.date_of_birth;
  }
  static create(newUser, result) {
    sql.query("INSERT INTO USERS SET ?", newUser, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("user inserted: ", { id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser });
    });
  }

  static login(newUser, result) {
    console.log(
      `SELECT * FROM USERS WHERE EMAIL = "${newUser.email}" AND PASSWORD = "${newUser.password}"`
    );
    sql.query(
      `SELECT * FROM USERS WHERE EMAIL = "${newUser.email}"`,
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        } else {
          if (res.length == 0) {
            result(null, "Email not registered");
          } else {
            sql.query(
              `SELECT * FROM USERS WHERE EMAIL = "${newUser.email}" AND PASSWORD = "${newUser.password}"`,
              (err, res) => {
                if (err) {
                  console.log("error: ", err);
                  result(err, null);
                  return;
                } else {
                  if (res.length == 0) {
                    result(null, "Password incorrect");
                  } else {
                    result(null, "Login successful");
                  }
                }
              }
            );
          }
        }
      }
    );
  }
}

module.exports = User;
