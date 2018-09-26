const jwt = require("jsonwebtoken");
const UserModel = require("./../models/userModel");

exports.get_user_resume = (req, res, next) => {
  // after token verification
  const token = {};

  UserModel.findOne(
    {
      email: token.email
    },
    (err, user) => {
      if (err) throw err;
      if (!user) {
        res
          .status(401)
          .json({ message: "Authentication failed, User not found" });
      } else {
        return res.json({ resume: user.resume });
      }
    }
  );
};

exports.get_user_templates = (req, res, next) => {
  // after token verification
  const token = {};

  UserModel.findOne(
    {
      email: token.email
    },
    (err, user) => {
      if (err) throw err;
      if (!user) {
        res
          .status(401)
          .json({ message: "Authentication failed, User not found" });
      } else {
        return res.json({ templates: user.templates });
      }
    }
  );
};

exports.post_user_data = (req, res, next) => {
  // after token verification
  const token = {};

  UserModel.findOne(
    {
      email: token.email
    },
    (err, user) => {
      if (err) throw err;
      if (!user) {
        res
          .status(401)
          .json({ message: "Authentication failed, User not found" });
      } else if (user) {
        // store user data in db
      }
    }
  );
};

exports.delete_user_template = (req, res, next) => {
  // after token verification
  const token = {};

  UserModel.findOne(
    {
      email: token.email
    },
    (err, user) => {
      if (err) throw err;
      if (!user) {
        res
          .status(401)
          .json({ message: "Authentication failed, User not found" });
      } else if (user) {
        // delete user template in db
      }
    }
  );
};

exports.update_user_data = (req, res, next) => {
  // after token verification
  const token = {};

  UserModel.findOne(
    {
      email: token.email
    },
    (err, user) => {
      if (err) throw err;
      if (!user) {
        res
          .status(401)
          .json({ message: "Authentication failed, User not found" });
      } else if (user) {
        // update user data in db
      }
    }
  );
};

exports.get_all_templates = (req, res, next) => {
  // after token verification
  const token = {};

  UserModel.findOne(
    {
      email: token.email
    },
    (err, user) => {
      if (err) throw err;
      if (!user) {
        res
          .status(401)
          .json({ message: "Authentication failed, User not found" });
      } else {
        // new template model in db
      }
    }
  );
};
