function myFunction() {
  var x = document.getElementById("list");
  var y = document.getElementById("button");
  if (x.style.display === "none") {
    x.style.display = "flex";
    y.innerText = "Ver Menos";
  } else {
    x.style.display = "none";
    y.innerText = "Ver Más";
  }
}
const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");
// claudio define el ancho del cliente 
const testimonios = document.querySelector("#testimonios");
buttonsWrapper.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
        if (testimonios.clientWidth <= 780 ){
          slides.style.transform = "translateX(-11%)";
          e.target.classList.add("active");
        }else{
          slides.style.transform = "translateX(-33.3%)";
          e.target.classList.add("active");
        }
    } else if (e.target.classList.contains("third")) {
      if (testimonios.clientWidth <= 780 ){
        slides.style.transform = "translatex(-22%)";
        e.target.classList.add("active");
      }else{
        slides.style.transform = "translatex(-66.6%)";
        e.target.classList.add("active");
      }
    } else if (e.target.classList.contains("fourth")) {
      if (testimonios.clientWidth <= 780 ){
        slides.style.transform = "translatex(-33%)";
        e.target.classList.add("active");
      }else{
        slides.style.transform = "translatex(-60%)";
        e.target.classList.add("active");
      }
    } else if (e.target.classList.contains("fifth")) {
      if (testimonios.clientWidth <= 780 ){
        slides.style.transform = "translatex(-44.1%)";
        e.target.classList.add("active");
      }else{
        slides.style.transform = "translatex(-80%)";
        e.target.classList.add("active");
      }
    } else if(e.target.classList.contains("sixth")){
      slides.style.transform = "translatex(-55.5%)";
      e.target.classList.add("active");
    } else if(e.target.classList.contains("seventh")){
      slides.style.transform = "translatex(-66.7%)";
      e.target.classList.add("active");
    } else if(e.target.classList.contains("eighth")){
      slides.style.transform = "translatex(-77.8%)";
      e.target.classList.add("active");
    } else if(e.target.classList.contains("nineth")){
      slides.style.transform = "translatex(-89.1%)";
      e.target.classList.add("active");
    }

  }
});
const burgerMenu = document.querySelector("#burgerMenu");
const sidebar = document.querySelector("#sidebar");
const btnClose = document.querySelector("#btn-close");
const listClose = document.querySelector("#list-close");

function open() {
  if (sidebar.classList.contains("show")) {
    sidebar.classList.remove("show");
  } else {
    sidebar.classList.add("show");
  }
}
burgerMenu.addEventListener("click", open);
btnClose.addEventListener("click", open);
Array.from(listClose.children).forEach((item) => item.addEventListener("click", open));



