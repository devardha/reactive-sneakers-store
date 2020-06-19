const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

const salt = 10;

// Add USer
router.route('/').post((req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
        .then(user => {
            if(!user){ return res.status(400).json({ msg: "User does not exist" }) }

            // Validate Password
            bcrypt.compare(password, user.password)
                .then(match => {
                    if(!match){ return res.status(400).json({msg: "Invalid credentials"}) }

                    jwt.sign(
                        { id: user._id },
                        process.env.SECREET,
                        { expiresIn: '1d'},
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

        })

});

// Get Uthenticated User
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
})

module.exports = router;