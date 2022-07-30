const { response } = require('express')
const bcrypt = require('bcryptjs');

const Usuario  = require('../models/usuario')


const login = async (req, res = response) => {

    const {email, password} = req.body

    try {

        //Verificar email
        const  usuarioDB = await Usuario.findOne({ email})

        if( !usuarioDB ) {
            return res.status(404).json({ 
                ok: false,
                msg: 'Email no encontrado'
            })
        }

        // Verificar contraseña
        const validPassword = bcrypt.compareSync(password, usuarioDB.password)
        
        if( !validPassword ) {
            return res.status(404).json({
                ok: false,
                msg: 'Contrasea no válida'
            })
        }

        res.json({
            ok: true,
            msg: 'Bienvenido'
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            ok: false,
            msg: 'Hola con el administrador'
        })
    }

}

module.exports = {
    login
}