
$(document).ready(function() {
  $(".btn btn-primary").click(function(event) {
    whatToSay = "Thank you  for your message!";
    alert(whatToSay);
  });

  });

$(document).ready(function() {
  $('.main').click(function () {
  $(this).children('.hide').slideToggle(1200);
  $(this).children('.show').toggle(1500);
});

$(document).ready(function() {
  $("button").click(function (event) {
  var client = document.getElementById('nameDetail').value;
  alert(' Dear ' + ' esteemed ' + client + ' we have received your message successful. ' + ' Feel free to reach out to us anytime');

});
$(document).ready(function() {
  $("button").on('click', function () {
  $('form').each(function () {
    this.reset();
  });
});

$(".card").hover(function () {
  $(this).children(".card-1").fadeToggle(1000, "linear");
});


e.preventDefault();