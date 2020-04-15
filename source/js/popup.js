var button = document.querySelector(".button__order");
var popup = document.querySelector(".popup__wrapper-add");
var overlay = document.querySelector(".popup__overlay")

  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup__wrapper-show");
    overlay.classList.add("popup__overlay--show");
  });


/*overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
    popup.classList.remove("popup__wrapper-show"),
    overlay.classList.remove("popup__overlay--show")
  }),*/

window.addEventListener("keydown", function (e) {
  27 === e.keyCode && popup.classList.contains("popup__wrapper-show") && (popup.classList.remove("popup__wrapper-show"),
    overlay.classList.remove("popup__overlay--show"))
});
