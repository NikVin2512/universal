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
  $(".comments-form").each(function(){
    $(this).validate({
      errorClass: 'invalid',
      rules: {
        message: {
          minlength:'100',
        },
      },
      messages: {
        message: {
          minlength:"Минимальное колличество символом 100",
          required: "Заполните поле",
        },
      }
    });
  });
  $(".subscribe__form").each(function(){
    $(this).validate({
      errorClass: 'invalid',
      rules: {
        email: {
          required: true,
          email: true
        },
      },
      messages: {
        email: {
          required: "Укажите свой почтовый адрес для связи с вами",
          email: "Неверный формат имя@домен.ру"
        }
      }
    });
  });
var modalButton = $('[data-toggle=modal]');
var modalClose = $('.modal__close');
  modalButton.on('click', openModal);
  modalClose.on('click', closeModal);

function openModal() {
  var modalWindow = $('.modal');
  var modalBg = $('.modal-bg');
  modalWindow.addClass('modal--active');
  modalBg.addClass('modal-bg--active');
}

function closeModal(event) {
  var modalWindow = $('.modal');
  var modalBg = $('.modal-bg');
  modalWindow.removeClass('modal--active');
  modalBg.removeClass('modal-bg--active');
  event.preventDefault();
}
$(document).on('keydown',function(event) {
  if (event.keyCode == 27) {
      closeModal();
   }
  });
    $(".news-item__favorite").click(function() {
      $(this).toggleClass("news-item__favorite--active");
    });
    $(".slider-head__bookmark").click(function() {
      $(this).toggleClass("slider-head__bookmark--active");
    });
    $(".form").each(function(){
      $(this).validate({
        errorClass: 'invalid',
        rules: {
          name: {
            required: true,
            minlength: 3,
          },
          email: {
            required: true,
            email: true
          },
          phone: {
            required: true,
            minlength: '17',
          },
        },
        messages: {
          name: "Минимум 3 символа ",
          phone: "Ваш номер телефона в виде +7(999) 999-99-99",
          email: {
            required: "Укажите свой почтовый адрес для связи с вами",
            email: "Неверный формат имя@домен.ру"
          }
        }
      });
    });
    $(document).ready(function(){
      $('.phone-us').mask('+7(000) 000-00-00');
    });
});