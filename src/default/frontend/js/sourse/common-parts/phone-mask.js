


var longPhone = 16;
$('.phone-mask').mask('+7(999)999-99-99');
$('.phone-mask').on('keydown', function (e) {
    if(!(e.which >= 48 && e.which <= 57 || e.which == 8) ){
        return false;
    }
});




