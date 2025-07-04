import express from 'express'
const app = express()

app.listen(8080, ()=>{
    console.log("server started");
});

// app.get("/",(req,res)=>{
//     res.send("Hello world");
// })

app.get("/products",(req,res)=>{
    // res.send("product list");
    res.json({
        id:1,
        name: "product 1",
        price: 25
    });
});

app.get("/ab*cd",(req,res)=>{
    res.send("hello");
})

// app.get('/:name', (req, res) => {
//     const name = req.params.name; 
//     res.send(`Hello ${name}`);    
// });

// app.get("/name",(req,res)=>{
//     res.send("Good morning");
// })

//localhost:8080//name/shivam/age/22
app.get('/name/:name/age/:age', (req,res)=>{
    res.send(`hello ${req.params.name} your age is ${req.params.age}`);
})

app.get("/",(req,res)=>{
    res.send(req.headers.authorization);
})

//localhost:8080/?name=john&age=21
app.get("/", (req,res)=>{
    res.send(req.query.name+req.query.age);
})

app.get("/",(req,res)=>{
    res.send("get request");
})

app.post("/",(req,res)=>{
    res.send("post request")
})

app.delete("/",(req,res)=>{
    res.send("delete request")
})