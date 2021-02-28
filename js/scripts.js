$(document).ready(function() {
    $("p").click(function() {
      $(".clickable").click(function() {
      $(".show").toggle();
      $(".hide").toggle();
    });
});