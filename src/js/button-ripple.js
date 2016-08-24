$(document).ready(function(){

  $('.ripple').on('click', function(e) {
  	var rippleDiv = $('<span>'),
    		rippleOffset = $(this).offset(),
    		rippleY = e.pageY - rippleOffset.top,
    		rippleX = e.pageX - rippleOffset.left,
    		ripple = $('span');

  	rippleDiv.css({
  		top: rippleY - (ripple.height() / 2),
  		left: rippleX - (ripple.width() / 2),
  		background: $(this).data("ripple-color")
  	}).appendTo($(this));

  	window.setTimeout(function() {
  		rippleDiv.remove();
  	}, 1500);
  });

});
