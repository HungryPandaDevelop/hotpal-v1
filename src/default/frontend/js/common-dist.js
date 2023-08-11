

$(document).ready(function(){

let owlMain = $('.owl-main');

owlMain.owlCarousel({
  items: 1,
  nav: false,
  dots: true,
  margin: 30
});


$(".range-slider").ionRangeSlider({
  type: "double",
  min: 18,
  max: 75,
  from: 35,
  to: 50,
  skin: "round",
  drag_interval: true,
  grid_snap: true,
  grid_num: 10
});

$('.input-date').each(function(){
  let dp = new AirDatepicker(this,{
    timepicker: true,
    timeFormat: 'hh:mm AA',
    onSelect({date}) {
      $(this).addClass('input-empty');
      // console.log('done', date) 
    }
  },
  );
})






var longPhone = 16;
$('.phone-mask').mask('+7(999)999-99-99');
$('.phone-mask').on('keydown', function (e) {
    if(!(e.which >= 48 && e.which <= 57 || e.which == 8) ){
        return false;
    }
});





		// check email
		var r = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		var mailInput;
		var mailFlag = 1;
		var isEmpty = false;

		function checkMail(elThis) {
				mailInput = elThis.val();

				if (!r.test(mailInput)) {
						isEmpty = false;
						elThis.addClass('mail-error');

				} else {
						isEmpty = true;
						elThis.removeClass('mail-error')
				}
		}

		$('.check-mail').on('keyup', function () {
				checkMail($(this));

				if (mailInput.length == 0) {
						$(this).removeClass('mail-error')
				}
		});
		// check email

		// check require

		$('.btn-send').on('click', function (e) {
		
				isEmpty = false;

				checkMail($(this).parents('.form').find('.check-mail'));

				$(this).parents('.form').find('.require').each(function () {

						if ($(this).attr('type') == 'checkbox') {
								if (!$(this).is(':checked')) {
										$(this).parent().addClass('input-error');
										isEmpty = true;
								}
						}
						
						if ($(this).is('.style-select')) {

								if ($(this).prev().attr('data-val') == 0) {

										$(this).prev().addClass('input-error');
										isEmpty = true;
								}
						}

						if ($(this).attr('type') == 'file') {
								$(this).next().addClass('input-error');
								isEmpty = true;
						}

						if (!$(this).val()) {
								isEmpty = true;
								$(this).addClass('input-error');
						}
				});

				setTimeout(function () {
						$('.input-error').removeClass('input-error');
				}, 3000);

				if (isEmpty == true) {
						e.preventDefault();
				};
		});

		// check require
$('.wpcf7-form-control-wrap').each(function(){
  let sizeVal = $(this).find('.wpcf7-form-control').attr('id');
  $(this).addClass(sizeVal);
});


document.addEventListener( 'wpcf7mailsent', function( event ) {
  console.log('mail sent OK');
  // Stuff
  setTimeout(function(){
    $('.element-show').removeClass('active');
  },1500);
  
}, false ); 

// document.addEventListener( 'wpcf7invalid', function( event ) {
  
//   // Stuff
//   setTimeout(function(){
//     $('.wpcf7-form').addClass('init');
//   },1500);
  
// }, false ); 
// img cover start
$('.img-cover').each(function(){
  let imgSrc = $(this).find('img').attr('src');
  //console.log(imgSrc);
  
  $(this).css('background-image', 'url('+imgSrc+')');
});
// img cover file start
 // style input file start

let ObjfieldFile = $('.input-file');
let flagFileMulti;
let textChoise;
let sizeFile;
let nameFile;

function createNewFileContainer(textChoiseParam, flagFileMultiParam, hintParam){
		let fileContainer = $('<div class="file-input-item"><input class="input-file" type="file" data-flagM="'+flagFileMultiParam+'" accept=".jpg,.png"></div>')
		let noticeFile = $('<div class="notice-file notice-big-file"><em>Файл слишком большой</em><i></i></div>');
		let docorateFile = $('<div class="file-decorate"><span>'+textChoiseParam+'</span><i></i></div>');
		
		return fileContainer.append(docorateFile).append(noticeFile);
}

ObjfieldFile.each(function(){

		textChoise = $(this).data('textchoise') ? $(this).data('textchoise') :  'Загрузите изображение';
		flagFileMulti = $(this).data('multy') ?  $(this).data('multy') : 0;
		textHint = $(this).data('hint');

		$(this).replaceWith(createNewFileContainer(textChoise, flagFileMulti, textHint));

});



$('body').on('click', '.file-decorate', function () {

		let container = $(this).parents('.file-input-item');
		container.find('.input-file').trigger('click');
});

$('body').on('change', '.input-file', function () {
		nameFile = $(this).val().replace(/C:\\fakepath\\/i, '');
		let container = $(this).parents('.file-input-item');
		
		if(nameFile.length>0){
				sizeFile = this.files[0].size;
				if(sizeFile < 500000){
						container.find('span').text(nameFile);
						container.addClass('file-decorate-full');

						flagFileMulti = $(this).data('flagm');

						if (flagFileMulti == 1) {
								$(this).parents('.file-input-item').after(createNewFileContainer(textChoise,"1"));
						}
				}
				else{
					
					$(this).parents('.file-input-item').find('.notice-file').addClass('notice-file--show');

					setTimeout(function(){
						$('.notice-file').removeClass('notice-file--show');
					},3000);
				}
		}
});

$("body").on("click", ".file-decorate i", function (e) {
		e.stopPropagation();
		flagFileMulti = $(this).parents('.file-input-item').find('.input-file').data('flagm');
		let container = $(this).parents('.file-input-item');
		console.log(flagFileMulti);
		if (flagFileMulti == 1) {
				container.remove();
		}
		else{
				container.replaceWith(createNewFileContainer(textChoise,"0"));
		}
});
 // style input file end
// custom-select

$('.style-select').each(function () {
  let firstElOption = $(this).find('option:selected').text();
  let dataText = $(this).data('text');
  let dataClass = $(this).data('class');
  $(this).find('option').each(function(index){
    $(this).attr('data-index',index);
  });
  if(dataText){
      firstElOption = dataText;
  }


  let styleSelectBoxElement = 
    $(`<div class='custom-select ${dataClass}'>
        <span>${firstElOption}</span>
        <ul class='ln'></ul>
        <i></i>
      </div>
    `);

  $(this).before(styleSelectBoxElement).hide();

  $(this).find('option').each(function (index) {
      var optionText = $(this).text();
      $(this).parent().prev().find('ul').append('<li data-index="'+index+'" data-value="'+$(this).val()+'">' + optionText + '</li>');
  });
});

$(".custom-select").on('click', function (e) {
  e.preventDefault();
  if ($(this).hasClass('active')) {
      $(this).removeClass('active');
  } else {
      $('.custom-select').removeClass('active');
      $(this).addClass('active');
  }
});

$('body').on('click', function (evt) {
  if (!$(evt.target).is('.custom-select, .custom-select > *')) {
      $('.custom-select').removeClass('active');
  }
});

let tempSelectVal;
$('.custom-select').on('click', 'li', function () {
  let liIndex = $(this).data('index');
  let parentsEl = $(this).parents('.custom-select');

  // if(!tempSelectVal){   
  //   tempSelectVal = $(this).remove();
  // }else{
  //   $(this).after(tempSelectVal);
  //   tempSelectVal = $(this).remove();
  // }
  
  parentsEl.next().find('option[data-index="'+liIndex+'"]').prop('selected', true);

  parentsEl.find('span').text($(this).text());
});
// custom-select

$('.close-js').on('click', function () {
    $(this).parents('.element-show').removeClass('show');
});
$('.popup-overlay-js').on('click',function(e){
    $(this).parents('.element-show').removeClass('show');
});

$(document).on('keyup', (evt) => {
    if (evt.keyCode === 27) {
        $('.element-show').removeClass('show');
    }
});

$('body').on('click','.element-btn', function (e) {
    e.preventDefault();
    
    $('.element-show').removeClass('show');
    let activeIndex = $(this).attr('data-element');
  
    let text;
    if(activeIndex == 6){
        if($(this).parents('.offer-item').length){
            text = $(this).parents('.offer-item').find('h3').text();
        }else if($(this).parents('.market-info').length){
            console.log('in');
            text = $(this).parents('.market-info ').find('h1').text();
        }       
        $('.kp-form h2 span').text(text);
        $('.kp-form').find('[name="your-prod"]').val(text.trim());
    }
    $('[data-element="' + activeIndex + '"].element-show').addClass('show');

    
});
$('.password-field').on('click','i',changeStatePass);
let visibility = true;
function changeStatePass(){

  console.log(visibility);

  let thisEl = $(this);

  let changePass = (el,type,bool) => {
    $('.password-field').find('input').attr('type',type);
    el.attr('data-visibility', bool);
    visibility = !visibility;
  }

  visibility ? changePass(thisEl,'text', visibility) : changePass(thisEl,'password', visibility)

}



$('.range').on('change input', function (e) {
  console.log('change',e)
  setRangeNum('.range-slider-container', '.range-num', $(this));

});

let minGap = 1;



function setRangeNum(wrap, num, thisEl, pos){
  let rangeMin = thisEl.attr('max') - thisEl.attr('min');
  
  let offsetLeftRange = (100/(rangeMin))*(thisEl.val() - thisEl.attr('min'));
  
  let rangeNum = thisEl.parents(wrap).find(num);

  //console.log(thisEl.val(), rangeNum.attr('data-name')); //rangeNum

  rangeNum.html(thisEl.val());

  // rangeNum.addClass('test');

  rangeNum.css({left: offsetLeftRange+'%',transform: 'translateX(-'+offsetLeftRange+'%)'});
  if(pos === 'left'){
    thisEl.parents(wrap).find('.slider-track-color').css({left: offsetLeftRange+'%'});
    thisEl.parents(wrap).prev().find('.range-input-from').val(thisEl.val());

  }else if(pos === 'right') {
    thisEl.parents(wrap).find('.slider-track-color').css({right: (100 - offsetLeftRange)+'%'});
    thisEl.parents(wrap).prev().find('.range-input-to').val(thisEl.val());
  }
}



$('.range-sliders-container').each(function(){

  let sliderOne = $(this).find('.slider-1');
  let sliderTwo = $(this).find('.slider-2');

  sliderOne.on('change input', function () {
    if(parseInt(sliderTwo.val()) - parseInt(sliderOne.val()) <= minGap){
      sliderOne.val(parseInt(sliderTwo.val()) - minGap);
    }
    setRangeNum('.range-sliders-container', '.range-num-1', $(this), 'left');
  });


  sliderTwo.on('change input', function () {
    if(parseInt(sliderTwo.val()) - parseInt(sliderOne.val()) <= minGap){
      sliderTwo.val(parseInt(sliderOne.val()) + minGap);
    }
  
    setRangeNum('.range-sliders-container', '.range-num-2', $(this), 'right');
  });

  setRangeNum('.range-sliders-container', '.range-num-1', $(this).find('.slider-1'), 'left');
  setRangeNum('.range-sliders-container', '.range-num-2', $(this).find('.slider-2'), 'right');

});

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
});