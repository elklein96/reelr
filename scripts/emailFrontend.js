$(document).on('click', '#submitButton', function () {
  var recipients = $('#recipients').val().match(/\S+/g);

  console.log(recipients);

  $.ajax({
    url:    "../scripts/send_email.php",
    type:   "POST",
    data:   {
        recipients:   recipients,
        from:         $('#from').val(),
        subject:      $('#subject').val(),
        emailBody:    $('#content').val()
    },
    success: function(data) {
      $('#loading').hide();
      
      if(data.indexOf("Error") > -1){
        $('#page-wrapper').append('<p class="text-danger message"><br><br><br>'+data.replace('Error', '')+'</p>');
      }
      else{
        console.log("success");
      }
    }
  });
});