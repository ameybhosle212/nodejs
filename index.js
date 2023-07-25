const http = require('http');
const express = require("express")
const app = express();
const PORT = 3000;

app.use(express.json())
// app.use()

app.get("/",(req,res)=>{
  res.send("Hello World");
})
app.listen(PORT)
