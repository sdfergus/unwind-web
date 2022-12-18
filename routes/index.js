const express = require( 'express' );

//Router used to access pages
const router = express.Router();

router.get( '/', ( req, res ) => {
  res.render( 'index', { title: 'Unwind Web' } );
} );

router.get( '/login', ( req, res ) => {
  res.render( 'login', { title: 'Login' } );
} );

router.get( '/contact', ( req, res ) => {
  res.render( 'contact', { title: 'Contact Us' } );
} );

router.get( '/weather', ( req, res ) => {
  res.render( 'weather', { title: 'Catalog/Weather' } );
} );

module.exports = router;