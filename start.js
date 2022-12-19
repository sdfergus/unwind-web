const app = require( './app' );

const port = process.env.PORT || 3000;
app.listen( port, () => console.log( 'App listening on port ' + port ) );

// const server = app.listen( 3000, () => {
//   console.log( `Express is running on port ${ server.address().port }` );
// } );
