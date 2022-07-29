require('dotenv').config();

const express = require('express');
const cors = require('express');

const { dbConnection } = require('./database/config')

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use(cors());

//Base de datos
dbConnection();

// Rutas

app.use('/api/usuarios', require('./routes/usuarios'))

app.listen(3000, () => {
    console.log('Serivdor corriendo en puerto '+ 3000)
})