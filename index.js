require('dotenv').config();

const express = require('express');
const cors = require('express');

const { dbConnection } = require('./database/config')

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use(cors());

// Carpeta pública
app.use( express.static( 'public' ) )

//Lectura y parseo del body
app.use( express.json() );

//Base de datos
dbConnection();

// Rutas
app.use('/api/usuarios', require('./routes/usuarios')),
app.use('/api/hospitales', require('./routes/hospitales')),
app.use('/api/medicos', require('./routes/medicos')),
app.use('/api/todo', require('./routes/busquedas')),
app.use('/api/login', require('./routes/auth'))
app.use('/api/upload', require('./routes/uploads'))

app.listen(3000, () => {
    console.log('Serivdor corriendo en puerto '+ 3000)
})