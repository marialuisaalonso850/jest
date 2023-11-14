import express from'express'

const app = express()

app.get('/ping',(req,res)=>{
    res.send("pong")
})

app.get('/tasks',(req,res)=>{
res.json([]);
})
app.listen(3000)
console.log("server is runing");

export default app;