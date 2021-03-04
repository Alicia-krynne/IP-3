$('.main').click(function () {
  $(this).children('.hide').slideToggle();
  $(this).children('.show').toggle();
});

$( "form-cont" ).submit(function( event ) {
  if ( $( "input" ).first().val() === "correct" ) {
    $( "span" ).text( "Validated..." ).show();
    return;
  }
 
  $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
  event.preventDefault();
});