var button = document.querySelector(".write-us-btn");
var showPopup = document.querySelector(".popup");
var showOverlay = document.querySelector(".popup-overlay");
var closePopup = document.querySelector(".popup__close");
var personName = showPopup.querySelector("[name=popup-name]");
var personMail = showPopup.querySelector("[name=popup-email]");
var formCheck = showPopup.querySelector("form");
var storage = localStorage.getItem("personName");

button.addEventListener("click", function (event) {
  event.preventDefault();
  showPopup.classList.add("popup-show");
  showOverlay.classList.add("popup-overlay-show");

  if (storage) {
    personName.value = storage;
    personMail.focus();
  } else {
    personName.focus();
  }
});

closePopup.addEventListener("click", function (event) {
  event.preventDefault();
  showPopup.classList.remove("popup-show");
  showPopup.classList.remove("popup-error");
  showOverlay.classList.remove("popup-overlay-show");
});

formCheck.addEventListener("submit", function (event) {
  if (!personName.value || !personMail.value) {
    event.preventDefault();
    showPopup.classList.add("popup-error");
  } else {
    localStorage.setItem("personName", personName.value);
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (showPopup.classList.contains("popup-show")) {
      showPopup.classList.remove("popup-show");
      showPopup.classList.remove("popup-error");
      showOverlay.classList.remove("popup-overlay-show");
    }
  }
});