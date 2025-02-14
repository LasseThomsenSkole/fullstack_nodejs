const express=  require('express');
const app = express();
app.use(express.json())

app.get("/", (req, res)=>{
    res.send({data: "hello world"});
});

app.get("/search", (req, res)=>{
    res.send({data: `you have searched for: ${req.query.q}`});
});

app.get("/blablabla", (req, res)=>{
    res.send({data: "bla bla bla"});
});

app.get("/yourfavoritenumber/:favoriteNumber", (req, res) =>{
    const number= req.params.favoriteNumber;
    res.send({data: number})
})

app.get("/favoritethings/:animal/:flower", (req,res) =>{
    res.send({data:`${req.params.flower} & ${req.params.animal}`})
})
app.get("/welcomepage", (req, res)=>{
    res.sendFile(__dirname +'/index.html')
})

app.post("/favoritepolitiker", (req, res)=>{
    console.log(req.body)
    res.send({data: req.body})
})

app.post("/send", (req, res)=>{
    const dataObject = req.body
    res.send({data: dataObject})
})

app.listen(80);