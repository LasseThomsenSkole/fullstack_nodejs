//const express = require("express")
import express from 'express';
import path from 'path';
import partiesLibraryES from './util/partiesLibraryES.js';
//const partiesLibrary = require("./util/partiesLibrary.js")
//console.log(partiesLibrary)

//const {parties, valueObj} = require("./util/partiesLibrary.js")

//console.log(parties)
const app = express()
app.use(express.static("public"))

let visitorCount= 0;

app.get("/", (req, res) =>{
    res.sendFile(path.resolve("public/frontpage/frontpage.html"))
})

app.get("/visitorcounts", (req, res)=>{
    visitorCount++
    res.send({data: visitorCount})
})

app.get("/partypage", (req, res)=>{
    res.sendFile(path.resolve("public/partypage/partypage.html"))
})

const PORT = 80
app.listen(PORT)
