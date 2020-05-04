const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type,Accept');
    res.setHeader('Access-Control-Allow-Methos','GET, POST, PATCH, DELETE, PUT, OPTIONS');
    next();
});

app.use((req,res,next) => {
    res.status(200).json({
        message:'Server plugged successfully'
    })
})

module.exports = app;