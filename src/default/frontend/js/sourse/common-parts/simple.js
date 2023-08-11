
var st = 0;
window.addEventListener('scroll', function (e) {

  st = $(this).scrollTop();

  if(st > 0){
    $('header').addClass('stick');
  }
  else{
    $('header').removeClass('stick');
  }

});   




$(window).on('load',function(){
  $('.preload').addClass('load');
  setTimeout(function(){
    $('.preload').addClass('hide');
  },2000)
});



/* animate label all form */
$('.input-box').each(function(){
  $(this).find('input, textarea').on('keyup', function(){
    let lengthInput = $(this).val().length;
    if(lengthInput > 0){
      $(this).addClass('input-empty');
    }
    else{
      $(this).removeClass('input-empty');
    }
  })
  
});
/* animate label all form */

// video play rew

$('.video-btn').on('click',function(){
  $(this).hide();
  $(this).prev()[0].play();
});










/*servises yachts add title to input popup*/