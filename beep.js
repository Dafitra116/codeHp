const Audio = require("audio")
const btn = document.getElementById("btn")

btn.addEventListener("click", function(){
const sound = new Audio('Aiyaya.mp3')
sound.play()
  
})