const express = require('express');
const config = require("./config/config.json")
const app = express();
app.use(express.json());

// app.get('/', (req, res) => {
//     return res.send('Hello world')

// })

app.use('/index', require('./routes/index'))

app.listen(8000, () => {
    console.log('server has  started on 8000')
})