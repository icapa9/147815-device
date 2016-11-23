var formLink = document.querySelector(".form-link");
var form = document.querySelector(".main-form");
var formClose = document.querySelector(".form-close");
var catalogLink = document.querySelector(".open-menu");
var catalogMenu = document.querySelector(".catalog-menu");

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
