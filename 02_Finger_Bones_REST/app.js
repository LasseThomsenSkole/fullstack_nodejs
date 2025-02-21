const express = require("express")

const app = express()

app.use(express.json())

let fingerBones = [
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

app.post("/fingerbones", (req, res) =>{
    const maxId = fingerBones.reduce((max, bone) => Math.max(max, bone.id), 0);
    const newFingerbone = {
        id: maxId + 1,
        name: req.body.name
    }
    fingerBones.push(newFingerbone);
    res.send({data: newFingerbone})
})

app.put("/fingerbones/:id", (req, res)=>{
    const fingerboneToBeUpdated = fingerBones.find(fingerbone => fingerbone.id === Number(req.params.id))
    if (!fingerboneToBeUpdated){
        res.status(404).send("fingerbone not found")
    }
    fingerboneToBeUpdated.name = req.body.name
    res.send({data: fingerboneToBeUpdated})
})

app.delete("/fingerbones/:id", (req,res)=>{
    const fingerboneToBeDeleted = fingerBones.find(fingerbone => fingerbone.id === Number(req.params.id))
    if (!fingerboneToBeDeleted){
        res.status(404).send("fingerbone not found")
    }
    fingerBones = fingerBones.filter(fingerbone=> fingerbone.id !== fingerboneToBeDeleted.id)
    res.send({data: fingerBones});
})

const PORT = 80
app.listen(PORT)