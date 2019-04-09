const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new jwtStrategy(options, (jwt_payload, done) => {
      User.findById(jwt_payload.id).then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      });
    })
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: 'http://localhost:5000/api/users/auth/google/callback',
        proxy: true
      },
      async (accessToken, refreshToken, profile, done) => {
        return done(console.log(profile))
        // const existingUser = await User.findOne({ googleId: profile.id });
        // if (existingUser) {
        //   return done(null, existingUser);
        // }
        // const user = await new User({ googleId: profile.id }).save();
        // done(null, user);
      }
    )
  );
};
