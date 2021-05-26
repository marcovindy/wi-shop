"use strict";

var openD = document.querySelector("#open-detail-describtion");
var openP = document.querySelector("#open-detail-param");
var openM = document.querySelector("#open-detail-media");
var openR = document.querySelector("#open-detail-review");
openD.addEventListener("click", function () {
  openDe();
});
openP.addEventListener("click", function () {
  openPa();
});
openM.addEventListener("click", function () {
  openMe();
});
openR.addEventListener("click", function () {
  openRe();
});

function openDe() {
  var x = document.querySelector(".detail-describtion");
  x.classList.remove("hide");
  var y = document.querySelector(".detail-param");
  y.classList.add("hide");
  var z = document.querySelector(".detail-media");
  z.classList.add("hide");
  var h = document.querySelector(".detail-review");
  h.classList.add("hide");
  openD.classList.add("active");
  openP.classList.remove("active");
  openM.classList.remove("active");
  openR.classList.remove("active");
}

function openPa() {
  var x = document.querySelector(".detail-describtion");
  x.classList.add("hide");
  var y = document.querySelector(".detail-param");
  y.classList.remove("hide");
  var z = document.querySelector(".detail-media");
  z.classList.add("hide");
  var h = document.querySelector(".detail-review");
  h.classList.add("hide");
  openD.classList.remove("active");
  openP.classList.add("active");
  openM.classList.remove("active");
  openR.classList.remove("active");
}

function openMe() {
  var x = document.querySelector(".detail-describtion");
  x.classList.add("hide");
  var y = document.querySelector(".detail-param");
  y.classList.add("hide");
  var z = document.querySelector(".detail-media");
  z.classList.remove("hide");
  var h = document.querySelector(".detail-review");
  h.classList.add("hide");
  openD.classList.remove("active");
  openP.classList.remove("active");
  openM.classList.add("active");
  openR.classList.remove("active");
}

function openRe() {
  var x = document.querySelector(".detail-describtion");
  x.classList.add("hide");
  var y = document.querySelector(".detail-param");
  y.classList.add("hide");
  var z = document.querySelector(".detail-media");
  z.classList.add("hide");
  var h = document.querySelector(".detail-review");
  h.classList.remove("hide");
  openD.classList.remove("active");
  openP.classList.remove("active");
  openM.classList.remove("active");
  openR.classList.add("active");
}