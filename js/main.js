$(document).ready(function(){
  var menuBurger = document.querySelector('.menu-burger');
    menuBurger.addEventListener("click", function(){
    document.querySelector('.navbar').classList.toggle('navbar--visible');
  }); 
  var usefulItem = $(".useful-articles__item");
  var usefulPreview = $(".useful-articles__preview");

  usefulItem.on("click", function (event) {
    var activePreview = $(this).attr("data-target");
    usefulItem.removeClass("useful-articles__item--active");
    usefulPreview.removeClass("useful-articles__preview--active");
    $(activePreview).addClass("useful-articles__preview--active");
    $(this).addClass("useful-articles__item--active");
  })
});