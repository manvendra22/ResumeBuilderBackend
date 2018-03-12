const jwt = require('jsonwebtoken'),
  UserModel = require('./../models/userModel');

exports.display = (req, res, next) => {
    // after token verification
    const token = {}

    UserModel.findOne({
        email: token.email
    }, (err, user) => {
        if(err) throw err;
        if(!user) {
            res.status(401).json({message: "Authentication failed, User not found"})
        } else if(user) {
            if(!comparePassword(req.body.password, user.password)) {
                res.status(401).json({message: "Authentication failed, Wrong password"})
            } else {
                return res.json({ resume: user.resume })
            }
        }
    })
}

exports.user_templates = (req, res, next) => {
    // after token verification
    const token = {}

    UserModel.findOne({
        email: token.email
    }, (err, user) => {
        if(err) throw err;
        if(!user) {
            res.status(401).json({message: "Authentication failed, User not found"})
        } else if(user) {
            if(!comparePassword(req.body.password, user.password)) {
                res.status(401).json({message: "Authentication failed, Wrong password"})
            } else {
                return res.json({ templates: user.templates })
            }
        }
    })
}