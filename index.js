require('dotenv').config();

const express = require('express');
const cors = require('express')

const { dbConnection } = require('./database/config')

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use(cors());

//Base de datos
dbConnection();

console.log(process.env)

// Rutas
app.get( '/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })

} );

app.listen(3000, () => {
    console.log('Serivdor corriendo en puerto '+ 3000)
})