const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hi World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`################################ ${process.env.REGION}`)
  console.log(`################################ ${process.env.NAME}`)
  console.log(`################################ ${process.env.LOG}`)
})
