const home = document.querySelector(".home");
const health = document.querySelector(".health");
const travel = document.querySelector(".travel");
const form = document.querySelector("#form");
const form_switch = document.querySelectorAll(".form_switch");


function showAlert(){
  alert ("Hello world!");
}

function tab1(){
    form.style.marginLeft = "0";
    health.style.background = "none" 
    travel.style.background = "none";

    home.style.background = "#008655";
    travel.style.color = "#898DA4";
    home.style.color = "white";
    health.style.color = "#898DA4";
}

function tab2(){
    form.style.marginLeft = "-100%";
    home.style.background = "none";
    health.style.background = "none";

    travel.style.background = "#008655";
    travel.style.color = "white";
    home.style.color = "#898DA4";
    health.style.color = "#898DA4";
}

function tab3(){
    form.style.marginLeft = "-200%";
    home.style.background = "none";
    travel.style.background = "none";

    health.style.background = "#008655";
    travel.style.color = "#898DA4";
    home.style.color = "#898DA4";
    health.style.color = "white";
}










