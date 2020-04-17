var button = document.querySelectorAll(".button__order");
var popup = document.querySelector(".popup__order");
var overlay = document.querySelector(".popup__overlay")

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function (evt) {
    evt.preventDefault(),
      popup.classList.add("popup__order--show"),
      overlay.classList.add("popup__overlay--show")
  })
};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup__order--show")) {
      popup.classList.remove("popup__order--show");
      overlay.classList.remove("popup__overlay--show");
    }
  }
});

window.addEventListener("click", function (evt) {
  if (evt.target === overlay) {
    evt.preventDefault();
    if (popup.classList.contains("popup__order--show")) {
      overlay.classList.remove("popup__overlay--show");
      popup.classList.remove("popup__order--show");
    }
  }
});
