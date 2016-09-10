$(document).ready(function(){
  console.log('Arroxa Pedrão!');

  // gallery
  $('#gallery').lightGallery({
    selector: '.item-gallery',
    cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)'
  });

  $('.goto').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#gift").offset().top
    }, 1000);
  });

});
