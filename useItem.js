const balance = document.getElementById("balance")
const itemStore1 = document.getElementById("itemStore1")
const itemStore2 = document.getElementById("itemStore2")
const itemStore3 = document.getElementById("itemStore3")
const itemStore4 = document.getElementById("itemStore4")
const itemStore5 = document.getElementById("itemStore5")
const itemInventory1 = document.getElementById("itemInventory1")
const itemInventory2 = document.getElementById("itemInventory2")
const itemInventory3 = document.getElementById("itemInventory3")
const itemInventory4 = document.getElementById("itemInventory4")
const itemInventory5 = document.getElementById("itemInventory5")

const inventory = []

let coin = 100

const koin = document.createElement("p")
koin.textContent = `Coin: ${coin}`
balance.appendChild(koin)



console.log("halo")