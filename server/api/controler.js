const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


module.exports = {
    getAllUsers: (req, res) => {
        User.find().then((users) => {
            res.status(200).json({
                users
            });
        }).catch(error => {
            res.status(500).json({
                error
            });
        });

    },
    signup: (req, res) => {
        const { name, email} = req.body;

        // Drink.findById(drinkId).then((drink) =>{
        //     if(!drink){
        //         return res.status(404).json({
        //             message:"drink not found"
        //         });
        //     }

        User.find({ name }).then((users) => {
            if (users.length >=1) {
                return res.status(409).json({
                    message: "name exsist"
                })
            }
                const user = new User({
                    _id: new mongoose.Types.ObjectId(),
                    name,
                    email
                })

                user.save().then((result) => {
                    console.log(result);
                    res.status(200).json({
                        user
                    });
                }).catch(error => {
                    res.status(500).json({
                        error
                    })
                })
        })
    }
}