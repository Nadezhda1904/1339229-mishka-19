// Слайдер

// Отзывы
var items = document.querySelectorAll(".slider__item");
var prev = document.querySelector(".slider__button--prev");
var next = document.querySelector(".slider__button--next");
var slider = document.querySelector(".slider");


slider.classList.remove("slider--nojs");

function startSlider(items, prev, next) {
  num = 0;
  items[num].classList.add("slider__item--show");

  prev.addEventListener("click", function (e) {
    e.preventDefault();
    removeStyle();

    num--;
    if (num == -1) {
      num = 2;
    }
    slideShow();
  });

  next.addEventListener("click", function (e) {
    e.preventDefault();
    removeStyle();

    num++;
    if (num == 3) {
      num = 0;
    }
    slideShow();
  });

  function removeStyle() {
    items.forEach(function (item) {
      item.classList.remove("slider__item--show");
    });
  }

  function slideShow() {
    items[num].classList.add("slider__item--show");
  }
}

startSlider(items, prev, next);
