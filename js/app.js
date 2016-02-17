$(document).ready(function(){
  $('#streetfighter').mouseenter(function() {
    $(this).addClass('overlay');
  })
  .mouseleave(function() {
    $(this).removeClass('overlay');
  });
});