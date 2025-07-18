const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Thank You! Januda')
})

app.get('/hello', (req, res) => {
  res.send('Heloooooo Thameera!')
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`################################ ${process.env.REGION}`)
  console.log(`################################ ${process.env.NAME}`)
  console.log(`################################ ${process.env.LOG}`)
})
