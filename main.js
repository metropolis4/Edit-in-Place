$(document).on('ready', function() {
  $('.editable').click(function() {
  	$('.editable').attr("contenteditable", "true");
  });
  $('.editable').focus(function() {
  	$('.editable').addClass('active');
  });
  $('.editable').blur(function() {
  	$('.editable').removeClass('active');
  });
});