document.querySelectorAll( '.delete-user' ).forEach( function ( element )
{
  element.addEventListener( 'click', function ( e )
  {
    e.preventDefault();
    let userId = this.getAttribute( 'data-id' );
    fetch( 'delete_user.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'id=' + encodeURIComponent( userId )
    } ).then( response =>
    {
      if ( response.ok )
      {
        this.closest( 'tr' ).remove();
      } else
      {
        console.error( 'Failed to delete user' );
      }
    } ).catch( error =>
    {
      console.error( 'Error:', error );
    } );
  } );
} );
