const express = require('express');
const app = express();

app.get('/makers/:name', (req, res) =>{
    const names = req.params.name
    res.send(`<h1>Hola ${names}!</h1>`)
})


app.listen(3000, () =>{console.log('Listening on port 3000...')})