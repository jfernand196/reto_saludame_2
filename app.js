const express = require('express');
const app = express();

app.get('/makers/:name', (req, res) =>{
    const names = req.params.name
    let result = names[0].toUpperCase() + names.slice(1);

    res.send(`<h1>Hola ${result}!</h1>`)
})


app.listen(3000, () =>{console.log('Listening on port 3000...')})