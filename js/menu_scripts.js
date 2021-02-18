function addCurrentPageClass( element )
{
  $( "#sidebar ul" ).removeClass( "current_page" );
  $( element ).addClass( "current_page" );
  hideMenu();
}

function showRequestedArticle( id )
{
  console.log(id);
  $( ".article" ).hide();
  $( "#" + id ).show();
}

function showMenu()
{
  $( "#sidebar" ).show( 700 );
}

function hideMenu()
{
  $( "#sidebar" ).hide( 700 );
}

$( document ).ready( function()
{
  $( ".article" ).hide();
  $( ".article" ).first().show();
});
