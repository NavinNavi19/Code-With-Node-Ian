// Environment Variables
require('dotenv').config();

// require modules
const createError   = require('http-errors');
const express       = require('express');
const path          = require('path');
const cookieParser  = require('cookie-parser');
const logger        = require('morgan');
const passport      = require('passport');
const User          = require('./models/user');
const session       = require('express-session');
const mongoose      = require('mongoose');
const methodOverride= require('method-override');
// require routes
const indexRouter    = require('./routes/index');
const postsRouter    = require('./routes/posts');
const reviewsRouter  = require('./routes/reviews');

const app = express();

// mongoose connect
mongoose.connect("mongodb://localhost:27017/surf-shop-mapbox", {useNewUrlParser: true, useCreateIndex: true});
// mongodb connection status
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("Connected to Local MongoDB");
});
mongoose.set('useFindAndModify', false);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(methodOverride("_method"));

// configure passport and sessions
app.use(session({
  secret: 'Iamnotgonnarevealthat',
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// route setup
app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/posts/:id/reviews', reviewsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;