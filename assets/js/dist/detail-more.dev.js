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
  var x = document.querySelector("detail-describtion");
  x.classList.add("ww");
}

function openPa() {}

function openMe() {}

function openRe() {}