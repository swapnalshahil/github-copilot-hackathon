const express = require("express");
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const userRoute = require("./routes/users/userRoutes");
require("./GoogleOAuth");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

// Session configuration
app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", userRoute);

// Google authentication routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/auth/protected",
    failureRedirect: "/auth/google/failure",
  })
);

app.get("/auth/protected", isLoggedIn, (req, res) => {
  let username = req.user.displayName;
  res.send(`Welcome ${username}`);
});

app.get("/auth/google/failure", (req, res) => {
  res.send("Something went wrong with Google authentication");
});

module.exports = app;
