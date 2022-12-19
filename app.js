const express = require( 'express' );
const path = require( 'path' );
const routes = require( './routes/index' );
const bodyParser = require( 'body-parser' );
const expressSession = require( 'express-session' )( {
  secret: 'secret',
  resave: false,
  saveUninitialized: false
} );

const app = express();

app.use( express.static( 'public' ) );
// app.use( express.static( 'models' ) );
app.use( express.static( __dirname ) );

app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'pug' );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( expressSession );

app.use( '/', routes );

/* PASSPORT SETUP */
const passport = require( 'passport' );

app.use( passport.initialize() );
app.use( passport.session() );


/* MONGOOSE SETUP */
const mongoose = require( 'mongoose' );
const passportLocalMongoose = require( 'passport-local-mongoose' );

mongoose.connect( 'mongodb://127.0.0.1:27017/UnwindDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
} );

mongoose.connection
  .on( 'open', () => {
    console.log( 'Mongoose connection open' );
  } )
  .on( 'error', ( err ) => {
    console.log( `Connection error: ${ err.message }` );
  } );

// require( './models/Users' );

// const Users = require( 'mongoose' ).model( 'UsersInfo', usersSchema );
// const Users = mongoose.model( 'UsersInfo' );

const Schema = mongoose.Schema;

//____ Login Schema _____
// const UserDetail = new Schema( {
//   fname: String,
//   lname: String,
//   email: String,
//   username: String,
//   password: String,
//   repeatpw: String
// } );

const UserDetailLogin = new Schema( {
  username: String,
  password: String
} );

UserDetailLogin.plugin( passportLocalMongoose );
// Users.plugin( passportLocalMongoose );

//For future potential changes (revert from username to email)
// UserDetailLogin.plugin(passportLocalMongoose, {
//   usernameField: 'email'
// });

const UserDetailsLogin = mongoose.model( 'userInfoLogin', UserDetailLogin, 'userInfoLogin' );


/* PASSPORT LOCAL AUTHENTICATION */

//_____ Login _____
passport.use( UserDetailsLogin.createStrategy() );
passport.serializeUser( UserDetailsLogin.serializeUser() );
passport.deserializeUser( UserDetailsLogin.deserializeUser() );

// passport.use( Users.createStrategy() );
// passport.serializeUser( Users.serializeUser() );
// passport.deserializeUser( Users.deserializeUser() );

/* REGISTER USERS */

// UserDetails.register( { fname: 'shandira', lname: 'ferguson', email: 'sandy@gmail.com', username: 'sandy', active: false }, 'sandy', { repeatpw: 'sandy' } );

// UserDetails.register( { fname: 'jane', lname: 'doe', email: 'jane@gmail.com', username: 'jane', repeatpw: 'jane', active: false }, 'jane' );

// UserDetails.register( { fname: 'john', lname: 'doe', email: 'john@gmail.com', username: 'john', active: false }, 'john' );

// UserDetails.register( { username: 'joy', email: 'joy@gmail.com', active: false }, 'joy' );

// UserDetails.register( { username: 'ray', active: false }, 'ray' );

//_____________________ LATEST WORKING SCHEMA ____________________

//****** New Schema created with passport default credentials ****
// ***** 'name: 'value'' attributes added to each in form

// UserDetailsLogin.register( { username: 'sandy', active: false }, 'sandy' );

// UserDetailsLogin.register( { username: 'hope', active: false }, 'hope' );

// module.exports = { app, UserDetailsLogin };
// module.exports = { app, UserDetailsLogin };


//_____________________ SCHEMA CREATED TO LINK models/Users.js ____________________

// Users.register( { username: 'love', active: false }, 'love' );
// Users.register( { username: 'joy', active: false }, 'joy' );
// Users.register( { username: 'happiness', active: false }, 'happiness' );

module.exports = app;