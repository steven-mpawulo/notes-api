const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const passportAuthentication = () => {
    passport.use(new LocalStrategy({
        usernameField: 'email'
    },
        async function (username, password, done) {
            console.log(`username: ${username}, password: ${password}`);
            await User.findOne({ 'email': username }).then(async (user) => {
                console.log(user);
                if (!user) { return done(null, false, {message: "user not found"});}
                const verifyPassword = await bcrypt.compare(password, user.password);
                if (!verifyPassword) { return done(null, false, {message: "incorrect password"}); }
                return done(null, user);
            }).catch((e) => {
                console.log(e);
                if (e) { return done(e, {message: "something went wrong"}); }
            });
        }
    ));
    passport.serializeUser(function(user, cb) {
        process.nextTick(function() {
          cb(null, { id: user._id, username: user.username });
        });
      });
      
      passport.deserializeUser(function(user, cb) {
        process.nextTick(function() {
          return cb(null, user);
        });
      });
}

module.exports = passportAuthentication;