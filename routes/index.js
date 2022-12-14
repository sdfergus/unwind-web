const express = require( 'express' );

//Router used to access pages
const router = express.Router();

router.get( '/', ( req, res ) => {
  res.render( 'index', { title: 'Unwind Web' } );
} );
