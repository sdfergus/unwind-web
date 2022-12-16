const express = require( 'express' );

//Router used to access pages
const router = express.Router();

router.get( '/', ( req, res ) => {
  res.render( 'index', { title: 'Unwind Web' } );
} );

router.get( '/login', ( req, res ) => {
  res.render( 'login', { title: 'Login' } );
} );

module.exports = router;