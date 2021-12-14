$(document).ready(function(){
  var menuBurger = document.querySelector('.menu-burger');
    menuBurger.addEventListener("click", function(){
    document.querySelector('.navbar').classList.toggle('navbar--visible');
  }); 
});