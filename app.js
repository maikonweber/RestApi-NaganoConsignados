const express = require('express');

const app = express();



// Requisição, Resposta, E Next 
app.use( (req, res, next)=>{
    res.status(200).send({
        mensagem: "Ok, Deu Certo"
    });

});

module.exports = app;

