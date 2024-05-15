const express = require('express')

const app = express()
app.use(express.json())

let arr = []
app.get('/', (req, res) => {
    res.send(arr)
})

app.post("/", (req, res) => {
    console.log(req.body);
    arr.push(req.body)
    res.send("data: ")
})

app.delete("/:id", (req, res) => {
    let {id} = req.params
    arr.splice(id, 1)
    
    
    res.send("data: ")
})
app.listen(8090, () => {
    console.log("")
})