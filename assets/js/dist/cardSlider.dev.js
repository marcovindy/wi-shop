"use strict";

// JavaScript Document
$(document).ready(function () {
  $('#autoWidth').lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function onSliderLoad() {
      $('#autoWidth').removeClass('cS-hidden');
    }
  });
});