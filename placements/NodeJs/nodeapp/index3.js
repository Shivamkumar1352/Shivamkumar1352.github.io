import http from 'http'

const server = http.createServer((req, res)=>{
    res.end("Request recieved....");
});

server.listen(8080,()=>{
    console.log("Server started");
})
