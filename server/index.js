const express = require('express');
const app = express()
let config = require('./timerConst.js')

app.get('/timer2', function (req, res) {
    res.send(config)
})

app.listen(3000, function () {
    /* eslint-disable no-console */
    console.log("server list on 3000 port");
})



