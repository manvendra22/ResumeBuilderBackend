const jwt = require('jsonwebtoken'),
  bcrypt = require('bcrypt'),
  UserModel = require('./../models/userModel');

let comparePassword = (password, hash_password) => {
    return bcrypt.compareSync(password, hash_password)
}

exports.register = (req, res) => {

    let hash_password = bcrypt.hashSync(req.body.password, 10);

    UserModel.create({
        name : req.body.name,
        email : req.body.email,
        password : hash_password
    }, (err, user) => {
        if(err) {
            return res.status(400).send({ message: err });
        } else {
            return res.json({ token: jwt.sign({ email: user.email, fullname: user.fullname, _id: user._id }, "SECRETKEY") })
        }
    })

};

exports.login = (req, res) => {
    UserModel.findOne({
        email:req.body.email
    }, (err, user) => {
        if(err) throw err;
        if(!user) {
            res.status(401).json({message: "Authentication failed, User not found"})
        } else if(user) {
            if(!comparePassword(req.body.password, user.hash_password)) {
                res.status(401).json({message: "Authentication failed, Wrong password"})
            } else {
                return res.json({ token: jwt.sign({ email: user.email, fullname: user.fullname, _id: user._id }, "SECRETKEY") })
            }
        }
    })
};

exports.login_required = (req, res, next) => {
    if(req.user) {
        next();
    }
    else {
        return res.status(401).json({ message: 'Unauthorized user!' });
    }
};