const express = require('express')
const app = express()
const port = 3000


app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
  next() 
})

app.get('/', (req, res) => {
  res.send('Thank You, Thameera! Nilesh')
})


app.get('/hello', (req, res) => {
  res.send('Hi, Thameera! JAnuda Nilesh')
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH ${process.env.REGION}`)
  console.log(`HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH ${process.env.NAME}`)
  console.log(`HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH ${process.env.LOG}`)
})
