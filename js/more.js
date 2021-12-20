$(document).ready(function(){
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