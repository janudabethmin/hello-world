const express = require('express')
const app = express()
const port = 3000


app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
  next() 
})

app.get('/', (req, res) => {
  res.send('Aneeeeeeeeeeeeeeeeeeeee Pasan')
})


app.get('/hello', (req, res) => {
  res.send('Aneeeeeeeeeeeeeeeeeeeee Pasan')
})

app.get('/api/v1', (req, res) => {
  res.send('Aneeeeeeeeeeeeeeeeeeeee Pasan')
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`${process.env.REGION}`)
  console.log(`${process.env.NAME}`)
  console.log(`${process.env.LOG}`)
})
