const _ = require('lodash');
const User = require('../models/user');
const Module = require('../models/module');


exports.userById = (req, res, next, id) => {
    User.findById(id)
        // populate followers and following users array
        .populate('modules')
        .exec((err, user) => {
            if (err || !user) {
                return res.status(400).json({
                    error: 'User not found'
                });
            }
            req.profile = user; // adds profile object in req with user info
            next();
        });
};

exports.hasAuthorization = (req, res, next) => {
    let adminUser = req.auth.role === 'admin';

    const authorized = adminUser;

    // console.log("req.profile ", req.profile, " req.auth ", req.auth);

    if (!authorized) {
        return res.status(403).json({
            error: 'User is not authorized to perform this action'
        });
    }
    next();
};

exports.allUsers = (req, res) => {
    User.find()
    .populate('modules')
    .exec()
    .then(users => {
        res.status(200).json(users)
    })
};

exports.getUser = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};



exports.updateUser = (req, res) => {
    console.log(req.body);
    Module.findByIdAndUpdate({_id:req.body._id}, { $set: { 
        "moduleTitle": req.body.moduleTitle,
        "Note": req.body.Note,
             } })
    .exec((err, result) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(result);
        console.log(result);
    });
        // console.log("USER FORM DATA UPDATE: ", user);
};



exports.deleteUser = (req, res, next) => {
    let user = req.body._id;
    User.deleteOne({ _id: user },  function (err, _) {
        if (err) {
            return console.log(err);
        }
        
    });

        }
