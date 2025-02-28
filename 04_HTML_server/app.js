const express = require("express")

//const partiesLibrary = require("./util/partiesLibrary.js")
//console.log(partiesLibrary)

const {parties, valueObj} = require("./util/partiesLibrary.js")

console.log(parties)

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
