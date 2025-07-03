import http from 'http'

const server = http.createServer((req,res)=>{
    res.end("GoodMornig");
})
server.listen(8081,()=>{
    console.log("Server started");
})