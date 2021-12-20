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
  
    $(".news-item__favorite").click(function() {
      $(this).toggleClass("news-item__favorite--active");
    });
    $(".slider-head__bookmark").click(function() {
      $(this).toggleClass("slider-head__bookmark--active");
    });
  document.getElementById("more").onclick = () => {
      document.getElementById("comments").innerHTML += `<div class="comments__middle-item">
      <img
        src="img/info-avatar.png"
        alt="Аватар"
        class="comments__avatar"
      />
      <div class="comments__content">
        <div class="comments__content-title">
          <div class="comments__content-name">Михаил Степашин</div>
          <div class="comments__content-date">
            <span class="comments__day">17</span
            ><span class="comments__month">июля,</span
            ><span class="comments__time">18:38</span>
          </div>
        </div>
        <div class="comments__content-text">
          Хочу заметить, что автор этой статьи не написал, что не все
          могут получить статус самозанятого. Этот режим еще не ввели во
          всех регионах. Но если в вашем регионе есть, то поздравляю.
        </div>
        <div class="comments__content-nav">
          <div class="comments__content-answer">
          <a href="#answer"
          ><img src="img/score.svg" alt="Ответ" /> Ответить</a
        >
          </div>
          <div class="comments__content-block">
            <img
              src="img/up.png"
              alt="Нравится"
              class="comments__content-like"
            />
            <span
              class="
                comments__content-score comments__content-score--green
              "
              >+10</span
            >
            <img
              src="img/down.png"
              alt="Не нравится"
              class="comments__content-dis"
            />
          </div>
        </div>
      </div>
    </div><div class="comments__middle-item">
    <img
      src="img/avatar.png"
      alt="Аватар"
      class="comments__avatar"
    />
    <div class="comments__content">
      <div class="comments__content-title">
        <div class="comments__content-name">Михаил Степашин</div>
        <div class="comments__content-date">
          <span class="comments__day">17</span
          ><span class="comments__month">июля,</span
          ><span class="comments__time">18:38</span>
        </div>
      </div>
      <div class="comments__content-text">
        Хочу заметить, что автор этой статьи не написал, что не все
        могут получить статус самозанятого. Этот режим еще не ввели во
        всех регионах. Но если в вашем регионе есть, то поздравляю.
      </div>
      <div class="comments__content-nav">
        <div class="comments__content-answer">
        <a href="#answer"
        ><img src="img/score.svg" alt="Ответ" /> Ответить</a
      >
        </div>
        <div class="comments__content-block">
          <img
            src="img/up.png"
            alt="Нравится"
            class="comments__content-like"
          />
          <span
            class="
              comments__content-score comments__content-score--green
            "
            >+10</span
          >
          <img
            src="img/down.png"
            alt="Не нравится"
            class="comments__content-dis"
          />
        </div>
      </div>
    </div>
  </div><div class="comments__middle-item">
  <img
    src="img/info-avatar.png"
    alt="Аватар"
    class="comments__avatar"
  />
  <div class="comments__content">
    <div class="comments__content-title">
      <div class="comments__content-name">Михаил Степашин</div>
      <div class="comments__content-date">
        <span class="comments__day">17</span
        ><span class="comments__month">июля,</span
        ><span class="comments__time">18:38</span>
      </div>
    </div>
    <div class="comments__content-text">
      Хочу заметить, что автор этой статьи не написал, что не все
      могут получить статус самозанятого. Этот режим еще не ввели во
      всех регионах. Но если в вашем регионе есть, то поздравляю.
    </div>
    <div class="comments__content-nav">
      <div class="comments__content-answer">
      <a href="#answer"
      ><img src="img/score.svg" alt="Ответ" /> Ответить</a
    >
      </div>
      <div class="comments__content-block">
        <img
          src="img/up.png"
          alt="Нравится"
          class="comments__content-like"
        />
        <span
          class="
            comments__content-score comments__content-score--green
          "
          >+10</span
        >
        <img
          src="img/down.png"
          alt="Не нравится"
          class="comments__content-dis"
        />
      </div>
    </div>
  </div>
  </div>`;
      return false;
  };
});