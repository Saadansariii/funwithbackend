require('dotenv').config()
const express = require('express')

const app = express()

const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/route',(req , res) => {
    res.send('this is new route for direct to the path')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
