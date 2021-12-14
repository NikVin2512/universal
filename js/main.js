$(document).ready(function(){
  var menuBurger = document.querySelector('.menu-burger');
    menuBurger.addEventListener("click", function(){
    document.querySelector('.navbar__menu').classList.toggle('navbar__menu--visible');
  }); 
});