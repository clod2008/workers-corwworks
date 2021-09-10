const slide1BtnRight     = document.querySelector('#slide1BtnRight');
const slide1BtnLeft      = document.querySelector('#slide1BtnLeft');
const slide1BtnRight2     = document.querySelector('#slide1BtnRight2');
const slide1BtnLeft2      = document.querySelector('#slide1BtnLeft2');
const slider1Pic = [];

// "mySlides"
const sliderMaker = ( slideList , sliderNum =[ ] ) =>{
      const slideItem = document.getElementsByClassName( slideList )
      sliderNum.push(...slideItem )
}

sliderMaker( 'mySlides', slider1Pic )



var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n, slider) {
  
  console.log(slider)
  var i;
  var x = slider;
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
  
}

showDivs(slideIndex, slider1Pic);

slide1BtnRight.addEventListener('click', () =>{
  console.log(slideIndex)  
  slideIndex ++
  console.log(slideIndex)

})
slide1BtnLeft.addEventListener('click', () =>{
    plusDivs(-1)
})

slide1BtnRight2.addEventListener('click', () =>{
  plusDivs(1)
})
slide1BtnLeft2.addEventListener('click', () =>{
  plusDivs(-1)
})

