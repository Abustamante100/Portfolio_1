
//bg after inputs
$('.input').after().click(function() {
  $('.input').css({
    'background-color': '#FCFCFC',
    'color' : '#0D0D0D'
  })
});


//enable footer button
(function() {
    $('form > .input',).keyup(function() {

        var empty = false;
        $('form > .input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#footerBtn').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        } else {
            $('#footerBtn').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        }
    });
})()
