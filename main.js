$(document).on('ready', function() {

	// Edit User Info button
  $('#edit').click(function() {
  	$('.editContent').animate({top: '8px'}, 600);
  	$('.userInfo').animate({top: '-800px'}, 600);
  });

  // Update Info button
  $('#update').click(function() {
  	$('.editContent').animate({top: '-470px'}, 600);
  	$('.userInfo').animate({top: '0px'}, 600);
  });

  $('#update').click(function() {
  	var name = $('#updateName').val();
  	console.log($('#updateName').val());
  	var bio = $('#updateBio').val();
  	var books = $('#updateBooks').val();
  	var libraries = $('#updateLibraries').val();
  	$('#name').text(name);
  	$('#bio').text(bio);
  	$('#books').text(books);
  	$('#libraries').text(libraries);
  });
});