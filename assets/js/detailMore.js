const openD = document.querySelector("#open-detail-describtion");
const openP = document.querySelector("#open-detail-param");
const openM = document.querySelector("#open-detail-media");
const openR = document.querySelector("#open-detail-review");
const scrollD = document.querySelector(".more-info");

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

scrollD.addEventListener("click", function () {
    moreInfo();
});


function openDe(){
    let x = document.querySelector(".detail-describtion");
    x.classList.remove("hide");
    let y = document.querySelector(".detail-param");
    y.classList.add("hide");
    let z = document.querySelector(".detail-media");
    z.classList.add("hide");
    let h = document.querySelector(".detail-review");
    h.classList.add("hide");

    openD.classList.add("active");
    openP.classList.remove("active");
    openM.classList.remove("active");
    openR.classList.remove("active");

}
function openPa(){
    let x = document.querySelector(".detail-describtion");
    x.classList.add("hide");
    let y = document.querySelector(".detail-param");
    y.classList.remove("hide");
    let z = document.querySelector(".detail-media");
    z.classList.add("hide");
    let h = document.querySelector(".detail-review");
    h.classList.add("hide");
    
    openD.classList.remove("active");
    openP.classList.add("active");
    openM.classList.remove("active");
    openR.classList.remove("active");
    
}
function openMe(){
    let x = document.querySelector(".detail-describtion");
    x.classList.add("hide");
    let y = document.querySelector(".detail-param");
    y.classList.add("hide");
    let z = document.querySelector(".detail-media");
    z.classList.remove("hide");
    let h = document.querySelector(".detail-review");
    h.classList.add("hide");
    
    openD.classList.remove("active");
    openP.classList.remove("active");
    openM.classList.add("active");
    openR.classList.remove("active");
    
}
function openRe(){
    let x = document.querySelector(".detail-describtion");
    x.classList.add("hide");
    let y = document.querySelector(".detail-param");
    y.classList.add("hide");
    let z = document.querySelector(".detail-media");
    z.classList.add("hide");
    let h = document.querySelector(".detail-review");
    h.classList.remove("hide");
    
    openD.classList.remove("active");
    openP.classList.remove("active");
    openM.classList.remove("active");
    openR.classList.add("active");
    
}

function moreInfo(){
    let x = document.querySelector(".detail-describtion");
    x.classList.remove("hide");
    let y = document.querySelector(".detail-param");
    y.classList.add("hide");
    let z = document.querySelector(".detail-media");
    z.classList.add("hide");
    let h = document.querySelector(".detail-review");
    h.classList.add("hide");

    openD.classList.add("active");
    openP.classList.remove("active");
    openM.classList.remove("active");
    openR.classList.remove("active");

}