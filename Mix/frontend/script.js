const list = document.getElementById("list")
const input = document.getElementById("input")
const btnInput = document.getElementById("btnInput")
const container = document.getElementById("container")
const btnHapus = document.getElementById("btnHapus")

const BASE = "http://localhost:4321"

async function deleteData(){
    const inputId = document.getElementById("inputId")
    const hasilHapus = document.getElementById("hasilHapus")
    if(inputId.value == "") return alert("ga boleh kosong")
    try {
        const response = await fetch(`${BASE}/delete/${inputId.value}`, {
            method: "DELETE"
        })
        const data = await response.json()
        
        hasilHapus.textContent = data.pesan
        
        setTimeout(()=>{
            hasilHapus.textContent = ""
            
        },2000)

        inputId.value = ""
        
        getData()
        
    } catch (error) {
        hasilHapus.textContent = error.message
        inputId.value = ""
        
    }
    
}


btnHapus.addEventListener("click", function (){
    deleteData()
})

async function getData() {
    try {
        list.textContent = "Loading..."
        
        const response = await fetch(`${BASE}/get`)
        const data = await response.json()
        
        list.innerHTML = "" 
        container.innerHTML = ""

        data.forEach(element => {
            const text = document.createElement("li")
            const parts =  Object.entries(element).map(([key, val]) => `${key}: ${val}`)
            text.textContent = parts.join(", ")
            list.appendChild(text)

            text.className = "textList"

            const items = document.createElement("div")
            const boxItem = document.createElement("div")
            const namaItem = document.createElement("p")

            items.className = "items"
            boxItem.className = "boxItem"
            namaItem.className = "namaItem"


            namaItem.textContent = element.nama

            items.appendChild(boxItem)
            items.appendChild(namaItem)
            container.appendChild(items)

            })
    } catch (error) {
        list.textContent = error.message
        
    }
}

getData()

async function postData(){
    const hasilPost = document.getElementById("hasilPost")
    if(input.value == "") return alert("gaboleh kosong")
    try {
        list.textContent = "Loading..."
        
        const response = await fetch(`${BASE}/post`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({nama: input.value})
        })
        const data = await response.json()

        hasilPost.textContent = data.pesan
        
        setTimeout(() => {
            hasilPost.textContent = ""
            
        }, 2000);

        input.value = ""
        
        getData()
        
    } catch (error) {
        list.textContent = error.message
        input.value = ""
        
    }
}

btnInput.addEventListener("click", postData)