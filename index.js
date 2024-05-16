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
    res.send("delete")
})

app.patch("/:id", (req, res) =>{
    let {id} = req.params

    arr[id]={...arr,...req.body}

    res.send("update")
})

app.put("/:id", (req, res) =>{
    let {id} = req.params

    arr[id]=req.body

    res.send("update put")
})


app.listen(8000, () => {
    console.log("")
})