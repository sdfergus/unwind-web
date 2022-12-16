var registerLink = document.getElementById( 'register-link' );

var registerContent = document.getElementById( 'pills-register' );

registerLink?.addEventListener( 'click', ( e ) => {
  console.log( 'link was clicked!' );
  e.preventDefault();
  // registerContent.tab( 'show' )
} );

// $( '#register-link' ).on( 'click', function ( e ) {
//   e.preventDefault();
//   $( 'pills-register' ).tab( 'show' );
// } );