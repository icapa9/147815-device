var formLink=document.querySelector(".form-link"),form=document.querySelector(".main-form"),formClose=document.querySelector(".form-close"),catalogLink=document.querySelector(".open-menu"),catalogMenu=document.querySelector(".catalog-menu"),mapLink=document.querySelector(".map"),map=document.querySelector(".map-popup"),mapClose=document.querySelector(".map-popup button");catalogLink.addEventListener("click",function(a){a.preventDefault(),catalogMenu.classList.toggle("catalog-menu-show")}),"undefined"!=formLink&&(formLink.addEventListener("click",function(a){a.preventDefault(),form.classList.add("main-form-show")}),formClose.addEventListener("click",function(a){a.preventDefault(),form.classList.remove("main-form-show")})),"undefined"!=mapLink&&(mapLink.addEventListener("click",function(a){a.preventDefault(),map.classList.add("map-popup-show")}),mapClose.addEventListener("click",function(a){a.preventDefault(),map.classList.remove("map-popup-show")}));