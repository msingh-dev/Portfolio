var numSquares = 9 ;
var colors = generateRandomColors(numSquares) ;
var squares = document.querySelectorAll(".square") ;
var pickedColor = pickColor() ;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
colorDisplay.textContent = pickedColor ; 
var h1 = document.querySelector("h1") ;
var resetButton = document.querySelector("#reset") ;
var easybtn = document.querySelector("#easybtn") ;
var hardbtn = document.querySelector("#hardbtn") ;
var probtn = document.querySelector("#probtn") ;

easybtn.addEventListener("click", function(){
  hardbtn.classList.remove("selected") ;
  easybtn.classList.add("selected") ;
    probtn.classList.remove("selected") ;
   numSquares = 3 ;
  colors = generateRandomColors(numSquares) ;
  pickedColor = pickColor() ;
  colorDisplay.textContent = pickedColor ;
  for(var i = 0 ; i < squares.length ; i++){
      if(colors[i]){
          squares[i].style.background = colors[i] ; 
      }else{
          squares[i].style.display = "none" ; 
      }
  }
   h1.style.background = "#232323" ;
}) 

hardbtn.addEventListener("click" , function(){
    hardbtn.classList.add("selected") ;
    easybtn.classList.remove("selected") ;
    probtn.classList.remove("selected") ;
    numSquares = 6 ;
    colors = generateRandomColors(numSquares) ;
    pickedColor = pickColor() ;
    colorDisplay.textContent = pickedColor ;
  
    for(var i = 0 ; i < squares.length ; i++){
        if(colors[i]){
          squares[i].style.background = colors[i] ; 
        }else{  squares[i].style.display = "none" ;
             }
      }
        h1.style.background = "232323" ;
}) 


probtn.addEventListener("click", function(){
    probtn.classList.add("selected") ;
    hardbtn.classList.remove("selected") ;
    easybtn.classList.remove("selected") ;
   numSquares = 9 ;
  colors = generateRandomColors(numSquares) ;
  pickedColor = pickColor() ;
  colorDisplay.textContent = pickedColor ;
  for(var i = 0 ; i < squares.length ; i++){
      if(colors[i]){
          squares[i].style.background = colors[i] ;
          squares[i].style.display = "block" ; 
      }
  }
   h1.style.background = "steelblue" ;
}) 



//RWSET BUTTON FUNCTION

resetButton.addEventListener("click" , function(){
    //generate all new colors 
    colors = generateRandomColors(numSquares) ;
    //picked a color from that 
    pickedColor = pickColor() ; 
    //change color display to match the color 
    colorDisplay.textContent = pickedColor ;
    this.textContent = "New Colors"
    messageDisplay.textContent = "" ;
    //change colors of square
    for(var i = 0; i < squares.length ; i++){
        squares[i].style.background = colors[i] ;
    }
    h1.style.background = "#232323" ;
    resetButton.textContent = "New Colors"
})



for(var i=0; i < squares.length; i++){
    squares[i].style.background = colors[i] ;
squares[i].addEventListener("click" , function(){
    // Grab the clicked color
   var clickedColor = this.style.background ;
   console.log(clickedColor) ;   
    // compare clickedcolor with the pickedcolor
  if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!"
      resetButton.textContent = "Play Again!"
      changeColors(clickedColor) ;
      h1.style.background = clickedColor ;
  }else{
      this.style.background = "#232323" ;
      messageDisplay.textContent = "Try Again"
  }
})
}
          
  function changeColors(color){
      //loop through all the squares
      for(var i=0; i < squares.length; i++){
          //change each color to match the given color
          squares[i].style.background = color ;
      }
  }        

  function pickColor(){
     var random = Math.floor(Math.random() * colors.length) ;
     return colors[random] ; 
  }

  function generateRandomColors(num){
      //make an array
var arr = [] ;
      //add random colors to array
      for(var i = 0 ; i < num ; i++){
          arr.push(randomColor()) ;
      }
      //return that array
      return arr ;
  }

function randomColor(){
//pick a "red"  from 0 - 255
var r = Math.floor(Math.random() * 256) ;
//pick a "green"  from 0 - 255
var g = Math.floor(Math.random() * 256) ;
//pick a "blue"  from 0 - 255
var b = Math.floor(Math.random() * 256) ;
return "rgb(" + r + ", " + g + ", " + b + ")" ;
}





