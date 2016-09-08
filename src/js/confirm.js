$(document).ready(function(){

  var $form = $('#formConfirm');

  $form.on('submit', function(e){
    e.preventDefault();

    var $name = $(this).find('input');

    if($name.val() == '') {
      console.log('Error');
      $name.addClass('invalid');
    }else {
      console.log( 'Confirm' );
      $.ajax({
        url: 'http://carlosjms-com-br.umbler.net/confirm.php?email='+ $name.val() +'&token=pedraovaicasarporra',
        success: function( response ) {
          console.log( response );
          $name.after(
            '<span class="response">Confirmação realizada com sucesso!</span>'
          );
          $name.val('');
        },
        error: function( err ) {
          console.log( err );
        }
      });
    }
  });

  $form.find('input').on('keyup', function(){
    $('.response').remove();
    if($(this).val() == '') {
      $(this).addClass('invalid');
    }else {
      $(this).removeClass('invalid');
    }
  });

});
