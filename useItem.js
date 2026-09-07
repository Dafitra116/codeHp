const balance = document.getElementById("balance")

const containerItem = document.getElementById("containerItem")

const containerInventory = document.getElementById("containerInventory")



const items = [
    {id: 1, nama: "item 1", harga: 2},
    {id: 2, nama: "item 2", harga: 4},
    {id: 3, nama: "item 3", harga: 6},
    {id: 4, nama: "item 4", harga: 3},
    {id: 5, nama: "item 5", harga: 8},
    {id: 6, nama: "item 6", harga: 1},
    {id: 7, nama: "dull blade", harga: 14},
]
const inventories = []

if(inventories.length === 0){
    const text = document.createElement("p")
    text.textContent = "Inventory kosong"
    containerInventory.appendChild(text)
}

let coin = 100

balance.textContent = `Coin: ${coin}`

items.map((item) => {
    
    const itemStore = document.createElement("div")
    const boxItem = document.createElement("div")
    const i = document.createElement("p")
    const hargaItem = document.createElement("p")
    const btn = document.createElement("button")

    itemStore.className = "itemStore"
    boxItem.className = "boxItem"
    btn.className = "btn"
    btn.textContent = "beli"
    i.textContent = item.nama
    hargaItem.textContent = `${item.harga} coin`
    
    containerItem.appendChild(itemStore)
    itemStore.appendChild(boxItem)
    boxItem.appendChild(i)
    itemStore.appendChild(hargaItem)
    itemStore.appendChild(btn)
    
    btn.addEventListener("click", function(){
        if(coin >= item.harga){
            coin -= item.harga
            balance.textContent = `Coin: ${coin}`

            inventories.push(item)

            containerInventory.innerHTML = ""
            console.log(inventories)

            const unik = [...new Set(inventories.map(i => i.id))]

            unik.forEach((id) => {
                const itemIventory = document.createElement("div")
                const boxItem = document.createElement("div")
                const i = document.createElement("p")
                const jumlahItem = document.createElement("p")
    
                const itemnya = items.find(i => i.id === id)
                const jumlah = inventories.filter(i => i.id === id).length
                
                itemIventory.className = "itemInventory"
                boxItem.className = "boxItem"
                i.textContent = itemnya.nama
                jumlahItem.textContent = jumlah
    
                containerInventory.appendChild(itemIventory)
                itemIventory.appendChild(boxItem)
                boxItem.appendChild(i)
                itemIventory.appendChild(jumlahItem)

            })
            
            
            
        } else {
            alert("coin ga cukup")
        }
    })
    
})


console.log("halo")