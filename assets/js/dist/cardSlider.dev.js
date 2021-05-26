"use strict";

$(document).ready(function () {
  $('#autoWidth').lightSlider({
    item: 3,
    autoWidth: true,
    loop: true,
    onSliderLoad: function onSliderLoad() {
      $('#autoWidth').removeClass('cS-hidden');
    }
  });
});
$(document).ready(function () {
  $('#autoWidth2').lightSlider({
    item: 3,
    autoWidth: true,
    loop: true,
    onSliderLoad: function onSliderLoad() {
      $('#autoWidth2').removeClass('cS-hidden');
    }
  });
});
$(document).ready(function () {
  $('#lightSlider').lightSlider({
    gallery: true,
    autoWidth: false,
    adaptiveHeight: false,
    item: 1,
    loop: true,
    slideMargin: 0,
    thumbItem: 5
  });
});