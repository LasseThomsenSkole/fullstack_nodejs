const express = require("express")

const app = express()
let visitorCount= 0;

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/frontpage.html")
})

app.get("/visitorcounts", (req, res)=>{
    visitorCount++
    res.send({data: visitorCount})
})

const PORT = 80
app.listen(PORT)
