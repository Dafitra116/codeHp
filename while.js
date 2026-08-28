const btn = document.getElementById("btn")
const box = document.getElementById("box")
const count = document.getElementById("count")

let i = 10
let a = 100

btn.addEventListener("click", function(){
    while(i < a){
        const p = document.createElement("p")
        
        i++
        
        p.textContent = `lanjut ${i}`
        
        box.appendChild(p)
    }
    count.textContent = i
})

