$(document).ready(function(){

  var $form = $('#formConfirm');

  $form.on('submit', function(e){
    e.preventDefault();

    var $name = $(this).find('input');

    if($name.val() == '') {
      console.log('Error');
      $name.addClass('invalid');
    }else {
      console.log('Confirm -> ', name.val());
    }
  });

  $form.find('input').on('keyup', function(){
    if($(this).val() == '') {
      $(this).addClass('invalid');
    }else {
      $(this).removeClass('invalid');
    }
  });

});
