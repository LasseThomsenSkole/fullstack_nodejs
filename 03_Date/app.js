const express = require("express")
const app = express()

console.log(new Date()) // UTC
console.log(Date()) // local time zone / OS time zone
const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "juli",
    "august",
    "september",
    "October",
    "november",
    "december"
]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get("/months/v1",(req, res)=>{
    res.send({data: months[new Date().getUTCMonth()]})
})

app.get("/months/v2",(req, res)=>{
    const currentMonth = new Date().toLocaleDateString("en-uk", {month: "long"})
    res.send({data: currentMonth})
})

app.get("months/v3", (req, res)=>{
    const currentMonth = Date.split(" ")[1]
    res.send({data: currentMonth})
})

app.get("/days/v1", (req,res)=>{
    const currentDay = new Date().toLocaleDateString("en-uk", {weekday: "long"})
    res.send({data: currentDay})
})
app.get("/days/v2", (req, res)=>{
    const currentDay = new Date().getDay()
    res.send({data: days[currentDay]})
})
const PORT = 80
app.listen(PORT)