$(document).ready(function(){
  console.log('Arroxa Pedrão!');

  // gallery
  $("#gallery").lightGallery({
    selector: '.item-gallery',
    cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)'
  });

	// menu
	$(".js-menu-button").on('click', function(){
		$('.js-menu-button').hide();
		$('.js-ico-search').hide();
		$('.js-ico-close').show();
		$('.js-menu').fadeIn();
	});
	$(".js-ico-close").on('click', function(){
		$('.js-menu-button').show();
		$('.js-ico-search').show();
		$('.js-ico-close').hide();
		$('.js-menu').hide();
	});
});
