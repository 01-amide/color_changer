document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById("change-color-btn") 
    let box = document.getElementById("color-box")
    button.addEventListener("click", function(){
        box.style.backgroundColor = `rgb(${rndInt(0, 255)}, ${rndInt(0, 255)}, ${rndInt(0, 255)})` //making an rgb color with random values
    })
})

// function to generate random numbers (for random rgb values)
function rndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}