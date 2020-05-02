const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.status(200).send({message: 'Hello World'});
});

app.get('/ola', (req, res)=>{
    res.status(200).send({message: 'Essa é a rota ola', id: 69});
});

app.listen(3001, () => {
    console.log('Api rodando na porta 3001');
});
