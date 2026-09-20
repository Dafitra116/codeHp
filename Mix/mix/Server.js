const express = require("express")
const cors = require("cors")
const fs = require("fs")
const app = express()

let DATA = JSON.parse(fs.readFileSync("../data/data.json", "utf-8"))

app.use(cors())
app.use(express.json())

app.get("/get", (req, res) => {
    res.json(DATA)
})

app.post("/post", (req, res) => {
    const dataBaru = req.body

    const idTertinggi = DATA.length > 0 ? Math.max(...DATA.map(item => item.id)) : 0
    
    const isiDataBaru = 
    {
        id: idTertinggi + 1,
        nama: dataBaru.nama
    }
    DATA.push(isiDataBaru)
    fs.writeFileSync("../data/data.json", JSON.stringify(DATA))
    res.json({pesan: "berhasil di tambahkan"})
})

app.delete("/delete/:id", (req, res) => {
    DATA = DATA.filter(item => item.id !== Number(req.params.id))
    fs.writeFileSync("../data/data.json", JSON.stringify(DATA))
    res.json({pesan: "berhasil di hapus"})

})

app.listen(4321, ()=>{
    console.log("server jalan di port 4321 good")
})