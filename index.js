const express = require('express');

const app = express();

const PORT = process.env.PORT ?? 8080;

app.get('/', (req, res)=>{
  return res.json({msg: "Hellow Saqib From Server"})
})

app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`)
})