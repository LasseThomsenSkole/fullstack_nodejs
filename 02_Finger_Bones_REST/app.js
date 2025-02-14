const express = require("express")

const app = express();

const fingerBones = [
    {
        id: 1,
        name: "Phalange Knowles"
    },
    {
        id: 2,
        name: "Distal Phalange"
    }
]

app.get("/fingerbones", (req, res) =>{
    res.send({data: fingerBones})
})

app.get("/fingerbones/:id", (req, res) =>{
    const fingerboneId = Number.parseInt(req.params.id)
    const foundFingerbone = fingerBones.find((fingerbone)=>{
        return fingerbone.id === fingerboneId
    })
    if (!foundFingerbone) {
        res.status(404).send({error: "not found"})
    }
    res.send({data: foundFingerbone})
})

const PORT = 80
app.listen(PORT)