const express = require("express")

const app = express()

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/frontpage.html")
})


const PORT = 80
app.listen(PORT)
