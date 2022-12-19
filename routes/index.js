const express = require( 'express' );
const connectEnsureLogin = require( 'connect-ensure-login' );
const passport = require( 'passport' );
const path = require( 'path' );
const mongoose = require( 'mongoose' );
require( '../models/Users' );
// const Users = mongoose.model( 'UsersInfo' );
// const Users = require( 'mongoose' ).model( 'UsersInfo' );

// const Users = require( 'mongoose' ).model( 'userInfoLogin' ).schema;
// const Users = require( 'mongoose' ).model( 'userInfoLogin', app.UserDetailLogin, 'userInfoLogin' );

const Users = mongoose.model( 'UsersInfo' );

//Router used to access pages
const router = express.Router();

router.get( '/',
  connectEnsureLogin.ensureLoggedIn(),
  ( req, res ) => {
    res.render( 'index', { title: 'Unwind Web' } );
  } );

router.get( '/user',
  // connectEnsureLogin.ensureLoggedIn(),
  ( req, res ) => {
    res.render( 'user', { title: 'Unwind Web' } );
  } );

router.get( '/userInfo', ( req, res ) => {
  Users.find()
    .then( ( users ) => {
      res.render( 'userInfo', { title: 'Listed Users', users } );
    } )
    .catch( () => {
      res.send( 'Sorry! Something went wrong.' );
    } );
  // connectEnsureLogin.ensureLoggedIn(),
  // ( req, res ) => {
  //   console.log( 'UserInfo: ', req.user );
  //   res.send( { user: req.user } )
  // }
} )

router.get( '/logout',
  ( req, res ) => {
    req.logout(),
      res.render( 'index', { title: 'Unwind Web' } );
  }
)

router.get( '/login', ( req, res ) => {
  res.render( 'login', { title: 'Login' } );
} );

router.post( '/login', ( req, res, next ) => {
  passport.authenticate( 'local',
    ( err, user, info ) => {
      if ( err ) {
        return next( err );
      }

      if ( !user ) {
        console.log( '!user error info:', info, 'Error: ', err, 'User: ', user );
        return res.redirect( '/login?info=' + JSON.stringify( info ) );
      }

      req.logIn( user, function ( err ) {
        if ( err ) {
          return next( err );
        }
        console.log( 'Login successful!! Should redirect to user page...' );
        // return res.redirect( '/user' );
        res.render( 'user', { title: 'Unwind Web' } );
      } );
    }
  )( req, res, next );
} )

router.get( '/contact', ( req, res ) => {
  res.render( 'contact', { title: 'Contact Us' } );
} );

router.get( '/weather', ( req, res ) => {
  res.render( 'weather', { title: 'Catalog/Weather' } );
} );


//REGISTER Process
// user.js
// const bcrypt = require('bcryptjs')
// const passport = require('passport')
// router.post('/register', function(req, res) {
//   const name = req.body.name;
//   const email = req.body.email;
//   const username = req.body.username;
//   const password = req.body.password;
//   const password2 = req.body.password2;

//   req.checkBody('name', 'Name is required').notEmpty();
//   req.checkBody('email', 'Email is required').notEmpty();
//   req.checkBody('email', 'Email is not valid').isEmail();
//   req.checkBody('username', 'Username is required').notEmpty();
//   req.checkBody('password', 'Password is required').notEmpty();
//   req.checkBody('password2', 'Password do not match').equals(req.body.password);
//   let errors = req.validationErrors();

//   if (errors) {
//     res.render('register', {
//       errors: errors
//     })
//   } else {
//     let newUser = new User({
//       name: name,
//       email: email,
//       username: username,
//       password: password
//     })

//     bcrypt.genSalt(10, function(err, salt) {
//       bcrypt.hash(newUser.password, salt, function(err, hash) {
//         if (err) {
//           console.log(err);
//         }
//         newUser.password = hash;
//         newUser.save(function(err) {
//           if (err) {
//             console.log(err);
//             return;
//           } else {
//             req.flash('success', 'You are Now registered and can log in');
//             res.redirect('/users/login');
//           }
//         })
//       });
//     })
//   }
// })

module.exports = router;