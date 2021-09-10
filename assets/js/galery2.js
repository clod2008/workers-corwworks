// HTL ref
const btnSlideARight = document.getElementById('slideARight')
const btnSlideALeft = document.getElementById('slideALeft')
const slideItemsA = document.getElementsByClassName('slideA')


// Var
var indexOfSlideA = 0




console.log(slideItemsA)




const slideChange = (sliderIndex, slider = [] ) => {
  if( sliderIndex <= slider.length ){
    sliderIndex ++
  }
  if( sliderIndex >= slider.length ){
    sliderIndex = 0
  }
  console.log(sliderIndex)
  
  indexOfSlideA = sliderIndex
  
}


//Listeners
btnSlideARight.addEventListener('click', () =>{
  console.log('netx')
  slideChange(indexOfSlideA, slideItemsA,)
  slideItemsA[indexOfSlideA].classList.remove('mySlides')
  
  
  
})
btnSlideALeft.addEventListener('click', () =>{
  console.log('back')
})