const express = require("express")
const app = express();
const cors = require("cors")
const MongoClient = require('mongodb').MongoClient;
const { ObjectID } = require("mongodb");
const path = require("path");
const uri = "mongodb+srv://root:123@cluster0.6eb9r.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority?ssl=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if (err) {
        throw err;
    };
  });

app.use(express.json())
app.use(cors())



app.post("/add",(req,res)=>{

      client.db("efkar").collection("dertler").insertOne({
        isim:req.body.isim,
        sehir:req.body.sehir,
        ip:req.ip,
        mesaj:req.body.mesaj
    })
})

app.get("/get",(req,res)=>{

    
    client.db("efkar").collection("dertler").find({}).toArray(function(err,result){
        res.send(result)
    })
})

app.post("/istekEkle",(req,res)=>{
    client.db("efkar").collection("istekler").insertOne(
        {
            sarki:req.body.sarki
        }
    );
})

app.get("/istekleriAl",(req,res)=>{
    client.db("efkar").collection("istekler").find({}).toArray(function(err,result){
        res.send(result)
    })
})

app.get("/admin/login",(req,res)=>{
    client.db("efkar").collection("admin").find({}).toArray(function(err,result){
        res.send(result)
    })
})

app.get("/sifirla",(req,res)=>{
    client.db("efkar").collection("sarkilar").insertOne(
        {
            sarkilar: [
                "https://www.youtube.com/embed/8yk0dNCsN2Y",
                "https://www.youtube.com/embed/3zey7vKRR6w",
                "https://www.youtube.com/embed/oDGCM9VxhvI",
                "https://www.youtube.com/embed/vKRHf4a9FdA",
                "https://www.youtube.com/embed/YKKMKKsS7Vs",
                "https://www.youtube.com/embed/U0cxwSDUXyM",
                "https://www.youtube.com/embed/jMCjwWXGNRM",
                "https://www.youtube.com/embed/-baQjmK1TVg",
                "https://www.youtube.com/embed/fHGV2Rsh0Pc",
                "https://www.youtube.com/embed/_Xz9C6qsHEc",
                "https://www.youtube.com/embed/1MDKL5iI_xE",
                "https://www.youtube.com/embed/vJXyJ0S1txQ",
                "https://www.youtube.com/embed/RWWNPpOWYCM",
                "https://www.youtube.com/embed/0Gjz-KjpgO0",
                //"https://www.youtube.com/embed/rWO7Z-MU5Y",
                "https://www.youtube.com/embed/LElHMQyiK-o",
                "https://www.youtube.com/embed/nJAMhDJh74Q",
                "https://www.youtube.com/embed/W0KxKF_znfo",
                "https://www.youtube.com/embed/ANM3g3ukNtE",
                //"https://www.youtube.com/embed/BpUZ2O_OhA",
                "https://www.youtube.com/embed/erNoUAkv83w",
                "https://www.youtube.com/embed/IWpBzKPjtc0",
                "https://www.youtube.com/embed/Dgr5sMIydVo",
                "https://www.youtube.com/embed/sGzzOTJdBKQ",
                "https://www.youtube.com/embed/E71GG9mFZdg",
                "https://www.youtube.com/embed/sSHGfEz3x7A",
                "https://www.youtube.com/embed/d0YYMdXMfS0",
                "https://www.youtube.com/embed/zyKcYHNqW6c",
                "https://www.youtube.com/embed/0OkpA5DVY7Y",
                "https://www.youtube.com/embed/WMEJGmQ1nsQ",
                "https://www.youtube.com/embed/QKrx30AGWFA",
                "https://www.youtube.com/embed/FDDoJhrBTRg",
                "https://www.youtube.com/embed/_gFecG98WUI",
                "https://www.youtube.com/embed/Jsb-3WxYCt4",
                "https://www.youtube.com/embed/vgAc6vL0WqQ",
                "https://www.youtube.com/embed/nG7TO5JZ64o",
                "https://www.youtube.com/emded/XPC7La-244E",
                "https://www.youtube.com/embed/a867BOIBK1w",
                "https://www.youtube.com/embed/sgvXomg09qI",
                "https://www.youtube.com/embed/6CoXD6eCFak",
                "https://www.youtube.com/embed/Qwj2wvUDqvs",
                "https://www.youtube.com/embed/MINTMJZQgEc",
                "https://www.youtube.com/embed/1dOKeElDd7g",
                "https://www.youtube.com/embed/wt2vV7vAnkA",
                "https://www.youtube.com/embed/203C4LBM1kM",
                "https://www.youtube.com/embed/kslcVKvjsJQ",
                "https://www.youtube.com/embed/OqPnLdky0EI",
                "https://www.youtube.com/embed/zMj37f1E0nQ",
                "https://www.youtube.com/embed/ysOQ7LDv5CQ",
                "https://www.youtube.com/embed/ngSF9Tdxykc",
                "https://www.youtube.com/embed/59Pru5BRCwQ",
                "https://www.youtube.com/embed/OG7BxUFp9Z0",
                "https://www.youtube.com/embed/QoNpD5ZSe-U",
                "https://www.youtube.com/embed/kVPoKfY0ZSo",
                "https://www.youtube.com/embed/tjQUDymqzS8",
                "https://www.youtube.com/embed/4HlHLhOVjW4",
                "https://www.youtube.com/embed/FiMKPilWCME",
                "https://www.youtube.com/embed/4HlHLhOVjW4",
                "https://www.youtube.com/embed/PdJmZX-WsmM",
                "https://www.youtube.com/embed/_Oy5NcIk4ls",
                "https://www.youtube.com/embed/8LEZ21Edym8",
                "https://www.youtube.com/embed/UpLEbTKS_8E",
                "https://www.youtube.com/embed/kpTrBAVvVXM",
                "https://www.youtube.com/embed/CrU1yJ9QIP4",
                "https://www.youtube.com/embed/aNeA_oZ8Yro",
                "https://www.youtube.com/embed/hz_wsYi1sh0",
                "https://www.youtube.com/embed/A3US5mYSZJw",
                "https://www.youtube.com/embed/SFwMtAllm7o",
                "https://www.youtube.com/embed/qGVyWZGHEhs",
                "https://www.youtube.com/embed/RlZaEXU_ME0",
                "https://www.youtube.com/embed/VtGWqfFz1HU",
                "https://www.youtube.com/embed/AR73x7qTNjM",
                "https://www.youtube.com/embed/lwD1nolIW8s",
                "https://www.youtube.com/embed/CZjdL6bC3wg",
                "https://www.youtube.com/embed/qNDxaM-dk0Q",
                "https://www.youtube.com/embed/c5n1bYDC9Ac",
                "https://www.youtube.com/embed/BknfAb8xUg4",
                "https://www.youtube.com/embed/MbsoYRi9uYI",
                "https://www.youtube.com/embed/h7X7itf7C5g",
                "https://www.youtube.com/embed/sANxwABlHg4",
                "https://www.youtube.com/embed/3SnUZNxZviI",
                "https://www.youtube.com/embed/sANxwABlHg4",
                "https://www.youtube.com/embed/sCwCgXZVFM8",
                "https://www.youtube.com/embed/O_pbFaoEGS8",
                "https://www.youtube.com/embed/Xck41p3-Rfk",
                "https://www.youtube.com/embed/c7MQsbBj_to",
                "https://www.youtube.com/embed/MpGqUoukza8",
                "https://www.youtube.com/embed/1MeI03fhYAU",
                "https://www.youtube.com/embed/sYAiz-cLyfg",
                "https://www.youtube.com/embed/j2pJgSiF7u4",
                "https://www.youtube.com/embed/NeZ4IoSlZPg",
                "https://www.youtube.com/embed/WbvcHJgQ7UE",
                "https://www.youtube.com/embed/v_bNTaWy9Mw",
                "https://www.youtube.com/embed/3UHBlGN9TbQ",
                "https://www.youtube.com/embed/geGarlzTfmY",
                "https://www.youtube.com/embed/S7aVxXctXyg",
                "https://www.youtube.com/embed/9u0nX0vca6s",
                "https://www.youtube.com/embed/S-Rt4LgjQNs",
                "https://www.youtube.com/embed/wdTcTNo4sFQ",
                "https://www.youtube.com/embed/U0cxwSDUXyM",
                "https://www.youtube.com/embed/yIyawhHjzQI",
                "https://www.youtube.com/embed/-TO4ARh19eE",
                "https://www.youtube.com/embed/LoaB4gwQEpk",
                "https://www.youtube.com/embed/r0Oy6QOHQ5I",
                "https://www.youtube.com/embed/wtOHNhG0EZc",
                "https://www.youtube.com/embed/qSOL17R2aVY",
                "https://www.youtube.com/embed/bK-cMOn7fXU",
                "https://www.youtube.com/embed/FIxvQj3VfeE",
                "https://www.youtube.com/embed/EIrKMLa8z4U",
                "https://www.youtube.com/embed/rbVRFTsUUCY",
                "https://www.youtube.com/embed/IShbePzxIsA",
                "https://www.youtube.com/embed/-8qifzv_F4Q",
                "https://www.youtube.com/embed/2YYLr6yVruQ",
                "https://www.youtube.com/embed/QI1IhAcnlVk",
                "https://www.youtube.com/embed/lYNMQBKDhwg",
                "https://www.youtube.com/embed/dkmljWU3RJ8",
            ]
        }
    );
})

app.post("/istek/onay",(req,res)=>{
    client.db("efkar").collection("sarkilar").update(
        {_id:ObjectID("5ff71f503c3a2d27d4de0092")},
        {$push : {sarkilar : req.body.sonuc}}
    )

 client.db("efkar").collection("istekler").deleteOne({_id:ObjectID(req.body.id)})
})

app.post("/istek/sil",(req,res)=>{
   

 client.db("efkar").collection("istekler").deleteOne({_id:ObjectID(req.body.id)})
})

app.get("/sarkilar/list",(req,res)=>{
    client.db("efkar").collection("sarkilar").find({}).toArray(function(err,result){
        res.send(result)
    })
})

app.post("/sarki/ekle",(req,res)=>{
    client.db("efkar").collection("sarkilar").update(
        {_id:ObjectID("5ff71f503c3a2d27d4de0092")},
        {$push : {sarkilar : req.body.sarki}}
    )
})

// BUILD SERVE 
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"))
    })
}

app.listen(process.env.PORT || 5000)

