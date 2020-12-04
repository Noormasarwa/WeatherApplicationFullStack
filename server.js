const express = require('express')
const app = express()
const path = require('path')

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/weatherAPP", {useNewUrlParser: true, useUnifiedTopology: true})


const api = require('./server/route/api')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/',api)


const port = 3000
app.listen(port, function () {
    console.log(`server runs on port : ${port}`)

})

