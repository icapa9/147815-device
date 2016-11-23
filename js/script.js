var formLink = document.querySelector(".form-link");
var form = document.querySelector(".main-form");
var formClose = document.querySelector(".form-close");
var catalogLink = document.querySelector(".open-menu");
var catalogMenu = document.querySelector(".catalog-menu");
var mapLink = document.querySelector(".map");
var map = document.querySelector(".map-popup");
var mapClose = document.querySelector(".map-popup button");


catalogLink.addEventListener("click", function(event) {
  event.preventDefault();
  catalogMenu.classList.toggle("catalog-menu-show");
});

if (formLink != "undefined") {
  formLink.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.add("main-form-show");
  });

  formClose.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.remove("main-form-show");
  });
}

if (mapLink != "undefined") {
  mapLink.addEventListener("click", function(event) {
    event.preventDefault();
    map.classList.add("map-popup-show");
  });

  mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    map.classList.remove("map-popup-show");
  });
}
