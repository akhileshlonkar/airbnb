if(process.env.NODE_ENV!="production"){
  require('dotenv').config();
}

console.log(process.env.secret);
/* =========================
   IMPORTS & REQUIREMENTS
========================= */
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const flash = require("connect-flash");
const multer  = require('multer');
const {storage}=require("./cloudconfig.js");
const upload = multer({storage});
const MongoStore = require('connect-mongo').default
const PORT = process.env.PORT;

/* =========================
   MODELS
========================= */
const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const User = require("./models/user.js");
const dburl=process.env.ATLAS_URL;
/* =========================
   APP INITIALIZATION
========================= */
const app = express();

/* =========================
   VIEW ENGINE & MIDDLEWARE
========================= */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

/* =========================
   SESSION & FLASH
========================= */

const store = MongoStore.create({
  mongoUrl: dburl,
  crypto: { secret: process.env.SECRET },
  touchAfter: 24 * 3600,
});

app.use(session({
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.use(flash());

/* =========================
   PASSPORT CONFIGURATION
========================= */
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* =========================
   GLOBAL LOCALS
========================= */
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
}); 

/* =========================
   DATABASE CONNECTION
========================= */
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(dburl);
}

const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "You must be logged in");
    return res.redirect("/login");
  }
  next();
};

/* =========================
   LISTING ROUTES
========================= */

// INDEX
app.get("/listing" , async (req, res) => {
  const list = await Listing.find();

  res.render("index.ejs", { list });
});

// SHOW
app.get("/listing/show/:id", async (req, res) => {
  const { id } = req.params;
  const a = await Listing.findById(id).populate("reviews");
  res.render("show.ejs", { a });
});

// NEW
app.get("/listing/new", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  res.render("new.ejs");
});

// CREATE
app.post("/listing", isLoggedIn, async (req, res) => {
  const { title, description, price, location, country, image } = req.body;

  const newListing = new Listing({
    title,
    description,
    price,
    location,
    country,
    image, // ✅ URL string from form
  });

  newListing.owner = req.user._id;
  await newListing.save();

  res.redirect("/listing");
});

app.get('/', (req, res) => {
  res.send('App is running on Render!');
});

// EDIT
app.get("/listing/edit/:id", async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }

  const { id } = req.params;
  const a = await Listing.findById(id);
  res.render("edit.ejs", { a });
});

// UPDATE
app.put("/listing/:id", async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndUpdate(id, req.body.listing);
  res.redirect("/listing");
});

// DELETE
app.get("/listing/delete/:id", async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }

  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listing");
});

/* =========================
   REVIEW ROUTES
========================= */
app.post("/listing/:id/reviews", async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }

  const { id } = req.params;
  const listing = await Listing.findById(id);

  const newReview = new Review(req.body.review);
  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();

  res.redirect(`/listing/show/${id}`);
});

/* =========================
   AUTHENTICATION ROUTES
========================= */

// SIGNUP FORM
app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

// SIGNUP LOGIC
app.post("/signup", async (req, res, next) => {
  const { username, email, password } = req.body;

  const newUser = new User({ email, username });
  const registeredUser = await User.register(newUser, password);

  req.login(registeredUser, err => {
    if (err) return next(err);
    res.redirect("/listing");
  });
});

// LOGIN FORM
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

// LOGIN LOGIC
app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  (req, res) => {
    req.flash("success", "done!");
    res.redirect("/listing");
  }
);

// LOGOUT
app.get("/logout", (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect("/listing");
  });
});

/* =========================
   DEMO ROUTE
========================= */
app.get("/demo", async (req, res) => {
  const fakeUser = new User({
    email: "akhilesh@gmail.com",
    username: "Akhi",
  });

  const registeredUser = await User.register(fakeUser, "1234");
  res.send(registeredUser);
});

/* =========================
   SERVER
========================= */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})