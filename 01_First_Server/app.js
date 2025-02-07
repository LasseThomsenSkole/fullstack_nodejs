const express=  require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send({data: "hello world"});
});

app.get("/blablabla", (req, res)=>{
    res.send({data: "bla bla bla"});
});
app.get("/yourfavoritenumber/:favoriteNumber", (req, res) =>{
    const number= req.params.favoriteNumber;
    res.send({data: number})
})

app.listen(80);