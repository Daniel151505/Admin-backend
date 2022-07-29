const Usuario = require("../models/usuario");
const { response } = require('express');

const getUsuarios = async(req, res) => {
  
  const usuarios = await Usuario.find({}, 'nombre email role google')
  
  res.json({
        ok: true,
        usuarios
    });
}

const crearUsuario = async  (req, res = response) => {
  const {email, password, name} = req.body;

  try {
    const existeEmail = await Usuario.findOne({email});

    if(existeEmail){
      return res.status(400).json({
        ok: false,
        msg: 'El correo ya esta registrado'
      })
    }

    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json({
        ok: true,
        usuario
    });
  } 
  catch(error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado'
    });
  }
}

module.exports = {
  getUsuarios,
  crearUsuario
}