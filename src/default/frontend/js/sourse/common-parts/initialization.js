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


