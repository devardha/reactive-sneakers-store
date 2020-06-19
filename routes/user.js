const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const salt = 10;

// Get All User
router.get('/', (req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
})

// Get User by Email
router.get('/:id', (req, res) => {
    User.findOne({_id: req.params.id})
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
})

// Add USer
router.post('/add', (req, res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
        .then(user => {
            if(user){ return res.status(400).json({ msg: "User already exist" }) }

            const newUser = new User({
                firstname,
                lastname,
                email,
                password
            });
        
            bcrypt.genSalt(salt, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
        
                    newUser.save()
                    .then( user => {
                        
                        jwt.sign(
                            { id: user._id },
                            process.env.SECREET,
                            { expiresIn: '1d' },
                            (err, token) => {
        
                                if(err){ throw err }
        
                                res.json({
                                    token,
                                    firstname: user.firstname,
                                    lastname: user.lastname,
                                    email: user.email
                                })
                            }
                        )
                    })
                    .catch((err) => res.status(500).json('Error: ' + err));
                })
            })

        })

});

module.exports = router;