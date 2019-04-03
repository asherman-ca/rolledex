const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const nodemailer = require('nodemailer');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const validateResetInput = require('../../validation/reset');
const validateRecoverInput = require('../../validation/recover');

// load User model from mongoose

const User = require('../../models/User');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public

router.get('/test', (req, res) => {
  res.json({
    msg: 'Users Works'
  });
});

// @route   POST api/users/register
// @desc    Register user
// @access  Public

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200', // Size
        r: 'pg', // Rating
        d: 'mm' // Default
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   POST api/users/login
// @desc    Login User / return JWT Token
// @access  Public

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // check validation
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // find user by email
  User.findOne({ email }).then(user => {
    // check for user (404 means not found)
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }

    // check Password

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // user matched

        const payload = { id: user.id, name: user.name, avatar: user.avatar };
        // sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        errors.password = 'Incorrect Password';
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   POST api/users/reset
// @desc    Reset user's password
// @access  Private

router.post(
  '/reset', 
  passport.authenticate('jwt', { session: false}),
  (req, res) => {
    const { errors, isValid } = validateResetInput(req.body);

    // check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    var newPassword = req.body.password 
    
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newPassword, salt, (err, hash) => {
        if (err) throw err;
        newPassword = hash;
        changeFields = {password: newPassword}

        User.findOneAndUpdate(
          { _id: req.user.id },
          { $set: changeFields },
          { new: true })
          .then(user => { res.json(user)})
      });
    });
  }
)

// @route   POST api/users/recover/:email
// @desc    Begin password Recovery
// @access  Public

router.post(
  '/recover/:email',
  (req,res) => {
    const { errors, isValid } = validateRecoverInput({email: req.params.email});

    // check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    let recoverFields = {
      recover_token: 'a8eb63kkn2',
      recover_token_exp: Date.now()
    }
    User
      .findOneAndUpdate(
        { email: req.params.email },
        { $set: recoverFields },
        { new: true })
      .then(user => {
        if (!user) {
          errors.email = 'No account for this email'
          return res.status(404).json(errors);
        }

        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'rolledex@gmail.com',
            pass: 'Needs2Change!'
          }
        });
        var mailOptions = {
          from: 'rolledex@gmail.com',
          to: req.params.email,
          subject: 'Rolledex Password Recovery',
          text: 'Follow this link to reset your account: www.rolledex.com/recover/a8eb63kkn2'
        };
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
        console.log(user)
    }).
    catch(err => res.status(404).json({ email: 'email not found' }))
  }
)

// @route   POST api/users/recoverresewt/:token
// @desc    Finalize password Recovery
// @access  Public



// @route   POST api/users/current
// @desc    Return current user
// @access  Private

router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
