const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
require("dotenv").config();
require("./app");


passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      // Handle user authentication and store user information
      // You can access user profile information in the 'profile' object
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return done(err, user);
      // });
      if (profile) {
        console.log("Profile exists");
        console.log(profile)
        return done(null, profile);
      } else {
        console.log("Profile does not exist");
        return done(null, false);
      }
    }
  )
);

// Configure session serialization and deserialization if required

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
