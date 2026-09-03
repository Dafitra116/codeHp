import { useState } from "react"

function app(){

  const [coin, setCoin] = useState(100)

  const [items] = useState([
    { id: 1, nama: "item 1", harga: 2 },
    { id: 2, nama: "Item 2", harga: 5 },
    { id: 3, nama: "Item 3", harga: 6 },
    { id: 4, nama: "Item 4", harga: 8 },
    { id: 5, nama: "Item 5", harga: 3 },
  ])

  const [inventory, setInventory] = useState ([0, 0, 0, 0, 0])

  function beli(index, harga){
    if(coin >= harga){
      setCoin(coin - harga)
      const inventoryBaru = [...inventory]
      inventoryBaru[index] += 1
      setInventory(inventoryBaru)
    } else{
      alert("Coin ga cukup")
    }
  }
  return (
    <div>
      <h1>item shop</h1>
      <p>Coin: {coin}</p>

      <div>
        <p>store</p>
        {items.map((item) => (
          <div key={item.id}>
            <p>{item.nama}</p>
            <p>{item.harga} coin</p>
            <button onClick={() => beli(item.id - 1, item.harga)}>beli</button>
          </div>
        ))}
      </div>

      <div>
        <p>Inventory</p>
        {items.map((item) => (
          <div key={item.id}>
            <p>{item.nama}</p>
            <p>jumlah: {inventory[item.id - 1]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default app